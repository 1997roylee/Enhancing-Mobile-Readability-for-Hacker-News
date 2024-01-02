import { HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import { RiArrowUpSFill } from 'react-icons/ri';
import { formatRelative } from '@/utils/date';
import Flex from '../ui/Flex';
import Text from '../ui/Text';

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
                className='hover:bg-gray-50 relative py-1 px-3'
                data-post-type={post.type}
                justify={'between'}
            >
                <Flex className='flex-1 pr-1 align-center'>
                    <div className='flex-1'>
                        <Flex className='align-top'>
                            <div>
                                <Link href='https://news.ycombinator.com/vote?id=38830194&how=up&goto=news'>
                                    {/* <Avatar name={post.type} /> */}
                                    <Flex className='justify-center flex-col'>
                                        <Flex className='flex-col align-center justify-center'>
                                            <RiArrowUpSFill
                                                size='24px'
                                                className='text-slate-700'
                                            />
                                            <Text className='text-slate-700 text-xs text-center'>
                                                {post.score}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Link>
                            </div>
                            <div className='ml-2 flex-1'>
                                <Link href={post.url ?? '#'}>
                                    <Text className='text-sm'>{post?.title}</Text>
                                    <div className='text-gray-500 text-2xs'>{domain}</div>
                                </Link>

                                <Flex>
                                    <Link href={`https://news.ycombinator.com/item?id=${post.id}`}>
                                        <Text className='text-slate-600 hover:underline text-xs font-light'>
                                            <Text className='text-black'>Posted</Text> {date}
                                        </Text>
                                    </Link>
                                    <Link href={`https://news.ycombinator.com/user?id=` + post.by}>
                                        <Text className='ml-1 text-slate-600 hover:underline text-xs font-light'>
                                            <Text className='text-black'>By</Text> {post.by}
                                        </Text>
                                    </Link>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Flex>
                <Flex className='flex-col justify-center'>
                    <Link href={`https://news.ycombinator.com/item?id=${post.id}`}>
                        <Flex className='flex-col align-center justify-center flex-1 hover:underline cursor-pointer'>
                            <Text className='text-slate-600 text-center text-sm font-light'>
                                {post.descendants}
                            </Text>
                            <Text className='text-2xs text-slate-500 font-light'>comments</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </div>
    );
}
