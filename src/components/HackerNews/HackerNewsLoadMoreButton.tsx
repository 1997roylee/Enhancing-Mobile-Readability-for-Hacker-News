'use client';

import { Button } from '@radix-ui/themes';
// import { revalidateHome } from '@/lib/pages';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';

export default function HackerNewsLoadMoreButton() {
    const searchParams = useSearchParams();
    // const router = useRouter();
    const n = searchParams.get('n') ? Number(searchParams.get('n')) + 30 : 30;

    // const handleLoad = async () => {
    //     revalidateHome(n);

    //     router.push(`?n=${n}`, {
    //         scroll: false,
    //     });
    // };

    return (
        <Link href={`?n=${n}`} shallow scroll={false}>
            <Button variant='outline'>Load more</Button>
        </Link>
    );
}
