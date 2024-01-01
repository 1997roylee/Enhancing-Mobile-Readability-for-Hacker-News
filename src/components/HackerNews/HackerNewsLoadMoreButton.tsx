'use client';

import { Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import HackerNewsLoadingList from './HackerNewsLoadingList';
import { fetchNews } from '@/app/actions';
import { HackerNewsPost } from '@/lib/y18/types';

export type HackerNewsLoadMoreButtonProps = {
    category?: string;
    onLoadMore?: (posts: HackerNewsPost[]) => void;
};

export default function HackerNewsLoadMoreButton({
    onLoadMore,
    category = 'top',
}: HackerNewsLoadMoreButtonProps) {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = async () => {
        setIsLoading(true);
        const posts = await fetchNews(category, page + 1);
        setPage((_page) => _page + 1);
        onLoadMore?.(posts as HackerNewsPost[]);
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <HackerNewsLoadingList />}
            <Flex justify={'center'} width='100%' mb={'6'}>
                <Button variant='outline' onClick={handleLoadMore}>
                    Load more
                </Button>
            </Flex>
        </>
    );
}
