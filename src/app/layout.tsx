import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import { Container } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import HackerNewsCategoryList from '@/components/HackerNews/HackerNewsCategoryList';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
    title: 'Hacker News',
    description: 'Hacker News',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <Container>
                        <HackerNewsCategoryList />
                        <Suspense fallback={<Loading />}>{children}</Suspense>
                    </Container>
                </Providers>
            </body>
        </html>
    );
}
