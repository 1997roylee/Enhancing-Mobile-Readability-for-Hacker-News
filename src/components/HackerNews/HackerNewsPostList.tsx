'use client';

import { type HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Box, Flex, Text } from '@radix-ui/themes';
import HackerNewsPost from './HackerNewsPost';
import HackerNewsLoadMoreButton from './HackerNewsLoadMoreButton';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import HackerNewsLoadingList from './HackerNewsLoadingList';

export interface HackerNewsPostListProps {
    initialPosts: (THackerNewsPost | null)[];
    category: string;
}

const TaglineByCategory = {
    top: 'Top News',
    news: 'Newest News',
    ask: 'Ask HN',
    show: 'Show HN',
    jobs: 'Jobs',
} as const;

export default function HackerNewsPostList({
    initialPosts,
    category = 'top',
}: HackerNewsPostListProps) {
    const [posts, setPosts] = useState<(THackerNewsPost | null)[]>([]);
    const now = useMemo(() => dayjs().format('YYYY-MM-DD'), []);

    useEffect(() => {
        setPosts(initialPosts);
    }, [initialPosts]);

    const title = TaglineByCategory[
        category as keyof typeof TaglineByCategory
    ] as string;

    const postsByDate = useMemo(
        () =>
            posts.reduce(
                (groups, post) => {
                    if (post) {
                        const date = dayjs
                            .unix(post?.time ?? 0)
                            .format('YYYY-MM-DD');
                        if (!groups[date]) {
                            groups[date] = [];
                        }
                        groups[date].push(post);
                    }
                    return groups;
                },
                {} as Record<string, THackerNewsPost[]>,
            ),
        [posts],
    );

    const handleLoadMore = (posts: (THackerNewsPost | null)[]) => {
        setPosts((prevPosts) => [...prevPosts, ...posts]);
    };

    return (
        <Flex direction={'column'}>
            {posts.length === 0 && <HackerNewsLoadingList />}
            {Object.entries(postsByDate).map(([date, posts]) => {
                return (
                    <div key={date}>
                        <Box className='sticky top-0 z-10'>
                            <Box className='bg-white py-4 border-b mx-3'>
                                <Text size={'6'} weight='medium'>
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
            })}

            <HackerNewsLoadMoreButton
                category={category}
                onLoadMore={handleLoadMore}
            />
        </Flex>
    );
}
