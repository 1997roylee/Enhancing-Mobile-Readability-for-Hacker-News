'use client';

import { CATEGORY_LIST, Category } from '@/utils/category';
import { Flex, Tabs } from '@radix-ui/themes';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';

export const HackerNewsCategory = ({ category }: { category: Category }) => {
    return <Flex>{category.label}</Flex>;
};

export type HackerNewsCategoryListProps = {
    category: string;
};

export default function HackerNewsCategoryList({
    category,
}: HackerNewsCategoryListProps) {
    const router = useRouter();

    const handleNavigate = (category: string) => {
        router.push(`/${category}`);
        // revalidatePath(`/${category}`)
    };

    return (
        <Flex style={{ background: '#ff6600' }}></Flex>
        // <Tabs.Root value={category} style={{ background: '#ff6600' }}>
        //     <Tabs.List>
        //         {CATEGORY_LIST.map((category, index) => {
        //             return (
        //                 <Tabs.Trigger
        //                     value={category?.id}
        //                     key={category?.id ?? index}
        //                     onClick={() => handleNavigate(category.id)}
        //                 >
        //                     <HackerNewsCategory category={category} />
        //                 </Tabs.Trigger>
        //             );
        //         })}
        //     </Tabs.List>
        // </Tabs.Root>
    );
}
