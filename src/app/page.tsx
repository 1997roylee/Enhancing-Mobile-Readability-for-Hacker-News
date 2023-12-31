import HackerNewsPostList from '@/components/HackerNews/HackerNewsPostList';
import { REVALIDATE_TIME } from '@/lib/y18';
import { Suspense } from 'react';
import Loading from './loading';
import HackerNewsCategoryList from '@/components/HackerNews/HackerNewsCategoryList';
// import { getNews, getNewsItems } from '@/lib/y18/server';
// import { notFound } from 'next/navigation';
import { fetchNews } from './actions';

export const metadata = {
    description: 'Modern design for Hacker News',
    openGraph: {
        type: 'website',
    },
};

export const revalidate = REVALIDATE_TIME;

export default async function Page({
    // searchParams,
    params,
}: {
    // searchParams: { p: number; category: string };
    params: { category: string };
}) {
    console.log(params);
    const page = 1;
    const category = params.category ?? 'top';
    const posts = await fetchNews(category, page);

    return (
        <>
            <HackerNewsCategoryList category={category} />
            <Suspense fallback={<Loading />}>
                <HackerNewsPostList initialPosts={posts} category={category} />
            </Suspense>
        </>
    );
}
