import { HackerNewsPostType } from '@/lib/y18/types';
import Flex from './ui/Flex';
import Text from './ui/Text';

export type AvatarProps = {
    name: HackerNewsPostType;
};

export type TPostAvatar = Record<HackerNewsPostType, string>;

const PostAvatar: TPostAvatar = {
    job: '💼',
    story: '📖',
    comment: '💬',
    poll: '📊',
    pollopt: '📊',
};

export default function Avatar({ name }: AvatarProps) {
    return (
        <Flex
            justify={'center'}
            align='center'
            className='rounded-full bg-gray-100'
            width={'6'}
            height={'6'}
        >
            <Text className='text-color text-md'>{PostAvatar[name]}</Text>
        </Flex>
    );
}
