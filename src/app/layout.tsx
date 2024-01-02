import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import { Container } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { PropsWithChildren } from 'react';
import 'intersection-observer';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: 'Hacker News | Hacker News For Mobile',
    description:
        'Enhance Readability and User Experience of Hacker News on Mobile Devices. Powered By Hacker News API.',
    openGraph: {
        title: 'Hacker News | Hacker News For Mobile',
        type: 'website',
        description:
            'Enhance Readability and User Experience of Hacker News on Mobile Devices. Powered By Hacker News API.',
        siteName: 'Hacker News.js',
        url: 'https://modern-hacker-news.vercel.app/',
    },
    metadataBase: new URL('https://modern-hacker-news.vercel.app/'),
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <Container>{children}</Container>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
