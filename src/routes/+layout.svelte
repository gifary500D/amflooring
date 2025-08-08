<script lang="ts">
	import '../app.css'; // boleh juga dipindah ke layout.ts atau +layout.server.ts
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<!-- ✅ Navbar -->
<nav
	class="fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
		<!-- Logo -->
		<div class="flex items-center space-x-2">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-700"
			>
				<img
					src="/images/logo-amflooring.jpg"
					alt="Logo"
					class="h-full w-full rounded-full object-cover"
				/>
			</div>
			<h1
				class="bg-gradient-to-r from-red-600 to-sky-700 bg-clip-text text-xl font-bold text-transparent"
			>
				AMFlooring
			</h1>
		</div>

		<!-- Desktop Menu -->
		<div class="hidden space-x-8 md:flex">
			<a
				href="#home"
				class="group relative font-medium text-gray-700 transition-colors duration-300 hover:text-emerald-600"
			>
				Beranda
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"
				></span>
			</a>
			<a
				href="#about"
				class="group relative font-medium text-gray-700 transition-colors duration-300 hover:text-emerald-600"
				>Tentang</a
			>
			<a
				href="#layanan"
				class="group relative font-medium text-gray-700 transition-colors duration-300 hover:text-emerald-600"
				>Layanan</a
			>
			<a
				href="#visi"
				class="group relative font-medium text-gray-700 transition-colors duration-300 hover:text-emerald-600"
				>Visi & Misi</a
			>
			<a
				href="#kontak"
				class="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2 text-white shadow-lg transition hover:scale-105 hover:from-emerald-700 hover:to-teal-700"
				>Kontak</a
			>
		</div>

		<!-- Mobile Menu Button -->
		<button class="md:hidden" on:click={toggleMenu}>
			<div class="flex h-6 w-6 flex-col items-center justify-center">
				<span
					class="h-0.5 w-6 bg-gray-700 transition-all duration-300"
					class:translate-y-1={isMenuOpen}
					class:rotate-45={isMenuOpen}
				></span>
				<span
					class="mt-1 h-0.5 w-6 bg-gray-700 transition-all duration-300"
					class:opacity-0={isMenuOpen}
				></span>
				<span
					class="mt-1 h-0.5 w-6 bg-gray-700 transition-all duration-300"
					class:-translate-y-1={isMenuOpen}
					class:-rotate-45={isMenuOpen}
				></span>
			</div>
		</button>
	</div>

	<!-- Mobile Menu -->
	<div
		class="overflow-hidden transition-all duration-300 md:hidden"
		class:max-h-64={isMenuOpen}
		class:max-h-0={!isMenuOpen}
	>
		<div class="space-y-4 border-t bg-white px-4 py-4 sm:px-6">
			<a
				href="#home"
				class="block text-gray-700 transition-colors duration-300 hover:text-emerald-600">Beranda</a
			>
			<a
				href="#about"
				class="block text-gray-700 transition-colors duration-300 hover:text-emerald-600">Tentang</a
			>
			<a
				href="#layanan"
				class="block text-gray-700 transition-colors duration-300 hover:text-emerald-600">Layanan</a
			>
			<a
				href="#visi"
				class="block text-gray-700 transition-colors duration-300 hover:text-emerald-600"
				>Visi & Misi</a
			>
			<a
				href="#kontak"
				class="block rounded-lg bg-emerald-600 px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-emerald-700"
				>Kontak</a
			>
		</div>
	</div>
</nav>

<!-- ✅ Slot untuk isi halaman -->
<slot />
<!-- Back to Top Button -->
<!-- Back to Top Button -->
<button
	class="fixed right-4 bottom-4 z-50 h-12 w-12 transform rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white opacity-80 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:from-emerald-700 hover:to-teal-700 hover:opacity-100"
	on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
	↑
</button>
