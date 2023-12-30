import { HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Box, Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import Link from 'next/link';
import Avatar from '../Avatar';
import { RiArrowUpSFill } from 'react-icons/ri';

export interface HackerNewsPostProps {
    post: THackerNewsPost | null;
}

export default function HackerNewsPost({ post }: HackerNewsPostProps) {
    const date = dayjs.unix(post?.time ?? 0).format('YYYY-MM-DD HH:mm:ss');

    if (!post) return null;

    console.log(post, 'post');

    return (
        <Link href={post.url ?? '#'}>
            <Flex
                py={'4'}
                px='3'
                className='hover:bg-gray-50 relative cursor-pointer'
                data-post-type={post.type}
                justify={'between'}
            >
                <Flex align={'center'}>
                    <Avatar name={post.by} />
                    <Box ml='3' className='flex-1'>
                        <Text weight={'medium'}>{post?.title}</Text>
                        <Flex>
                            <Text size='2' className='text-gray-700'>
                                {' '}
                                {post.by}
                            </Text>
                            <Text ml='2' size='2' className='text-gray-700'>
                                {date}
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
                <Flex width='9' className='border-l' direction={'column'}>
                    <Flex
                        className='flex-1'
                        align={'center'}
                        justify={'center'}
                        direction={'column'}
                    >
                        <RiArrowUpSFill size='32px' />
                        <Text align='center'>{post.score}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
}
