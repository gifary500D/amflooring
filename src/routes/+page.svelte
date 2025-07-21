<script lang="ts">
	let current = 0;
	const slides = [
		'https://picsum.photos/id/1011/1200/400',
		'https://picsum.photos/id/1015/1200/400',
		'https://picsum.photos/id/1016/1200/400'
	];

	function next() {
		current = (current + 1) % slides.length;
	}

	setInterval(next, 4000);
</script>

<!-- Navbar -->
<nav class="fixed top-0 right-0 left-0 z-50 bg-white shadow">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<h1 class="text-xl font-bold text-blue-700">AMFlooring</h1>
		<div class="hidden space-x-4 md:flex">
			<a href="#home" class="hover:text-blue-500">Beranda</a>
			<a href="#about" class="hover:text-blue-500">Tentang</a>
			<a href="#layanan" class="hover:text-blue-500">Layanan</a>
			<a href="#visi" class="hover:text-blue-500">Visi & Misi</a>
		</div>
	</div>
</nav>

<main class="pt-16">
	<!-- Header Slider -->
	<section id="home" class="relative h-[400px] overflow-hidden">
		{#each slides as slide, i}
			<img
				src={slide}
				alt="Slide"
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
				style="opacity: {current === i ? 1 : 0}"
			/>
		{/each}
		<div class="absolute inset-0 flex items-center justify-center bg-black/40">
			<h2 class="px-4 text-center text-4xl font-bold text-white md:text-6xl">
				Solusi Lapangan Olahraga Terbaik
			</h2>
		</div>
	</section>

	<!-- Tentang Kami -->
	<section id="about" class="bg-gray-100 py-20">
		<div class="mx-auto max-w-5xl px-4 text-center">
			<h2 class="mb-6 text-3xl font-bold text-blue-700">Tentang AMFlooring</h2>
			<p class="text-lg">
				AMFlooring adalah perusahaan spesialis pembangunan dan renovasi lapangan olahraga seperti
				futsal, basket, badminton, dan lainnya. Kami telah berpengalaman lebih dari 10 tahun dan
				dipercaya oleh banyak klien di seluruh Indonesia.
			</p>
		</div>
	</section>

	<!-- Layanan -->
	<section id="layanan" class="bg-gray-50 py-20">
		<div class="mx-auto max-w-7xl px-4 text-center">
			<h2 class="mb-12 text-3xl font-bold text-blue-700">Layanan Kami</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<!-- Card 1 -->
				<div class="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">
					<img
						src="https://source.unsplash.com/400x250/?futsal"
						alt="Lapangan Futsal"
						class="h-56 w-full object-cover"
					/>
					<div class="p-6 text-left">
						<h3 class="mb-2 text-xl font-semibold text-blue-600">Lapangan Futsal</h3>
						<p class="mb-4 text-gray-600">
							Desain dan pembangunan lapangan futsal standar internasional.
						</p>
						<a
							href="/lapangan"
							class="inline-block rounded bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
							>Lihat Detail</a
						>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">
					<img
						src="https://source.unsplash.com/400x250/?basketball-court"
						alt="Lapangan Basket"
						class="h-56 w-full object-cover"
					/>
					<div class="p-6 text-left">
						<h3 class="mb-2 text-xl font-semibold text-blue-600">Lapangan Basket</h3>
						<p class="mb-4 text-gray-600">Permukaan berkualitas dan sistem pencahayaan terbaik.</p>
						<a
							href="/lapangan"
							class="inline-block rounded bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
							>Lihat Detail</a
						>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg">
					<img
						src="https://source.unsplash.com/400x250/?badminton"
						alt="Lapangan Badminton"
						class="h-56 w-full object-cover"
					/>
					<div class="p-6 text-left">
						<h3 class="mb-2 text-xl font-semibold text-blue-600">Lapangan Badminton</h3>
						<p class="mb-4 text-gray-600">
							Konstruksi indoor dan outdoor dengan material anti-slip.
						</p>
						<a
							href="/lapangan"
							class="inline-block rounded bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
							>Lihat Detail</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Visi dan Misi -->
	<section id="visi" class="bg-white py-20">
		<div class="mx-auto max-w-7xl px-4">
			<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
				<div>
					<h2 class="mb-4 text-3xl font-bold text-blue-700">Visi Kami</h2>
					<p class="mb-6 text-gray-700">
						Menjadi perusahaan terdepan dalam pembangunan dan renovasi lapangan olahraga di
						Indonesia yang inovatif, berkualitas tinggi, dan terpercaya.
					</p>
					<h2 class="mb-4 text-3xl font-bold text-blue-700">Misi Kami</h2>
					<ul class="list-inside list-disc space-y-2 text-gray-700">
						<li>Menyediakan layanan terbaik dan tepat waktu kepada klien.</li>
						<li>Menggunakan material berkualitas tinggi yang ramah lingkungan.</li>
						<li>Memberikan solusi desain lapangan yang inovatif dan sesuai kebutuhan.</li>
						<li>Menjaga kepercayaan dan kepuasan pelanggan sebagai prioritas utama.</li>
					</ul>
				</div>
				<div>
					<img
						src="https://source.unsplash.com/600x400/?team,sport"
						alt="Visi Misi"
						class="h-auto w-full rounded-xl shadow"
					/>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="bg-gray-800 py-6 text-white">
	<div class="mx-auto max-w-7xl px-4 text-center">
		<p>&copy; 2025 AMFlooring. All rights reserved.</p>
	</div>
</footer>
