import './globals.css';
import 'intersection-observer';
import Header from '@/components/Header';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Container from '@/components/ui/Container';

export const metadata = {
    title: 'Hacker News | Hacker News For Mobile',
    description:
        'Enhance Readability and User Experience of Hacker News on Mobile Devices. Powered By Hacker News API.',
    icons: {
        icon: '/y18.svg',
    },
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
            <head>
                <meta name='theme-color' content='#FF6600' />
            </head>
            <body>
                <Header />
                <Container>{children}</Container>

                <Analytics />
            </body>
        </html>
    );
}
