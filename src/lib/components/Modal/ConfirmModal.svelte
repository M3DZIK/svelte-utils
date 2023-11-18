<script lang="ts">
    export let title: string;
    export let description: string;
    export let cancelButton: string = 'Cancel';
    export let confirmButton: string = 'Confirm';
    export let response: () => void;

    // internal function
    export let closeModal: () => void;

    function confirm() {
        closeModal();

        response();
    }
</script>

<h3 class="font-bold text-lg">{title}</h3>
<p class="py-4">{description}</p>

<div class="flex justify-end gap-2">
    <button class="btn" on:click={closeModal}>{cancelButton}</button>
    <button class="btn btn-primary" on:click={confirm}>{confirmButton}</button>
</div>
