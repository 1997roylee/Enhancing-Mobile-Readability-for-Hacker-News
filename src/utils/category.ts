export type Category = {
    label: string;
    id: string;
    path: string;
};

export const CATEGORY_LIST: Category[] = [
    {
        label: 'top',
        id: 'top',
        path: '/topstories',
    },
    {
        label: 'news',
        id: 'news',
        path: '/newstories',
    },
    {
        label: 'ask',
        id: 'ask',
        path: '/askstories',
    },
    {
        label: 'show',
        id: 'show',
        path: '/showstories',
    },
    {
        label: 'jobs',
        id: 'jobs',
        path: '/jobstories',
    },
    // {
    //     label: 'submit',
    //     id: 'submit',
    //     path: '/topstories',
    // },
];
