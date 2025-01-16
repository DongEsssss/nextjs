"use client";

import React, { useEffect, useState } from 'react';

const LoadingSpinner = () => {
    return <div className="spinner"></div>;
};

export default function DataPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

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
    }, [])

    if (loading) {
        return <LoadingSpinner />;
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.filter((post: any) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>DataPage</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ width: '100%' }}
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
            </div>
        </>
    );
}
