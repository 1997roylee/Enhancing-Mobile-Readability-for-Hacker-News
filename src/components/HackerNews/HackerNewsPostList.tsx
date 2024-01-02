'use client';

import { type HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import HackerNewsPost from './HackerNewsPost';
import HackerNewsLoadMoreButton from './HackerNewsLoadMoreButton';
import { useEffect, useState } from 'react';
import HackerNewsLoadingList from './HackerNewsLoadingList';
import Flex from '../ui/Flex';

export interface HackerNewsPostListProps {
    initialPosts: (THackerNewsPost | null)[];
    category: string;
}

export default function HackerNewsPostList({
    initialPosts,
    category = 'top',
}: HackerNewsPostListProps) {
    const [posts, setPosts] = useState<THackerNewsPost[]>(initialPosts as THackerNewsPost[]);

    useEffect(() => {
        setPosts(initialPosts as THackerNewsPost[]);
    }, [initialPosts]);

    const handleLoadMore = (posts: THackerNewsPost[]) => {
        setPosts((prevPosts) => [...prevPosts, ...posts]);
    };

    return (
        <Flex className='flex-col mt-1'>
            {posts.length === 0 && <HackerNewsLoadingList />}
            {posts.map((post) => {
                return <HackerNewsPost key={`${category}/${post.id}`} post={post} />;
            })}
            {/* {Object.entries(postsByDate).map(([date, posts]) => {
                return (
                    <div key={date}>
                        <Box className='sticky top-0 z-10'>
                            <Box className='bg-white py-2 border-b mx-3'>
                                <Text size={'5'}>
                                    {date === now ? title + ' Today' : date}
                                </Text>
                            </Box>
                            <div className='sticky_header_bottom' />
                        </Box>
                        {posts.map((post) => {
                            return (
                                <HackerNewsPost
                                    key={`${category}/${post.id}`}
                                    post={post}
                                />
                            );
                        })}
                    </div>
                );
            })} */}
            <HackerNewsLoadMoreButton
                category={category}
                enabled={posts.length > 0}
                onLoadMore={handleLoadMore}
            />
        </Flex>
    );
}
