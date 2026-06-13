# useState Function Example on Lofing form is :

# usestate is function of React library that is used to manage the state of a component.

# it is return a array of two values.

1. state
2. setState

# In my first example

const [email, setEmail] = useState("Live Email Change Text");

# here email is state and setEmail is setState.

Password Length Example is : {password.length < 6 ? <span className="text-danger">Minimum 6 characters password is required</span> : (password)}

# AXIOS Install

# All Post Data Fetch

- const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
  axios.get('http://localhost:8000/api/posts')
  .then(response => {
  setPosts(response.data);
  console.log(response.data);
  });
  }, []);

# All Post Data Show

- <main>
    <Alart />
    {/* All Post Data Show */}
    {posts.map((post, index) => {
      return(
        <Post key={index} id={post.id} title={post.title} description={post.content} comment_count={post.comment_count} like_count={post.like_count} share_count={post.share_count} />
      )
    })}
  </main>

# Single Post Data Fetch

- const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
  axios.get(`http://localhost:8000/api/posts/${id}`)
  .then(response => {
  setPost(response.data);
  console.log(response.data);
  });
  }, [id]);

  # Single Post Data Show

  {/_ Single Post Data Show _/}
  {posts.map((post, index) => {
  return(
  <Post key={index} id={singlePost.id} title={singlePost.title} description={singlePost.content} comment_count={singlePost.comment_count} like_count={singlePost.like_count} share_count={singlePost.share_count} />
  )
