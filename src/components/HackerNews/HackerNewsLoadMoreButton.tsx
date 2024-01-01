'use client';

import { Flex, Text } from '@radix-ui/themes';
import { useCallback, useEffect, useState } from 'react';
import HackerNewsLoadingList from './HackerNewsLoadingList';
import { fetchNews } from '@/app/actions';
import { HackerNewsPost } from '@/lib/y18/types';
import { useInView } from 'react-intersection-observer';

export type HackerNewsLoadMoreButtonProps = {
    category?: string;
    enabled?: boolean;
    onLoadMore?: (posts: HackerNewsPost[]) => void;
};

export default function HackerNewsLoadMoreButton({
    onLoadMore,
    category = 'top',
    enabled,
}: HackerNewsLoadMoreButtonProps) {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const { ref, inView, entry } = useInView({
        threshold: 0.3,
        delay: 300,
    });

    const handleLoadMore = useCallback(async () => {
        setIsLoading(true);
        const posts = await fetchNews(category, page + 1);
        setPage((_page) => _page + 1);
        onLoadMore?.(posts as HackerNewsPost[]);
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, [category, onLoadMore, page]);

    useEffect(() => {
        if (inView && isLoading === false) {
            handleLoadMore();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, isLoading]);

    return (
        <>
            {isLoading && <HackerNewsLoadingList />}

            {enabled && (
                <Flex justify={'center'} width='100%' mb={'6'} ref={ref}>
                    <Text>Loading more...</Text>
                </Flex>
            )}
        </>
    );
}
