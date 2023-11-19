<script lang="ts">
    import { onMount } from 'svelte';

    export let value: string;

    import Eye from 'svelte-material-icons/Eye.svelte';
    import EyeOff from 'svelte-material-icons/EyeOff.svelte';

    let ref: HTMLInputElement;
    let visibility = false;

    onMount(() => {
        ref.type = 'password';
    });

    function toggleVisibility() {
        visibility = !visibility;

        ref.type = visibility ? 'text' : 'password';
    }
</script>

<div class="relative">
    <input bind:this={ref} class={`input w-full ${$$props.class}`} bind:value />
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
        <button on:click={toggleVisibility}>
            {#if visibility}
                <EyeOff class="h5 w-5" />
            {:else}
                <Eye class="h5 w-5" />
            {/if}
        </button>
    </div>
</div>
