<script>
    import { toastStore } from '$lib';

    function showToast(variant) {
        toastStore.trigger({
            message: 'Hello World!',
            variant
        })
    }
</script>

<div>
    <button on:click={showToast} class="btn">
        Show default toast
    </button>

    <button on:click={() => showToast('alert-success')} class="btn">
        Show success toast
    </button>

    <button on:click={() => showToast('alert-warning')} class="btn">
        Show warning toast
    </button>

    <button on:click={() => showToast('alert-error')} class="btn">
        Show error toast
    </button>
</div>
