'use client';

import { CATEGORY_LIST, Category } from '@/utils/category';
import { Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

export const HackerNewsCategory = ({
    category,
    isActive = false,
    onClick,
}: {
    category: Category;
    isActive: boolean;
    onClick: () => void;
}) => {
    return (
        <Flex
            onClick={onClick}
            className={
                'rounded-sm px-2 py-1 cursor-pointer hover:bg-gray-100' +
                (isActive && ' bg-gray-100')
            }
        >
            <Text size='2'>{category.label}</Text>
        </Flex>
    );
};

export type HackerNewsCategoryListProps = {
    category: string;
};

export default function HackerNewsCategoryList({
    category: categoryId,
}: HackerNewsCategoryListProps) {
    const router = useRouter();

    const handleNavigate = (category: string) => {
        router.push(`/${category}`);
    };

    // console.log('categoryId', categoryId)
    return (
        <Flex className='border-b mx-3 py-1 sticky top-0 bg-white z-10'>
            {CATEGORY_LIST.map((category, index) => {
                return (
                    <HackerNewsCategory
                        key={category?.id ?? index}
                        isActive={categoryId === category.id}
                        category={category}
                        onClick={() => handleNavigate(category.id)}
                    />
                );
            })}
        </Flex>
    );
}
