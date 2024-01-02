'use server';

import { CATEGORY_LIST } from '@/utils/category';
import { REVALIDATE_TIME, createAPIEndpoint, isOKResponse, returnError, returnSuccess } from '.';
import { type HackerNewsPost } from './types';

export const getNews = async (categoryLabel: string) => {
    const category = CATEGORY_LIST.find((item) => item.label === categoryLabel) ?? CATEGORY_LIST[0];

    const response = await fetch(createAPIEndpoint(`/v0/${category.path}.json?print=pretty`), {
        next: { revalidate: REVALIDATE_TIME, tags: [category.label] },
    });

    const data = await response.json();

    if (isOKResponse(response)) {
        return returnSuccess<number[]>(data);
    }

    return returnError(new Error('Error fetching newest news'));
};

export const getNewsItems = async (postIds: number[]) => {
    const news = await Promise.all(
        postIds.map(async (id) => {
            const response = await fetch(createAPIEndpoint(`/v0/item/${id}.json?print=pretty`), {
                next: {
                    revalidate: REVALIDATE_TIME,
                    tags: ['item', id.toString()],
                },
            });

            const data = await response.json();

            if (isOKResponse(response)) {
                return data as HackerNewsPost;
            }

            return null;
        }),
    );

    return returnSuccess<(HackerNewsPost | null)[]>(news);
};
