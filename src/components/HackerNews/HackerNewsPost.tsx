import { HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import { RiArrowUpSFill, RiTimer2Line } from 'react-icons/ri';
import { formatRelative } from '@/utils/date';
import Flex from '../ui/Flex';
import Text from '../ui/Text';
import { useCallback } from 'react';
import { useReads } from '@/store/useReads';
import HackerNewsPostStatus from './HackerNewsPostStatus';

export interface HackerNewsPostProps {
    post: THackerNewsPost;
}

export default function HackerNewsPost({ post }: HackerNewsPostProps) {
    const { addRead } = useReads();
    const date = formatRelative(dayjs.unix(post.time));
    const domain = post.url?.startsWith('http')
        ? post.url.replace('https://', '').split('/')[0]
        : null;

    const handleOnNavigate = useCallback(
        (url: string) => () => {
            addRead({
                id: post.id,
                isRead: true,
                readAt: dayjs().unix(),
            });
            window.location.href = url;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [post.id],
    );

    const handleVote = useCallback(() => {
        window.location.href = `https://news.ycombinator.com/vote?id=${post.id}&how=up&goto=news`;
    }, [post.id]);

    return (
        <div data-id={post.id}>
            <Flex
                className='hover:bg-gray-50 relative py-1 px-3'
                data-post-type={post.type}
                justify={'between'}
            >
                <Flex className='flex-1 pr-1 items-center'>
                    <div className='flex-1'>
                        <Flex className='items-start'>
                            <Flex className='items-center justify-center flex-col cursor-pointer w-6'>
                                <Flex
                                    className='flex-col items-center justify-center'
                                    onClick={handleVote}
                                >
                                    <RiArrowUpSFill size='24px' className='text-slate-700' />
                                    <Text className='text-slate-700 text-xs text-center'>
                                        {post.score}
                                    </Text>
                                </Flex>
                                <HackerNewsPostStatus postId={post.id} />
                            </Flex>

                            <div className='ml-2 flex-1'>
                                <div
                                    className='cursor-pointer'
                                    onClick={handleOnNavigate(post.url)}
                                >
                                    <Text className='text-sm'>{post?.title}</Text>
                                    <div className='text-gray-500 text-2xs'>{domain}</div>
                                </div>

                                <Flex className='items-end mt-1'>
                                    <Flex className='items-center'>
                                        <RiTimer2Line className='text-slate-600' size='12px' />
                                        <Text className='text-slate-600 text-xs font-light ml-1'>
                                            {date}
                                        </Text>
                                        {/* <Link
                                            href={`https://news.ycombinator.com/item?id=${post.id}`}
                                            className='inline-block'
                                        >
                                            <Text className='text-slate-600 hover:underline text-xs font-light ml-1'>
                                                {date}
                                            </Text>
                                        </Link> */}
                                    </Flex>

                                    <Text className='ml-1 text-slate-600 hover:underline text-xs font-light'>
                                        <Link
                                            href={`https://news.ycombinator.com/user?id=` + post.by}
                                        >
                                            <Text className='text-black text-xs'>By</Text> {post.by}
                                        </Link>
                                    </Text>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Flex>
                <Flex className='flex-col justify-center'>
                    <Flex
                        className='flex-col items-center justify-center flex-1 hover:underline cursor-pointer'
                        onClick={handleOnNavigate(
                            `https://news.ycombinator.com/item?id=${post.id}`,
                        )}
                    >
                        <Text className='text-slate-600 text-center text-sm font-light'>
                            {post.descendants}
                        </Text>
                        <Text className='text-2xs text-slate-500 font-light'>comments</Text>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
}
