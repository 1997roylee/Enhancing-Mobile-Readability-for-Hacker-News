import { HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Box, Flex, Text } from '@radix-ui/themes';
import dayjs from 'dayjs';
import Link from 'next/link';
import Avatar from '../Avatar';
import { RiArrowUpSFill } from 'react-icons/ri';
import { formatRelative } from '@/utils/date';

export interface HackerNewsPostProps {
    post: THackerNewsPost;
}

export default function HackerNewsPost({ post }: HackerNewsPostProps) {
    const date = formatRelative(dayjs.unix(post.time));

    if (!post) return null;

    const domain = (post.url ?? '').replace('https://', '').split('/')[0];
    return (
        <div data-id={post.id}>
            <Flex
                py='1'
                px='3'
                className='hover:bg-gray-50 relative'
                data-post-type={post.type}
                justify={'between'}
            >
                <Flex align={'center'} className='flex-1' pr='2'>
                    <Box className='flex-1'>
                        <Flex align='start'>
                            <Box>
                                <Link href='https://news.ycombinator.com/vote?id=38830194&how=up&goto=news'>
                                    {/* <Avatar name={post.type} /> */}
                                    <Flex direction={'column'} justify={'center'}>
                                        <Flex
                                            align={'center'}
                                            justify={'center'}
                                            direction={'column'}
                                        >
                                            <RiArrowUpSFill
                                                size='24px'
                                                className='text-slate-700'
                                            />
                                            <Text
                                                align='center'
                                                size='1'
                                                className='text-slate-700'
                                            >
                                                {post.score}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Link>
                            </Box>
                            <Box ml='2' className='flex-1'>
                                <Link href={post.url ?? '#'}>
                                    <Text weight={'medium'} size='2'>
                                        {post?.title}
                                    </Text>
                                    <div className='text-gray-500 text-2xs'>{domain}</div>
                                </Link>

                                <Flex>
                                    <Link href={`https://news.ycombinator.com/item?id=${post.id}`}>
                                        <Text size='1' className='text-slate-700 hover:underline'>
                                            <Text className='text-black'>Posted</Text> {date}
                                        </Text>
                                    </Link>
                                    <Link href={`https://news.ycombinator.com/user?id=` + post.by}>
                                        <Text
                                            size='1'
                                            ml='1'
                                            className='text-slate-700 hover:underline'
                                        >
                                            <Text className='text-black'>By</Text> {post.by}
                                        </Text>
                                    </Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex direction={'column'} justify={'center'}>
                    <Link href={`https://news.ycombinator.com/item?id=${post.id}`}>
                        <Flex
                            className='flex-1 hover:underline cursor-pointer'
                            align={'center'}
                            justify={'center'}
                            direction={'column'}
                        >
                            {/* <RiArrowUpSFill size='32px' className='text-gray-600' /> */}
                            <Text align='center' size='2' className='text-slate-700'>
                                {post.descendants}
                            </Text>
                            <Text className='text-2xs text-slate-700'>comments</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </div>
    );
}
