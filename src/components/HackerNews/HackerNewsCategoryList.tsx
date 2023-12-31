'use client';

import { CATEGORY_LIST, Category } from '@/utils/category';
import { Flex, Tabs } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';

export const HackerNewsCategory = ({ category }: { category: Category }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const n = searchParams.get('n') ?? 30;

    const handleClicked = async () => {
        // revalidateHome(n);

        router.push(`/${category.label}?n=${n}`, {
            scroll: false,
        });
    };

    return <Flex onClick={handleClicked}>{category.label}</Flex>;
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
