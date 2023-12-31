import HackerNewsPostList from '@/components/HackerNews/HackerNewsPostList';
import { getNews, getNewestNewsItems } from '@/lib/y18/server';
import { notFound } from 'next/navigation';

export const metadata = {
    description: 'Modern design for Hacker News',
    openGraph: {
        type: 'website',
    },
};

export const revalidate = 60 * 5;

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

    return <HackerNewsPostList posts={posts} category={category} />;
}
