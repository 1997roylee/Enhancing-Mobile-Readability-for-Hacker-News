import { HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import { formatRelative } from '@/utils/date';
import Flex from '../ui/Flex';
import Text from '../ui/Text';
import { useCallback } from 'react';
import { useReads } from '@/store/useReads';
import HackerNewsPostStatus from './HackerNewsPostStatus';
import { IoCaretUpSharp } from 'react-icons/io5';

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
                className='hover:bg-gray-50 relative py-1.5 mx-3 border-b'
                data-post-type={post.type}
                justify={'between'}
            >
                <Flex className='items-start flex-1'>
                    <Flex className='items-center justify-center flex-col cursor-pointer w-7'>
                        <Flex className='flex-col justify-center mb-2' onClick={handleVote}>
                            <IoCaretUpSharp size='18px' className='text-slate-700' />
                            <Text className='text-slate-700 text-xs text-center font-light'>
                                {post.score}
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex className='ml-2 flex-1 flex-col'>
                        <Flex className='flex-col flex-1 justify-between'>
                            <div className='cursor-pointer' onClick={handleOnNavigate(post.url)}>
                                <Flex>
                                    <Text
                                        className={
                                            'flex-1 text-sm' + (post.descendants > 0 && 'pr-1')
                                        }
                                    >
                                        {post?.title}
                                    </Text>
                                    {post.descendants > 0 && (
                                        <div>
                                            <div
                                                className='bg-orange-50 rounded-xl text-orange-500 inline-block text-sm py-0.5 px-1'
                                                onClick={handleOnNavigate(
                                                    `https://news.ycombinator.com/item?id=${post.id}`,
                                                )}
                                            >
                                                {post.descendants}
                                            </div>
                                        </div>
                                    )}
                                </Flex>
                                <div className='text-gray-500 text-2xs'>{domain}</div>
                            </div>

                            <Flex className='items-end mt-1.5'>
                                <HackerNewsPostStatus postId={post.id} />
                                <Flex className='items-center'>
                                    <Text className='text-slate-600 text-xs font-light'>
                                        {date}
                                    </Text>
                                </Flex>

                                <Text className='ml-1 text-slate-600 hover:underline text-xs font-light'>
                                    <Link href={`https://news.ycombinator.com/user?id=` + post.by}>
                                        <Text className='text-black text-xs'>By</Text> {post.by}
                                    </Link>
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
}
