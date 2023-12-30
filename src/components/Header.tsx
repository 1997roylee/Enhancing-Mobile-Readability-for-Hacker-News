import { Box, Button, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import HackerNewsCategoryList from './HackerNews/HackerNewsCategoryList';

export default function Header() {
    return (
        <>
            <Flex
                className='border-b'
                p='4'
                align={'center'}
                justify={'between'}
            >
                <Box>
                    <Image
                        src='https://news.ycombinator.com/y18.svg'
                        width={48}
                        height={48}
                        alt='Y18'
                        className='rounded-full'
                    />
                </Box>
                <Box>
                    <Button color='orange'>Star Github</Button>
                </Box>
            </Flex>
            <HackerNewsCategoryList />
        </>
    );
}
