<script>
    import Modal from '$lib/components/Modal/Modal.svelte';
    import Toast from '$lib/components/Toast/Toast.svelte';

    import '../app.css';
</script>

<slot />

<Toast />

<Modal />
