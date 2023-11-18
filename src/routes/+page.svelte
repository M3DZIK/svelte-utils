<script>
    import { AlertModal, ConfirmModal,modalStore, toastStore } from '$lib';

    function showToast(variant) {
        toastStore.trigger({
            message: 'Hello World!',
            variant
        });
    }

    function showAlertModal() {
        modalStore.trigger({
            ref: AlertModal,
            props: {
                title: 'Hello World!',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
        });
    }

    function showConfirmModal() {
        modalStore.trigger({
            ref: ConfirmModal,
            props: {
                title: 'Confirm',
                description: 'Are you sure you wish to proceed?',
                response: () => {
                    toastStore.trigger({
                        message: 'Confirmed!'
                    });
                }
            }
        });
    }

    function showMultipleModals() {
        modalStore.trigger({
            ref: AlertModal,
            props: {
                title: 'Modal 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
        });

        modalStore.trigger({
            ref: AlertModal,
            props: {
                title: 'Modal 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
        });

        modalStore.trigger({
            ref: AlertModal,
            props: {
                title: 'Modal 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
        });
    }
</script>

<div>
    <button on:click={showToast} class="btn"> Show default toast </button>

    <button on:click={() => showToast('alert-success')} class="btn"> Show success toast </button>

    <button on:click={() => showToast('alert-warning')} class="btn"> Show warning toast </button>

    <button on:click={() => showToast('alert-error')} class="btn"> Show error toast </button>
</div>

<div>
    <button on:click={showAlertModal} class="btn"> Show alert modal </button>
    <button on:click={showConfirmModal} class="btn"> Show confirm modal </button>
    <button on:click={showMultipleModals} class="btn"> Show multiple modals </button>
</div>
