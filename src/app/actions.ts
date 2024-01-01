'use server';

import { getNews, getNewsItems } from '@/lib/y18/server';
import { notFound } from 'next/navigation';

export async function fetchNews(category: string, page: number) {
    const news = await getNews(category);
    const postIds = news.success ? news.data : [];

    if (Number(page * 20) > postIds.length) {
        notFound();
    }

    const _postIds = postIds.slice(Number((page - 1) * 20), Number(page * 20));

    const postsResult = await getNewsItems(_postIds);
    const posts = postsResult.success ? postsResult.data : [];

    return posts;
}
