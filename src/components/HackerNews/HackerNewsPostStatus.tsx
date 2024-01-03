'use client';

import { useReads } from '@/store/useReads';
import Text from '../ui/Text';

export default function HackerNewsPostStatus({ postId }: { postId: number }) {
    const { getIsRead } = useReads();

    const isRead = getIsRead(postId);

    if (isRead) {
        return <Text className='text-green-700 text-xs text-center mr-1'>Read</Text>;
    }

    return null;
}
