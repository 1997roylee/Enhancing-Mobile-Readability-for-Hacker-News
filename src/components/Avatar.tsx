import { Flex, Text } from '@radix-ui/themes';

export type AvatarProps = {
    name: string;
};

// function generateGradient(str: string) {
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//         hash = str.charCodeAt(i) + ((hash << 5) - hash);
//     }

//     const color1 =
//         ((hash >> 24) & 0xff).toString(16) +
//         ((hash >> 16) & 0xff).toString(16) +
//         ((hash >> 8) & 0xff).toString(16);

//     // hash = ~hash;
//     // const color2 = ((hash >> 24) & 0xFF).toString(16) +
//     //                ((hash >> 16) & 0xFF).toString(16) +
//     //                ((hash >> 8) & 0xFF).toString(16);

//     return `linear-gradient(to right, #${color1}, #${color1})`;
// }

export default function Avatar({ name }: AvatarProps) {
    return (
        <Flex
            justify={'center'}
            align='center'
            className='rounded-full bg-gray-100'
            width={'8'}
            height={'8'}
        >
            <Text className='text-color' size='4'>
                {`${name[0]}${name?.[1]}`.toUpperCase()}
            </Text>
        </Flex>
    );
}
