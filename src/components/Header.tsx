import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import HackerNewsCategoryList from './HackerNews/HackerNewsCategoryList';

export default function Header() {
    return (
        <Flex direction={'column'}>
            <Image
                src='https://news.ycombinator.com/y18.svg'
                width={128}
                height={128}
                alt='Y18'
            />
            <HackerNewsCategoryList />
        </Flex>
    );
}
