import { type HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Box, Flex, Text } from '@radix-ui/themes';
import HackerNewsPost from './HackerNewsPost';
import HackerNewsLoadMoreButton from './HackerNewsLoadMoreButton';
import HackerNewsLoadingList from './HackerNewsLoadingList';
import { useMemo } from 'react';
import dayjs from 'dayjs';

export interface HackerNewsPostListProps {
    posts: (THackerNewsPost | null)[];
}

export default function HackerNewsPostList({ posts }: HackerNewsPostListProps) {
    // const postsByDate = useMemo(() => {
    //     const grouped = posts.reduce(
    //         (groups, post) => {
    //             if (post) {
    //                 const date = dayjs
    //                     .unix(post?.time ?? 0)
    //                     .format('YYYY-MM-DD');
    //                 if (!groups[date]) {
    //                     groups[date] = [];
    //                 }
    //                 groups[date].push(post);
    //             }
    //             return groups;
    //         },
    //         {} as Record<string, THackerNewsPost[]>,
    //     );
    //     return grouped;
    // }, [posts]);

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

    return (
        <Flex direction={'column'}>
            {Object.entries(postsByDate).map(([date, posts]) => {
                return (
                    <div key={date}>
                        <Box className='sticky top-0 z-10'>
                            <Box className='bg-white p-4 border-b'>
                                <Text size={'6'}>
                                    {date}
                                    {/* Top Products Launching Today */}
                                </Text>
                            </Box>
                            <div className='sticky_header_bottom' />
                        </Box>
                        <HackerNewsLoadingList />
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
