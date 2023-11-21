import HackerNewsPostList from '@/components/HackerNews/HackerNewsPostList';
import { getNewestNews, getNewestNewsWithContent } from '@/lib/y18';

export const metadata = {
    description: 'Modern design for Hacker News',
    openGraph: {
        type: 'website',
    },
};

export default async function Home() {
    const newestNews = await getNewestNewsWithContent();

    const posts = newestNews.success ? newestNews.data : [];
    return <HackerNewsPostList posts={posts} />;
}
