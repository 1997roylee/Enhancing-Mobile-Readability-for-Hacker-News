import Image from 'next/image';
import Link from 'next/link';
import Flex from './ui/Flex';
import Button from './ui/Button';

export default function Header() {
    return (
        <>
            <Flex className='border-b bg-slate-50 p-3 justify-between align-center'>
                <Link href='https://news.ycombinator.com/' target='_blank'>
                    <Image src='/y18.svg' width={30} height={30} alt='Y18' />
                </Link>
                <div>
                    <Link href={'https://github.com/1997roylee/modern-hacker-news'} target='_blank'>
                        <Button>Github</Button>
                    </Link>
                </div>
            </Flex>
        </>
    );
}
