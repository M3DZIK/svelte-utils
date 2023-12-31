import { writable } from 'svelte/store';

import type { ModalComponent } from './types.js';

function modalService() {
    const { subscribe, set, update } = writable<ModalComponent[]>([]);

    return {
        subscribe,
        set,
        update,

        /** Append to end of queue. */
        trigger: (modal: ModalComponent) =>
            update((mStore) => {
                mStore.push(modal);
                return mStore;
            }),

        /**  Remove first item in queue. */
        close: () =>
            update((mStore) => {
                if (mStore.length > 0) mStore.shift();
                return mStore;
            }),

        /** Remove all items from queue. */
        clear: () => set([])
    };
}

export const modalStore = modalService();
