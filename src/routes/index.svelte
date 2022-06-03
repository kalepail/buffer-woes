<script context="module">
	export const prerender = false;
</script>

<script>
export let keypair
</script>

<svelte:head>
	<title>Wallet</title>
</svelte:head>

<div class="content">
	<h1>Wallet</h1>
	{keypair.publicKey}
</div>
