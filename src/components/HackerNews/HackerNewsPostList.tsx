'use client';

import { type HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Box, Flex, Text } from '@radix-ui/themes';
import HackerNewsPost from './HackerNewsPost';
import HackerNewsLoadMoreButton from './HackerNewsLoadMoreButton';
import dayjs from 'dayjs';

export interface HackerNewsPostListProps {
    posts: (THackerNewsPost | null)[];
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
    posts,
    category = 'top',
}: HackerNewsPostListProps) {
    const title = TaglineByCategory[
        category as keyof typeof TaglineByCategory
    ] as string;

    const postsByDate = posts.reduce(
        (groups, post) => {
            if (post) {
                const date = dayjs.unix(post?.time ?? 0).format('YYYY-MM-DD');
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(post);
            }
            return groups;
        },
        {} as Record<string, THackerNewsPost[]>,
    );

    const now = dayjs().format('YYYY-MM-DD');

    return (
        <Flex direction={'column'}>
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
                        {posts.map((post, index) => {
                            return (
                                <HackerNewsPost
                                    key={post?.id ?? index}
                                    post={post}
                                />
                            );
                        })}
                    </div>
                );
            })}

            <HackerNewsLoadMoreButton />
        </Flex>
    );
}
