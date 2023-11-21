import { HackerNewsPost } from './types';

export const API_BASE_URL = 'https://hacker-news.firebaseio.com';
export const REVALIDATE_TIME = 60;

export const getNewestNews = async () => {
    const response = await fetch(
        createAPIEndpoint('/v0/newstories.json?print=pretty'),
        { next: { revalidate: REVALIDATE_TIME, tags: ['newstories'] } },
    );

    const data = await response.json();

    if (isOKResponse(response)) {
        return returnSuccess<number[]>(data);
    }

    return returnError(new Error('Error fetching newest news'));
};

export const getNewestNewsWithContent = async () => {
    const result = await getNewestNews();

    if (!result.success) return returnError(result.error);

    const news = await Promise.all(
        result.data.map(async (id) => {
            const response = await fetch(
                createAPIEndpoint(`/v0/item/${id}.json?print=pretty`),
                {
                    next: {
                        revalidate: REVALIDATE_TIME,
                        tags: ['item', id.toString()],
                    },
                },
            );

            const data = await response.json();

            if (isOKResponse(response)) {
                return data as HackerNewsPost;
                // return {
                //   ...response.data,
                //   id,
                // };
            }

            return null;
            //   return {
            //     id,
            //     error: new Error("Error fetching news content"),
            //   };
        }),
    );

    return returnSuccess<(HackerNewsPost | null)[]>(news);
};

export const createAPIEndpoint = (path: string) => {
    return `${API_BASE_URL}${path}`;
};

export type SuccessResponse<T> = {
    success: true;
    data: T;
};

export type ErrorResponse = {
    success: false;
    error: Error;
};

export const returnSuccess = <T extends unknown>(data: T) => {
    return {
        success: true,
        data,
    } as SuccessResponse<T>;
};

export const returnError = (error: Error) => {
    return {
        success: false,
        error,
    } as ErrorResponse;
};

export const isOKResponse = (response: Response) => {
    if (response.status === 200) {
        return true;
    }

    return false;
};
