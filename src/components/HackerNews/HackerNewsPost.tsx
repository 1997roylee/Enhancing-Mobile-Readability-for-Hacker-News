import { HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Box, Flex } from '@radix-ui/themes';
import dayjs from 'dayjs';

export interface HackerNewsPostProps {
    post: THackerNewsPost | null;
}

export default function HackerNewsPost({ post }: HackerNewsPostProps) {
    console.log(post);
    const date = dayjs.unix(post?.time ?? 0).format('YYYY-MM-DD HH:mm:ss');
    return (
        <Flex>
            <Box>{post?.by}</Box>
            <Box>{post?.title}</Box>
            <Box> {date}</Box>
            <Box> {post?.type}</Box>
            <Box> {post?.url}</Box>
        </Flex>
    );
}
