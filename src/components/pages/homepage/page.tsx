"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './home.css'

const LoadingSpinner = () => {
    return <div className="spinner"></div>;
};

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('에러 발생:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    if (loading) {
        return <LoadingSpinner />;
    }

    // search
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.filter((post: any) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section>
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="list">
                {filteredPosts.map((post: any) => (
                    <div key={post.id}>
                        <span style={{ fontWeight: 'bold', marginRight: '20px' }}>
                            {post.id}
                        </span>

                        <span>{post.title}</span>
                    </div>
                ))}
            </div>
            <button onClick={() => router.push('/counter')}>카운터</button>
        </section>
    );
}
