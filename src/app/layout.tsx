import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import { Container } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Hacker News',
    description: 'Hacker News',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <Container>{children}</Container>
                </Providers>
            </body>
        </html>
    );
}
