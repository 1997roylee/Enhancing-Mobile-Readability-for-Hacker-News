export const API_BASE_URL = 'https://hacker-news.firebaseio.com';
export const REVALIDATE_TIME = 60 * 5; //  Will revalidate every 5 minute

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
