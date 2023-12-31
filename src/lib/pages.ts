'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateHome(n: number) {
    revalidatePath('/?n=' + n);
}
