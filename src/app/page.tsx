import HackerNewsPostList from '@/components/HackerNews/HackerNewsPostList';
import { REVALIDATE_TIME } from '@/lib/y18';
import { getNews, getNewestNewsItems } from '@/lib/y18/server';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';
import HackerNewsCategoryList from '@/components/HackerNews/HackerNewsCategoryList';

export const metadata = {
    description: 'Modern design for Hacker News',
    openGraph: {
        type: 'website',
    },
};

export const revalidate = REVALIDATE_TIME;

export default async function Page({
    searchParams,
}: {
    searchParams: { n: number; category: string };
}) {
    const n = searchParams.n ? Number(searchParams.n) : 30;
    const category = searchParams.category ? searchParams.category : 'top';

    const newestNews = await getNews(category);
    const postIds = newestNews.success ? newestNews.data : [];

    if (Number(n) > postIds.length) {
        notFound();
    }

    const postsResult = await getNewestNewsItems(postIds.slice(0, Number(n)));
    const posts = postsResult.success ? postsResult.data : [];

    return (
        <>
            <HackerNewsCategoryList category={category} />
            <Suspense fallback={<Loading />}>
                <HackerNewsPostList posts={posts} category={category} />
            </Suspense>
        </>
    );
}
