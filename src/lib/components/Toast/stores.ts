import { writable } from 'svelte/store';

import type { Toast, ToastSettings } from './types.js';

// Auto-hide toasts after 5 seconds
function handleAutoHide(toast: Toast) {
    return setTimeout(() => {
        toastStore.close(toast.id);
    }, 5000);
}

function toastService() {
    const { subscribe, set, update } = writable<Toast[]>([]);
    return {
        subscribe,

        /** Add new toast to the queue. */
        trigger: (toast: ToastSettings) => {
            const id: string = crypto.randomUUID();

            update((tStore) => {
                // Merge toast settings
                const tMerged: Toast = { ...toast, id };
                // Handle auto-hide, if needed
                tMerged.timeoutId = handleAutoHide(tMerged);
                // Push into store
                tStore.push(tMerged);
                // Return
                return tStore;
            });

            return id;
        },

        /** Remove toast in queue. */
        close: (id: string) =>
            update((tStore) => {
                if (tStore.length > 0) {
                    const index = tStore.findIndex((t) => t.id === id);
                    const selectedToast = tStore[index];
                    if (selectedToast) {
                        // Clear timeout
                        if (selectedToast.timeoutId) clearTimeout(selectedToast.timeoutId);
                        // Remove
                        tStore.splice(index, 1);
                    }
                }
                return tStore;
            }),

        /** Remove all toasts from queue. */
        clear: () => set([])
    };
}

export const toastStore = toastService();
