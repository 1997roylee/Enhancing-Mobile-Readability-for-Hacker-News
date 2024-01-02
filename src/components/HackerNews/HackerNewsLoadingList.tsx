import { Box, Flex } from '@radix-ui/themes';

export type HackerNewsPostLoadingProps = {
    backgroundColor: string;
};

export function HackerNewsPostLoading({ backgroundColor }: HackerNewsPostLoadingProps) {
    return (
        <Flex className='animate-pulse' align={'center'} mb='8'>
            <Box
                className='bg-gray-200 rounded-md'
                width='8'
                height='8'
                style={{ backgroundColor }}
            />
            <Box ml='3'>
                <Box
                    className='bg-gray-200 w-48 mb-3 rounded-md'
                    height='4'
                    style={{ backgroundColor }}
                />
                <Box
                    className='bg-gray-200 rounded-md'
                    width='8'
                    height='4'
                    style={{ backgroundColor }}
                />
            </Box>
        </Flex>
    );
}

const Colors = ['#FEE2D6', '#FDF4D6', '#EDF8D6', '#E3F5E3', '#D8ECFF', '#E6E0FF', '#FBDCF2'];

export default function HackerNewsLoadingList() {
    return (
        <Box p='3'>
            {Colors.map((color) => (
                <HackerNewsPostLoading key={color} backgroundColor={color} />
            ))}
        </Box>
    );
}
