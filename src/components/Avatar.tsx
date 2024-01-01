import { HackerNewsPostType } from '@/lib/y18/types';
import { Flex, Text } from '@radix-ui/themes';

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
            <Text className='text-color' size='3'>
                {PostAvatar[name]}
                {/* {`${name[0]}${name?.[1]}`.toUpperCase()} */}
            </Text>
        </Flex>
    );
}
