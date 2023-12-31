'use server';

import { getNews, getNewsItems } from '@/lib/y18/server';
// import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';

export async function fetchNews(category: string, page: number) {
    const news = await getNews(category);
    const postIds = news.success ? news.data : [];

    console.log('fetchNews', category);
    if (Number(page * 20) > postIds.length) {
        notFound();
    }

    const postsResult = await getNewsItems(postIds.slice(0, Number(page * 20)));
    const posts = postsResult.success ? postsResult.data : [];
    // revalidatePath(`/${category}`, 'page');

    return posts;
}
