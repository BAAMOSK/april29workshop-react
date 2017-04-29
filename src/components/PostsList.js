import React from 'react';

export default function PostsList({ posts }) {
  return (
    <div>
      {posts.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
}