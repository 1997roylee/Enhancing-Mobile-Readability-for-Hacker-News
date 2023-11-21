import { type HackerNewsPost as THackerNewsPost } from '@/lib/y18/types';
import { Flex } from '@radix-ui/themes';
import HackerNewsPost from './HackerNewsPost';

export interface HackerNewsPostListProps {
    posts: (THackerNewsPost | null)[];
}

export default function HackerNewsPostList({ posts }: HackerNewsPostListProps) {
    console.log('posts', posts);
    return (
        <Flex direction={'column'}>
            {posts.map((post, index) => {
                return <HackerNewsPost key={post?.id ?? index} post={post} />;
            })}
        </Flex>
    );
}
