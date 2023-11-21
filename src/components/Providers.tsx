'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type PropsWithChildren } from 'react';
import { Theme } from '@radix-ui/themes';

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
    //   const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Theme>{children}</Theme>
        </QueryClientProvider>
    );
}
