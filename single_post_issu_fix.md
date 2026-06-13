## Single post issue — diagnosis and fix

Date: 2026-06-13

This document explains how I diagnosed and fixed the problem where clicking a single post (title or "Read More") landed on a blank page. It lists the exact code changes, the commands I used to verify the fix, and suggestions for follow-ups.

Summary (TL;DR)
- Symptom: All posts load on the Home page (`/api/posts`), but clicking a single post produced a blank page; direct API calls to `/api/posts/1` returned 404.
- Root cause: The Laravel app exposed `/api/posts` (list) but not `/api/posts/{id}` (single); React expected a per-post API route. Also the React router had `/SinglePost/:id` but the `Post` component linked to `/post/:id`.
- Fixes applied:
  1. Added single-post API route: `GET /api/posts/{id}` in `laravelwebsite/routes/api.php`.
  2. Normalized the React single-post component (`src/Pages/SinglePost.js`) to be null-safe and to map backend field names to the props expected by `Post`.
  3. Added a client route alias `/post/:id` in `src/App.js` so existing `Post` links work.
  4. Hid the "Read More" label on the single-post layout by passing `showReadMore={false}` to the `Post` component and making `Post` honor that prop.

Files I edited
- `laravelwebsite/routes/api.php` — add `/api/posts/{id}` route.
- `React-Props-State-AI-Final/src/Pages/SinglePost.js` — clean up, null-safety, normalize fields, pass showReadMore=false.
- `React-Props-State-AI-Final/src/App.js` — add `/post/:id` route alias.
- `React-Props-State-AI-Final/src/Components/Post.js` — add `showReadMore` prop handling.

What I changed (high level)
- Laravel `routes/api.php`: added a simple route that returns JSON or 404 when not found.

  Example snippet added:

```php
// Single post API route
Route::get('/posts/{id}', function ($id) {
    $post = \App\Models\Post::find($id);
    if (! $post) {
        return response()->json(['message' => 'Post not found'], 404);
    }
    return response()->json($post);
});
```

- React `SinglePost.js`: fetch `/api/posts/:id`, normalize backend fields into the shape the `Post` component expects (e.g. `comments_count` -> `comment_count`, `content` -> `description`) and render safely while loading. Also pass `showReadMore={false}` into the `Post` component so the Read More label is hidden on single-post pages.

  Important mapping performed in `SinglePost.js` (example):

```js
const normalized = {
  id: data.id,
  title: data.title,
  content: data.content || data.description,
  description: data.content || data.description,
  comment_count: data.comments_count ?? data.comment_count ?? 0,
  like_count: data.likes_count ?? data.like_count ?? 0,
  share_count: data.shares_count ?? data.share_count ?? 0,
  time: data.created_at ?? data.time,
  profession: data.profession,
};
```

- React `Post.js`: added `showReadMore` prop (default true). When `showReadMore` is false the Read More label is not shown. If you prefer, we can remove the entire button when `showReadMore` is false (recommended) — see follow-ups.

Commands I used to diagnose and verify

Notes: you run the following inside WSL (Ubuntu). If you're on Windows PowerShell and prefer that, I include the PowerShell variants below.

1) Check whether the Laravel dev server is listening on port 8000 (WSL):

```bash
wsl bash -lc "ss -ltnp | grep 8000 || true"
```

2) Check the list endpoint (was already working):

```bash
wsl bash -lc "curl -s -i http://127.0.0.1:8000/api/posts | sed -n '1,120p'"
```

3) After adding the single-post API route, test it directly:

```bash
wsl bash -lc "curl -s -i http://127.0.0.1:8000/api/posts/1 | sed -n '1,200p'"
# Expected: HTTP/1.1 200 OK and a JSON body for post id 1, or 404 if that id doesn't exist.
```

4) Rebuild the React app to pick up frontend edits and surface any syntax errors:

```bash
wsl bash -lc "cd /home/mahbub/React_Laravel/React-Props-State-AI-Final && npm run build --silent"
```

The build command will show if there are syntax errors. In my run it completed with only ESLint warnings (unrelated unused vars in Right-Sidebar).

5) Optional: fetch the single-post route via the browser at your React dev server, e.g. http://localhost:3000/post/1 (after running `npm start` in the React app folder).

PowerShell equivalents

If you prefer running from PowerShell on Windows (your default shell), you can call into WSL as I did or use PowerShell curl equivalents. Example (call WSL to curl):

```powershell
#wsl bash -lc "curl -s -i http://127.0.0.1:8000/api/posts/1"
```

Why the blank page happened
- React tried to fetch `/api/posts/:id` and got a 404 because Laravel didn't expose that endpoint under `/api`. The SinglePost component previously assumed a post object, which led to runtime errors and a blank page.

Edge cases & notes
- If the API returns a different field naming convention, adjust the normalization in `SinglePost.js` accordingly.
- If the Laravel app is bound to a different host/port, point the React axios URL to the correct address or use an environment variable.
- CORS: if React is hosted under a different origin, enable CORS in Laravel (add middleware or set Access-Control-Allow-Origin for dev).

Follow-ups you might want
- Remove the entire Read More Link in `Post.js` when `showReadMore` is false (I only hid the label in this run; I can remove the element entirely if you prefer).
- Make `SinglePost` render the title as plain text (not a Link) on the single-post page so it doesn't link to itself.
- Add unit tests for `SinglePost` to assert loading, success, and error states.
- Fix ESLint warnings in `src/Components/Sidebars/Right-Sidebar.js`.

How to revert a change quickly
- If you are using git, you can see the changed files and revert them using git. Example (run inside your repo):

```bash
cd /home/mahbub/React_Laravel
git status --porcelain
git diff --name-only
# To discard local changes for a file
git checkout -- laravelwebsite/routes/api.php
git checkout -- React-Props-State-AI-Final/src/Pages/SinglePost.js
git checkout -- React-Props-State-AI-Final/src/App.js
git checkout -- React-Props-State-AI-Final/src/Components/Post.js
```

If you want I can prepare a small git commit with these changes and push it to your branch (if you give me the go-ahead and have a remote configured).

Appendix — quick changelog (what I edited)

- laravelwebsite/routes/api.php — added `/posts/{id}` route.
- React-Props-State-AI-Final/src/Pages/SinglePost.js — fixed fetching, normalization, null-safety; set `showReadMore={false}` when rendering `Post`.
- React-Props-State-AI-Final/src/App.js — added `/post/:id` route alias.
- React-Props-State-AI-Final/src/Components/Post.js — added `showReadMore` prop and conditional render for the read-more label.

If you'd like, I can now:
- Remove the Read More Link entirely on single-post pages (recommended),
- Convert the title link to plain text on the single page,
- Or open a PR with the changes and include automated tests.

Tell me which follow-up you want and I will implement it next.
