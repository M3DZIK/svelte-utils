<script lang="ts">
    import { modalStore } from './stores.js';

    let open = true;

    function closeModal() {
        open = false;

        setTimeout(() => {
            modalStore.close();
            open = true;
        }, 300); // wait for animation to complete (200ms) + 100 milliseconds
    }
</script>

{#if $modalStore.length}
    {#key $modalStore}
        <div class={`modal ${open ? 'modal-open' : ''}`}>
            <div class="modal-box">
                <svelte:component this={$modalStore[0].ref} {...$modalStore[0].props} {closeModal} {parent} />
            </div>

            <form method="dialog" class="modal-backdrop">
                <button on:click={closeModal}>close</button>
            </form>
        </div>
    {/key}
{/if}
