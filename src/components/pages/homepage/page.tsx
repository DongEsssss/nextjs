"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Error from '../setting/error/error';
import { table } from 'console';

const LoadingSpinner = () => {
    return <div className="spinner"></div>;
};

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setTimeout(() => {
                    setPosts(data);
                    setLoading(false);
                }, 3000);
            } catch (error) {
                console.error('에러 발생:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <ul>
                {posts.map((post: any) => (
                    <table>
                        <thead><th style={{ width: '60px', textAlign: 'left' }}>{post.id}</th><td>{post.title}</td></thead>
                    </table>
                ))}
            </ul>
            <button onClick={() => router.push('/counter')}>카운터</button>
        </div>
    );
}
