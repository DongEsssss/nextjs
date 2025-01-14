import React from 'react';


export default async function HomePage() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}> {post.id}: {post.title}</li>
            ))}
            <button>Create</button>
        </ul>
    )
};

