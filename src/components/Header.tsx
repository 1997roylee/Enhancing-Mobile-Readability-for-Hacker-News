import { Box, Button, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <Flex className='border-b bg-slate-50' p='3' align={'center'} justify={'between'}>
                <Link href='https://news.ycombinator.com/' target='_blank'>
                    <Image
                        src='/y18.svg'
                        width={30}
                        height={30}
                        alt='Y18'
                        // className='rounded'
                    />
                </Link>
                <Box>
                    <Link href={'https://github.com/1997roylee/modern-hacker-news'} target='_blank'>
                        <Button color='orange' variant='outline' size='1'>
                            Github
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </>
    );
}
