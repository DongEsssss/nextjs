"use client";

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Header() {
    const router = useRouter();

    return (
        <header style={{ display: 'flex', alignItems: 'center' }}>
            <h1>Header</h1>
            <nav>
                <div style={{ display: 'flex', gap: '20px', marginLeft: '20px' }}>
                    <Button onPress={() => router.push('/counter')} color='primary'>카운터</Button>
                    <Button onPress={() => router.push('/data')} color='primary'>데이터</Button>
                    <Button onPress={() => router.push('/modal')} color='primary'>모달</Button>
                </div>
            </nav>
        </header>
    )
}