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
			name: 'Rumput Sintetis FIFA Grade',
			specification: 'FIFA Quality Pro, pile height 40-60mm',
			price: 'Rp 280.000 - 450.000',
			unit: 'per m²',
			image: 'https://source.unsplash.com/300x200/?synthetic-grass'
		},
		{
			name: 'Gawang Mini Soccer Aluminium',
			specification: 'Aluminium 3x2m, FIFA approved design',
			price: 'Rp 3.500.000 - 5.200.000',
			unit: 'per set',
			image: 'https://source.unsplash.com/300x200/?football-goal'
		},
		{
			name: 'Base Layer & Drainage',
			specification: 'Crushed stone + sand, drainage system',
			price: 'Rp 75.000 - 120.000',
			unit: 'per m²',
			image: 'https://source.unsplash.com/300x200/?construction-base'
		},
		{
			name: 'Pagar Keliling Safety',
			specification: 'Steel mesh 4m height, galvanis coating',
			price: 'Rp 185.000 - 285.000',
			unit: 'per m²',
			image: 'https://source.unsplash.com/300x200/?fence-sports'
		},
		{
			name: 'Sistem Pencahayaan LED',
			specification: 'Floodlight LED 200W-400W, IP65 rating',
			price: 'Rp 2.800.000 - 5.500.000',
			unit: 'per unit',
			image: 'https://source.unsplash.com/300x200/?stadium-lighting'
		},
		{
			name: 'Line Marking Premium',
			specification: 'Polyurethane paint, UV & weather resistant',
			price: 'Rp 45.000 - 75.000',
			unit: 'per meter',
			image: 'https://source.unsplash.com/300x200/?sports-marking'
		}
	];

	let currentImageIndex = 0;
	const heroImages = [
		'https://source.unsplash.com/1200x600/?mini-soccer-field',
		'https://source.unsplash.com/1200x600/?small-football-pitch',
		'https://source.unsplash.com/1200x600/?artificial-grass-football'
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Lapangan Mini Soccer - Spesifikasi & Material | Konstruksi Lapangan Olahraga</title>
	<meta
		name="description"
		content="Detail spesifikasi dan material untuk pembangunan lapangan mini soccer FIFA approved. Rumput sintetis premium, gawang aluminium, sistem drainase optimal."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 overflow-hidden">
	<div class="absolute inset-0 transition-opacity duration-1000">
		<img
			src={heroImages[currentImageIndex]}
			alt="Lapangan Mini Soccer"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-blue-900/60"></div>
	</div>

	<div class="absolute inset-0 flex items-center justify-center">
		<div class="text-center text-white">
			<h1 class="mb-4 text-5xl font-bold tracking-tight">
				Lapangan <span class="text-indigo-400">Mini Soccer</span>
			</h1>
			<p class="text-xl opacity-90">Spesifikasi Material & Konstruksi FIFA Approved</p>
		</div>
	</div>

	<!-- Breadcrumb -->
	<div class="absolute bottom-4 left-4">
		<nav class="flex text-white/80" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<a href="/" class="transition-colors hover:text-indigo-400">Beranda</a>
				</li>
				<li>
					<div class="flex items-center">
						<span class="mx-2">/</span>
						<span class="text-indigo-400">Lapangan Mini Soccer</span>
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
					Standar Konstruksi <span class="text-indigo-600">FIFA & Mini Soccer</span>
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-gray-600">
					Lapangan mini soccer kami dibangun dengan standar FIFA untuk ukuran 40m x 20m sampai 50m x
					30m. Menggunakan rumput sintetis premium dan sistem drainase modern untuk performa optimal
					di segala cuaca.
				</p>

				<div class="mb-8 grid grid-cols-2 gap-4">
					<div class="rounded-xl bg-indigo-50 p-4">
						<h4 class="mb-2 font-semibold text-indigo-700">Dimensi Lapangan</h4>
						<p class="text-sm text-gray-600">40m x 20m - 50m x 30m</p>
					</div>
					<div class="rounded-xl bg-blue-50 p-4">
						<h4 class="mb-2 font-semibold text-blue-700">Durasi Konstruksi</h4>
						<p class="text-sm text-gray-600">14-21 hari kerja</p>
					</div>
					<div class="rounded-xl bg-purple-50 p-4">
						<h4 class="mb-2 font-semibold text-purple-700">Garansi Material</h4>
						<p class="text-sm text-gray-600">10-15 tahun</p>
					</div>
					<div class="rounded-xl bg-cyan-50 p-4">
						<h4 class="mb-2 font-semibold text-cyan-700">Tinggi Gawang</h4>
						<p class="text-sm text-gray-600">2m x 3m (standar)</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="https://source.unsplash.com/600x400/?soccer-construction"
						alt="Konstruksi Mini Soccer"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Materials Section -->
<section class="bg-gradient-to-br from-gray-50 to-indigo-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Material & <span class="text-indigo-600">Spesifikasi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Komponen berkualitas FIFA approved untuk lapangan mini soccer yang profesional dan tahan
				lama
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
							class="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<div class="p-6">
						<h3
							class="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-indigo-600"
						>
							{material.name}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-600">
							{material.specification}
						</p>

						<div class="flex items-center justify-between">
							<div>
								<p class="text-lg font-semibold text-indigo-600">{material.price}</p>
								<p class="text-xs text-gray-500">{material.unit}</p>
							</div>
							<div class="rounded-full bg-indigo-100 px-3 py-1">
								<span class="text-xs font-medium text-indigo-700">FIFA Approved</span>
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
				Proses <span class="text-indigo-600">Konstruksi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Tahapan pembangunan lapangan mini soccer yang sistematis dan profesional
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each [{ step: '01', title: 'Survey & Design', desc: 'Pengukuran lahan dan perancangan layout sesuai kebutuhan' }, { step: '02', title: 'Base Preparation', desc: 'Persiapan pondasi dan sistem drainase yang optimal' }, { step: '03', title: 'Grass Installation', desc: 'Pemasangan rumput sintetis FIFA approved dengan infill' }, { step: '04', title: 'Equipment Setup', desc: 'Instalasi gawang, pagar, marking, dan sistem pencahayaan' }] as process, index}
				<div class="group text-center">
					<div class="relative mb-6">
						<div
							class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg transition-transform duration-300 group-hover:scale-110"
						>
							<span class="text-2xl font-bold text-white">{process.step}</span>
						</div>
						{#if index < 3}
							<div
								class="absolute top-10 left-20 hidden h-0.5 w-full bg-gradient-to-r from-indigo-300 to-blue-300 lg:block"
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
<section class="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Keunggulan <span class="text-indigo-600">Lapangan Kami</span>
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each [{ icon: '⚽', title: 'FIFA Quality Pro', desc: 'Rumput sintetis dengan sertifikasi FIFA Quality Pro untuk performa terbaik' }, { icon: '🌧️', title: 'All Weather Play', desc: 'Sistem drainase superior memungkinkan bermain dalam segala cuaca' }, { icon: '🎯', title: 'Precision Marking', desc: 'Garis lapangan dengan akurasi tinggi sesuai regulasi internasional' }, { icon: '🛡️', title: 'Safety Standard', desc: 'Pagar pengaman dan surface yang aman untuk pemain segala usia' }, { icon: '💡', title: 'LED Lighting', desc: 'Pencahayaan LED modern untuk visibilitas optimal siang dan malam' }, { icon: '🔧', title: 'Low Maintenance', desc: 'Desain yang mudah perawatan dengan biaya operasional rendah' }] as feature}
				<div class="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
					<div class="mb-4 text-4xl">{feature.icon}</div>
					<h3 class="mb-3 text-xl font-bold text-gray-800">{feature.title}</h3>
					<p class="text-gray-600">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Comparison Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Mengapa Pilih <span class="text-indigo-600">Mini Soccer</span>?
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Perbandingan keunggulan mini soccer dengan olahraga lainnya
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="text-center">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100"
				>
					<span class="text-3xl">⚽</span>
				</div>
				<h3 class="mb-4 text-xl font-bold text-gray-800">Mini Soccer</h3>
				<ul class="space-y-2 text-gray-600">
					<li>✅ Lapangan kompak (40x20m)</li>
					<li>✅ Tim kecil (7vs7)</li>
					<li>✅ Cocok segala usia</li>
					<li>✅ Biaya terjangkau</li>
					<li>✅ Maintenance mudah</li>
				</ul>
			</div>

			<div class="text-center opacity-60">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"
				>
					<span class="text-3xl">⚽</span>
				</div>
				<h3 class="mb-4 text-xl font-bold text-gray-800">Futsal</h3>
				<ul class="space-y-2 text-gray-600">
					<li>• Lapangan indoor (40x20m)</li>
					<li>• Tim kecil (5vs5)</li>
					<li>• Permukaan keras</li>
					<li>• Biaya lebih tinggi</li>
					<li>• Skill intensif</li>
				</ul>
			</div>

			<div class="text-center opacity-60">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"
				>
					<span class="text-3xl">🏟️</span>
				</div>
				<h3 class="mb-4 text-xl font-bold text-gray-800">Soccer Penuh</h3>
				<ul class="space-y-2 text-gray-600">
					<li>• Lapangan besar (100x60m)</li>
					<li>• Tim besar (11vs11)</li>
					<li>• Butuh lahan luas</li>
					<li>• Investasi besar</li>
					<li>• Maintenance kompleks</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-br from-indigo-600 to-blue-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center">
		<h2 class="mb-6 text-4xl font-bold text-white">Bangun Lapangan Mini Soccer FIFA Approved</h2>
		<p class="mb-8 text-xl text-indigo-100">
			Dapatkan konsultasi gratis untuk lapangan mini soccer berkualitas internasional dari tim ahli
			berpengalaman
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="tel:+62812345678"
				class="inline-flex transform items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
			>
				📞 Hubungi Langsung
			</a>
			<a
				href="/kontak"
				class="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-indigo-600"
			>
				💬 Konsultasi Gratis
			</a>
		</div>
	</div>
</section>
