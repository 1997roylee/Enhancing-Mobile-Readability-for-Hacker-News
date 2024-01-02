import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type ReadStatus = {
    id: number;
    isRead: boolean;
    readAt: number;
};

export type UseReadProps = {
    reads: ReadStatus[];
    addRead: (read: ReadStatus) => void;
    getIsRead: (id: number) => boolean;
};

export const useReads = create(
    persist<UseReadProps>(
        (set, get) => ({
            reads: [],
            addRead: (read) => {
                const isRead = get().reads.some((r) => r.id === read.id);

                if (isRead) {
                    return;
                }

                set((state) => ({
                    reads: [...state.reads, read],
                }));
            },
            getIsRead: (id) => get().reads.some((read) => read.id === id),
        }),
        {
            name: 'HN/Reads',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
