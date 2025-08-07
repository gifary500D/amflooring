<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = false;
	let bolaEl: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (bolaEl) observer.observe(bolaEl);
	});
</script>

<div bind:this={bolaEl} class="flex justify-center">
	{#if visible}
		<div
			in:fly={{ x: 300, duration: 1000 }}
			class="h-32 w-32 rounded-full border-4 border-white bg-gradient-to-br from-orange-400 to-yellow-400 shadow-lg"
		>
			<!-- Bisa tambahkan background image bola futsal di sini -->
			<!-- <img src="/bola-futsal.png" alt="Bola Futsal" class="w-full h-full object-contain" /> -->
		</div>
	{/if}
</div>
