import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('SinglePost', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  test('shows loading and then post on success', async () => {
    const post = {
      id: 1,
      title: 'Test Post',
      content: 'Hello world',
      comments_count: 2,
      likes_count: 5,
      shares_count: 1,
    };
    axios.get.mockResolvedValueOnce({ data: post });

    // mock react-router-dom useParams to provide id=1
    jest.doMock('react-router-dom', () => ({ useParams: () => ({ id: '1' }) }));
    const SinglePost = require('../SinglePost').default;

    render(<SinglePost />);

    // loading text appears
    expect(screen.getByText(/loading post/i)).toBeInTheDocument();

    // wait for title to appear
    await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());
    expect(screen.getByText(/Hello world/)).toBeInTheDocument();
    expect(screen.getByText(/2 Comments/)).toBeInTheDocument();
  });

  test('shows error message on fetch failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    jest.doMock('react-router-dom', () => ({ useParams: () => ({ id: '123' }) }));
    const SinglePost = require('../SinglePost').default;

    render(<SinglePost />);

    expect(screen.getByText(/loading post/i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/failed to load post/i)).toBeInTheDocument());
  });
});
