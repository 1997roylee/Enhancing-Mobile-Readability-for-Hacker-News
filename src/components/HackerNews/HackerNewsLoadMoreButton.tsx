'use client';

import { revalidateHome } from '@/lib/pages';
import { useSearchParams } from 'next/navigation';

export default function HackerNewsLoadMoreButton() {
    const searchParams = useSearchParams();
    const n = searchParams.get('n') ? Number(searchParams.get('n')) + 30 : 30;

    const handleLoad = async () => {
        revalidateHome(n);
    };

    return <button onClick={handleLoad}>Load more</button>;
}
