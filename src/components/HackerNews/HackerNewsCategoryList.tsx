'use client';

import { CATEGORY_LIST, Category } from '@/utils/category';
import { Flex, Tabs } from '@radix-ui/themes';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const HackerNewsCategory = ({ category }: { category: Category }) => {
    const searchParams = useSearchParams();
    const n = searchParams.get('n') ?? 30;

    return (
        <Link href={`/${category.label}?n=${n}`}>
            <Flex>{category.label}</Flex>
        </Link>
    );
};

export type HackerNewsCategoryListProps = {
    category: string;
};

export default function HackerNewsCategoryList({
    category,
}: HackerNewsCategoryListProps) {
    return (
        <Tabs.Root value={category}>
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
