'use client';

import { Flex, Tabs } from '@radix-ui/themes';

export type Category = {
    label: string;
    id: string;
};

const CATEGORY_LIST: Category[] = [
    {
        label: 'top',
        id: 'top',
    },
    {
        label: 'news',
        id: 'news',
    },
    {
        label: 'past',
        id: 'past',
    },
    {
        label: 'comments',
        id: 'comments',
    },
    {
        label: 'ask',
        id: 'ask',
    },
    {
        label: 'show',
        id: 'show',
    },
    {
        label: 'jobs',
        id: 'jobs',
    },
    {
        label: 'submit',
        id: 'submit',
    },
];

export const HackerNewsCategory = ({ category }: { category: Category }) => {
    return <Flex>{category.label}</Flex>;
};

export default function HackerNewsCategoryList() {
    return (
        <Tabs.Root>
            <Tabs.List>
                {CATEGORY_LIST.map((category, index) => {
                    return (
                        <Tabs.Trigger
                            value={category?.id}
                            key={category?.id ?? index}
                        >
                            <HackerNewsCategory category={category} />
                        </Tabs.Trigger>
                    );
                })}
            </Tabs.List>
        </Tabs.Root>
    );
}
