export type HackerNewsPostType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export type HackerNewsPost = {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: HackerNewsPostType;
    url: string;
    deleted?: boolean;
    dead?: boolean;
};
