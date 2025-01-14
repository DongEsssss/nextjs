"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('에러 발생:', error);
                alert('어떤 에러로 안열림')
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        {post.id}: {post.title}
                    </li>
                ))}
            </ul>
            <button onClick={() => router.push('/counter')}>카운터</button>
        </div>
    );
}
