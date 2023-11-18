<script lang="ts">
    export let title: string;
    export let description: string;
    export let closeButton: string = 'Close';

    // internal function
    export let closeModal: () => void;
</script>

<h3 class="font-bold text-lg">{title}</h3>
<p class="py-4">{description}</p>

<div class="flex justify-end">
    <button class="btn" on:click={closeModal}>{closeButton}</button>
</div>
