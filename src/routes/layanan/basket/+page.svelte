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
			name: 'Lantai Karet Anti-Slip',
			specification: 'PVC sports flooring, thickness 6-8mm',
			price: 'Rp 280.000 - 450.000',
			unit: 'per m²',
			image: 'https://source.unsplash.com/300x200/?rubber-floor'
		},
		{
			name: 'Net Badminton Premium',
			specification: 'Nylon mesh 20x20mm, height 1.55m',
			price: 'Rp 350.000 - 550.000',
			unit: 'per set',
			image: 'https://source.unsplash.com/300x200/?badminton-net'
		},
		{
			name: 'Tiang Net Adjustable',
			specification: 'Steel powder coated, height adjust 1.524m',
			price: 'Rp 1.800.000 - 2.500.000',
			unit: 'per pasang',
			image: 'https://source.unsplash.com/300x200/?badminton-post'
		},
		{
			name: 'Sistem Ventilasi',
			specification: 'Exhaust fan + air circulation system',
			price: 'Rp 2.500.000 - 4.000.000',
			unit: 'per court',
			image: 'https://source.unsplash.com/300x200/?ventilation-system'
		},
		{
			name: 'Pencahayaan LED Court',
			specification: 'Anti-glare LED 100-200W, CRI >90',
			price: 'Rp 1.200.000 - 2.200.000',
			unit: 'per unit',
			image: 'https://source.unsplash.com/300x200/?court-lighting'
		},
		{
			name: 'Cat Marking Precision',
			specification: 'Water-based paint, BWF approved colors',
			price: 'Rp 95.000 - 140.000',
			unit: 'per liter',
			image: 'https://source.unsplash.com/300x200/?badminton-court-lines'
		}
	];

	let currentImageIndex = 0;
	const heroImages = [
		'https://source.unsplash.com/1200x600/?badminton-court',
		'https://source.unsplash.com/1200x600/?indoor-badminton',
		'https://source.unsplash.com/1200x600/?badminton-hall'
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Lapangan Badminton - Spesifikasi & Material | Konstruksi Lapangan Olahraga</title>
	<meta
		name="description"
		content="Detail spesifikasi dan material untuk pembangunan lapangan badminton standar BWF. Lantai anti-slip, sistem ventilasi optimal, pencahayaan anti-silau."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 overflow-hidden">
	<div class="absolute inset-0 transition-opacity duration-1000">
		<img
			src={heroImages[currentImageIndex]}
			alt="Lapangan Badminton"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-900/60"></div>
	</div>

	<div class="absolute inset-0 flex items-center justify-center">
		<div class="text-center text-white">
			<h1 class="mb-4 text-5xl font-bold tracking-tight">
				Lapangan <span class="text-rose-400">Badminton</span>
			</h1>
			<p class="text-xl opacity-90">Spesifikasi Material & Konstruksi Profesional</p>
		</div>
	</div>

	<!-- Breadcrumb -->
	<div class="absolute bottom-4 left-4">
		<nav class="flex text-white/80" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<a href="/" class="transition-colors hover:text-rose-400">Beranda</a>
				</li>
				<li>
					<div class="flex items-center">
						<span class="mx-2">/</span>
						<span class="text-rose-400">Lapangan Badminton</span>
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
					Standar Konstruksi <span class="text-rose-600">BWF Approved</span>
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-gray-600">
					Lapangan badminton kami dibangun sesuai standar BWF (Badminton World Federation) dengan
					dimensi 13.4m x 6.1m. Dilengkapi sistem ventilasi optimal dan pencahayaan anti-silau untuk
					kenyamanan bermain maksimal.
				</p>

				<div class="mb-8 grid grid-cols-2 gap-4">
					<div class="rounded-xl bg-rose-50 p-4">
						<h4 class="mb-2 font-semibold text-rose-700">Dimensi Standar</h4>
						<p class="text-sm text-gray-600">13.4m x 6.1m (BWF)</p>
					</div>
					<div class="rounded-xl bg-pink-50 p-4">
						<h4 class="mb-2 font-semibold text-pink-700">Durasi Konstruksi</h4>
						<p class="text-sm text-gray-600">10-18 hari kerja</p>
					</div>
					<div class="rounded-xl bg-red-50 p-4">
						<h4 class="mb-2 font-semibold text-red-700">Garansi Material</h4>
						<p class="text-sm text-gray-600">6-10 tahun</p>
					</div>
					<div class="rounded-xl bg-purple-50 p-4">
						<h4 class="mb-2 font-semibold text-purple-700">Tinggi Net</h4>
						<p class="text-sm text-gray-600">1.524m (standar)</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="https://source.unsplash.com/600x400/?badminton-construction"
						alt="Konstruksi Badminton"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Materials Section -->
<section class="bg-gradient-to-br from-gray-50 to-rose-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Material & <span class="text-rose-600">Spesifikasi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Komponen berkualitas tinggi untuk lapangan badminton yang nyaman dan profesional
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
							class="absolute inset-0 bg-gradient-to-t from-rose-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<div class="p-6">
						<h3
							class="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-rose-600"
						>
							{material.name}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-600">
							{material.specification}
						</p>

						<div class="flex items-center justify-between">
							<div>
								<p class="text-lg font-semibold text-rose-600">{material.price}</p>
								<p class="text-xs text-gray-500">{material.unit}</p>
							</div>
							<div class="rounded-full bg-rose-100 px-3 py-1">
								<span class="text-xs font-medium text-rose-700">BWF Grade</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Indoor vs Outdoor Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Pilihan <span class="text-rose-600">Indoor & Outdoor</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Kami menyediakan solusi untuk konstruksi lapangan badminton indoor maupun outdoor
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Indoor -->
			<div class="rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-8">
				<div class="mb-8 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-500"
					>
						<span class="text-2xl">🏢</span>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-gray-800">Lapangan Indoor</h3>
				</div>

				<div class="space-y-4">
					{#each ['Lantai PVC anti-slip premium', 'Sistem ventilasi dan AC optimal', 'Pencahayaan LED anti-glare', 'Kontrol suhu dan kelembaban', 'Akustik ruangan yang baik', 'Perlindungan dari cuaca ekstrem'] as feature}
						<div class="flex items-center space-x-3">
							<span class="h-2 w-2 rounded-full bg-rose-500"></span>
							<span class="text-gray-700">{feature}</span>
						</div>
					{/each}
				</div>

				<div class="mt-8 rounded-xl bg-white p-4">
					<div class="flex items-center justify-between">
						<span class="font-semibold text-gray-800">Estimasi Biaya:</span>
						<span class="text-lg font-bold text-rose-600">Rp 450-650 juta</span>
					</div>
					<p class="mt-2 text-sm text-gray-500">*Per court, sudah termasuk bangunan</p>
				</div>
			</div>

			<!-- Outdoor -->
			<div class="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8">
				<div class="mb-8 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
					>
						<span class="text-2xl">🌤️</span>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-gray-800">Lapangan Outdoor</h3>
				</div>

				<div class="space-y-4">
					{#each ['Lantai beton dengan coating khusus', 'Sistem drainase air hujan', 'Tiang net tahan korosi', 'Pencahayaan LED weatherproof', 'Windscreen untuk perlindungan angin', 'Material tahan UV dan cuaca'] as feature}
						<div class="flex items-center space-x-3">
							<span class="h-2 w-2 rounded-full bg-green-500"></span>
							<span class="text-gray-700">{feature}</span>
						</div>
					{/each}
				</div>

				<div class="mt-8 rounded-xl bg-white p-4">
					<div class="flex items-center justify-between">
						<span class="font-semibold text-gray-800">Estimasi Biaya:</span>
						<span class="text-lg font-bold text-green-600">Rp 180-280 juta</span>
					</div>
					<p class="mt-2 text-sm text-gray-500">*Per court, tanpa atap/bangunan</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Proses <span class="text-rose-600">Konstruksi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Tahapan pembangunan lapangan badminton yang sistematis dan profesional
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each [{ step: '01', title: 'Survey & Planning', desc: 'Pengukuran lahan dan perancangan tata letak optimal' }, { step: '02', title: 'Base Preparation', desc: 'Persiapan lantai dasar dan sistem drainase' }, { step: '03', title: 'Floor Installation', desc: 'Pemasangan lantai PVC dan marking presisi' }, { step: '04', title: 'Equipment Setup', desc: 'Instalasi net, tiang, pencahayaan, dan ventilasi' }] as process, index}
				<div class="group text-center">
					<div class="relative mb-6">
						<div
							class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg transition-transform duration-300 group-hover:scale-110"
						>
							<span class="text-2xl font-bold text-white">{process.step}</span>
						</div>
						{#if index < 3}
							<div
								class="absolute top-10 left-20 hidden h-0.5 w-full bg-gradient-to-r from-rose-300 to-pink-300 lg:block"
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

<!-- CTA Section -->
<section class="bg-gradient-to-br from-rose-600 to-pink-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center">
		<h2 class="mb-6 text-4xl font-bold text-white">Wujudkan Lapangan Badminton Impian Anda</h2>
		<p class="mb-8 text-xl text-rose-100">
			Konsultasikan kebutuhan lapangan badminton indoor atau outdoor dengan tim profesional kami
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="tel:+62812345678"
				class="inline-flex transform items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-rose-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
			>
				📞 Konsultasi Langsung
			</a>
			<a
				href="/kontak"
				class="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-rose-600"
			>
				💬 Dapatkan Penawaran
			</a>
		</div>
	</div>
</section>
