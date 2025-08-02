<script lang="ts">
	import { onMount } from 'svelte';

	interface Material {
		name: string;
		specification: string;
		price: string;
		unit: string;
		image: string;
	}

	const materials: Material[] = [
		{
			name: 'Lantai Parket Maple',
			specification: 'Grade A maple hardwood, thickness 22mm',
			price: 'Rp 450.000 - 650.000',
			unit: 'per m²',
			image: 'https://source.unsplash.com/300x200/?wooden-floor'
		},
		{
			name: 'Ring Basket Profesional',
			specification: 'Steel rim Ø 45cm, standar FIBA/NBA',
			price: 'Rp 2.500.000 - 4.000.000',
			unit: 'per set',
			image: 'https://source.unsplash.com/300x200/?basketball-hoop'
		},
		{
			name: 'Papan Pantul Tempered Glass',
			specification: 'Tempered glass 12mm, 180x105cm',
			price: 'Rp 8.000.000 - 12.000.000',
			unit: 'per unit',
			image: 'https://source.unsplash.com/300x200/?basketball-backboard'
		},
		{
			name: 'Tiang Basket Adjustable',
			specification: 'Steel galvanis, height 2.6-3.05m adjust',
			price: 'Rp 15.000.000 - 25.000.000',
			unit: 'per set',
			image: 'https://source.unsplash.com/300x200/?basketball-pole'
		},
		{
			name: 'Cat Marking Lapangan',
			specification: 'Acrylic paint, UV resistant, multi-color',
			price: 'Rp 125.000 - 180.000',
			unit: 'per liter',
			image: 'https://source.unsplash.com/300x200/?court-marking'
		},
		{
			name: 'Sistem Pencahayaan LED',
			specification: 'High-bay LED 150W-300W, CRI >80',
			price: 'Rp 2.200.000 - 4.500.000',
			unit: 'per unit',
			image: 'https://source.unsplash.com/300x200/?gymnasium-lighting'
		}
	];

	let currentImageIndex = 0;
	const heroImages = [
		'https://source.unsplash.com/1200x600/?basketball-court',
		'https://source.unsplash.com/1200x600/?indoor-basketball',
		'https://source.unsplash.com/1200x600/?basketball-gymnasium'
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Lapangan Basket - Spesifikasi & Material | Konstruksi Lapangan Olahraga</title>
	<meta
		name="description"
		content="Detail spesifikasi dan material untuk pembangunan lapangan basket standar FIBA. Lantai parket maple, ring profesional, sistem pencahayaan optimal."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 overflow-hidden">
	<div class="absolute inset-0 transition-opacity duration-1000">
		<img
			src={heroImages[currentImageIndex]}
			alt="Lapangan Basket"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/60"></div>
	</div>

	<div class="absolute inset-0 flex items-center justify-center">
		<div class="text-center text-white">
			<h1 class="mb-4 text-5xl font-bold tracking-tight">
				Lapangan <span class="text-amber-400">Basket</span>
			</h1>
			<p class="text-xl opacity-90">Spesifikasi Material & Konstruksi Profesional</p>
		</div>
	</div>

	<!-- Breadcrumb -->
	<div class="absolute bottom-4 left-4">
		<nav class="flex text-white/80" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<a href="/" class="transition-colors hover:text-amber-400">Beranda</a>
				</li>
				<li>
					<div class="flex items-center">
						<span class="mx-2">/</span>
						<span class="text-amber-400">Lapangan Basket</span>
					</div>
				</li>
			</ol>
		</nav>
	</div>
</section>

<!-- Overview Section -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold text-gray-800">
					Standar Konstruksi <span class="text-amber-600">FIBA & NBA</span>
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-gray-600">
					Lapangan basket kami dibangun sesuai standar internasional FIBA dengan dimensi 28m x 15m.
					Menggunakan lantai parket maple grade A dan sistem pencahayaan optimal untuk performa
					terbaik.
				</p>

				<div class="mb-8 grid grid-cols-2 gap-4">
					<div class="rounded-xl bg-amber-50 p-4">
						<h4 class="mb-2 font-semibold text-amber-700">Dimensi Standar</h4>
						<p class="text-sm text-gray-600">28m x 15m (FIBA approved)</p>
					</div>
					<div class="rounded-xl bg-orange-50 p-4">
						<h4 class="mb-2 font-semibold text-orange-700">Durasi Konstruksi</h4>
						<p class="text-sm text-gray-600">21-30 hari kerja</p>
					</div>
					<div class="rounded-xl bg-yellow-50 p-4">
						<h4 class="mb-2 font-semibold text-yellow-700">Garansi Material</h4>
						<p class="text-sm text-gray-600">8-15 tahun</p>
					</div>
					<div class="rounded-xl bg-red-50 p-4">
						<h4 class="mb-2 font-semibold text-red-700">Tinggi Ring</h4>
						<p class="text-sm text-gray-600">3.05m (standar)</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="https://source.unsplash.com/600x400/?basketball-construction"
						alt="Konstruksi Basket"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Materials Section -->
<section class="bg-gradient-to-br from-gray-50 to-amber-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Material & <span class="text-amber-600">Spesifikasi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Komponen berkualitas tinggi untuk lapangan basket yang profesional dan tahan lama
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each materials as material, index}
				<div
					class="group transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="relative overflow-hidden">
						<img
							src={material.image}
							alt={material.name}
							class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<div class="p-6">
						<h3
							class="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-amber-600"
						>
							{material.name}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-600">
							{material.specification}
						</p>

						<div class="flex items-center justify-between">
							<div>
								<p class="text-lg font-semibold text-amber-600">{material.price}</p>
								<p class="text-xs text-gray-500">{material.unit}</p>
							</div>
							<div class="rounded-full bg-amber-100 px-3 py-1">
								<span class="text-xs font-medium text-amber-700">Professional</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Proses <span class="text-amber-600">Konstruksi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Tahapan pembangunan lapangan basket yang sistematis dan profesional
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each [{ step: '01', title: 'Survey & Design', desc: 'Pengukuran lahan dan perancangan layout sesuai standar FIBA' }, { step: '02', title: 'Persiapan Base', desc: 'Perataan lantai dasar dan instalasi sub-flooring system' }, { step: '03', title: 'Instalasi Parket', desc: 'Pemasangan lantai maple dan finishing anti-slip coating' }, { step: '04', title: 'Equipment Setup', desc: 'Instalasi ring, papan pantul, marking, dan lighting system' }] as process, index}
				<div class="group text-center">
					<div class="relative mb-6">
						<div
							class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg transition-transform duration-300 group-hover:scale-110"
						>
							<span class="text-2xl font-bold text-white">{process.step}</span>
						</div>
						{#if index < 3}
							<div
								class="absolute top-10 left-20 hidden h-0.5 w-full bg-gradient-to-r from-amber-300 to-orange-300 lg:block"
							></div>
						{/if}
					</div>
					<h3 class="mb-3 text-xl font-bold text-gray-800">{process.title}</h3>
					<p class="leading-relaxed text-gray-600">{process.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Keunggulan <span class="text-amber-600">Lapangan Kami</span>
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each [{ icon: '🏀', title: 'Bounce Consistency', desc: 'Pantulan bola yang konsisten di seluruh permukaan lapangan' }, { icon: '💡', title: 'Optimal Lighting', desc: 'Sistem pencahayaan tanpa bayangan dengan distribusi cahaya merata' }, { icon: '🎯', title: 'Precision Marking', desc: 'Garis lapangan dengan presisi tinggi sesuai standar internasional' }, { icon: '🛡️', title: 'Safety First', desc: 'Material anti-slip dan edge protection untuk keamanan pemain' }, { icon: '🌡️', title: 'Climate Control', desc: 'Ventilasi optimal untuk kenyamanan bermain dalam segala cuaca' }, { icon: '⚡', title: 'Quick Assembly', desc: 'Sistem modular yang memungkinkan instalasi cepat dan efisien' }] as feature}
				<div class="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
					<div class="mb-4 text-4xl">{feature.icon}</div>
					<h3 class="mb-3 text-xl font-bold text-gray-800">{feature.title}</h3>
					<p class="text-gray-600">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-br from-amber-600 to-orange-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center">
		<h2 class="mb-6 text-4xl font-bold text-white">
			Bangun Lapangan Basket Berkualitas Internasional
		</h2>
		<p class="mb-8 text-xl text-amber-100">
			Dapatkan konsultasi gratis untuk lapangan basket impian Anda dari tim ahli berpengalaman
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="tel:+62812345678"
				class="inline-flex transform items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-amber-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
			>
				📞 Hubungi Langsung
			</a>
			<a
				href="/kontak"
				class="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-amber-600"
			>
				💬 Konsultasi Gratis
			</a>
		</div>
	</div>
</section>
