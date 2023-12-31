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

    return (
        <div data-id={post.id}>
            <Flex
                py={'4'}
                px='3'
                className='hover:bg-gray-50 relative'
                data-post-type={post.type}
                justify={'between'}
            >
                <Flex align={'center'} className='flex-1' pr='2'>
                    <Avatar name={post.type} />
                    <Box ml='3' className='flex-1'>
                        <Link href={post.url ?? '#'} target='_blank'>
                            <Text weight={'bold'} size='2'>
                                {post?.title}
                            </Text>
                        </Link>
                        <Flex>
                            <Link
                                href={
                                    `https://news.ycombinator.com/user?id=` +
                                    post.by
                                }
                            >
                                <Text size='1' className='text-slate-700'>
                                    By #{post.by}
                                </Text>
                            </Link>
                            <Link
                                href={`https://news.ycombinator.com/item?id=${post.id}`}
                            >
                                <Text
                                    ml='2'
                                    size='1'
                                    className='text-slate-700'
                                >
                                    {post.descendants} comments
                                </Text>
                            </Link>
                        </Flex>
                        <Link
                            href={`https://news.ycombinator.com/item?id=${post.id}`}
                        >
                            <Text size='1' className='text-slate-700'>
                                {date}
                            </Text>
                        </Link>
                    </Box>
                </Flex>
                <Flex
                    width='8'
                    className='border-l'
                    direction={'column'}
                    justify={'center'}
                >
                    <Flex
                        className='flex-1'
                        align={'center'}
                        justify={'center'}
                        direction={'column'}
                    >
                        <RiArrowUpSFill size='32px' className='text-gray-600' />
                        <Text align='center' size='2' className='text-gray-600'>
                            {post.score}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
}
