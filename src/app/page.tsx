import HackerNewsPostList from '@/components/HackerNews/HackerNewsPostList';
import { REVALIDATE_TIME } from '@/lib/y18';
import { Suspense } from 'react';
import Loading from './loading';
import HackerNewsCategoryList from '@/components/HackerNews/HackerNewsCategoryList';
import { fetchNews } from './actions';

// export const metadata = {
//     title: 'Hacker News | Hacker News For Mobile',
//     description:
//         'Enhance Readability and User Experience of Hacker News on Mobile Devices. Powered By Hacker News API.',
//     openGraph: {
//         type: 'website',
//     },
// };

export const revalidate = REVALIDATE_TIME;

export default async function Page({ params }: { params: { category: string } }) {
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
