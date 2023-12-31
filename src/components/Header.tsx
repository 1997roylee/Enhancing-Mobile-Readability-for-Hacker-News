import { Box, Button, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

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
                    <Link
                        href={
                            'https://github.com/1997roylee/modern-hacker-news'
                        }
                        target='_blank'
                    >
                        <Button color='orange'>Star Github</Button>
                    </Link>
                </Box>
            </Flex>
        </>
    );
}
