"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Counter() {
    const [count, setCount] = useState(0);
    const router = useRouter();

    return (
        <div>
            <h1>Counter Page</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <button onClick={() => router.push('../home')}>Back</button>
        </div>
    );
}
