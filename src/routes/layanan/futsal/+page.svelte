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
			name: 'Rumput Sintetis Premium',
			specification: 'Fiber height 40-50mm, dtex 8800-12000',
			price: 'Rp 150.000 - 200.000',
			unit: 'per m²',
			image:
				'https://images.unsplash.com/photo-1603308824961-f5c3b8d6c802?auto=format&fit=crop&w=800&q=80'
		},
		{
			name: 'Rubber Granules (Karet Butiran)',
			specification: 'SBR/EPDM, ukuran 0.5-2.5mm',
			price: 'Rp 45.000 - 65.000',
			unit: 'per kg',
			image:
				'https://images.unsplash.com/photo-1597764692310-fcc0c85a9cdb?auto=format&fit=crop&w=800&q=80'
		},
		{
			name: 'Base Material (Batu Split)',
			specification: 'Aggregate ukuran 5-20mm',
			price: 'Rp 180.000 - 220.000',
			unit: 'per m³',
			image:
				'https://images.unsplash.com/photo-1596384275668-3d8d64c10909?auto=format&fit=crop&w=800&q=80'
		},
		{
			name: 'Sistem Drainase',
			specification: 'PVC pipe Ø 100-150mm + gravel bed',
			price: 'Rp 85.000 - 120.000',
			unit: 'per meter',
			image:
				'https://images.unsplash.com/photo-1600486913747-55e229ad1911?auto=format&fit=crop&w=800&q=80'
		},
		{
			name: 'Lampu LED Floodlight',
			specification: '200W-400W, IP65, 5000K',
			price: 'Rp 1.500.000 - 3.000.000',
			unit: 'per unit',
			image:
				'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&q=80'
		},
		{
			name: 'Pagar Pembatas',
			specification: 'Galvanis + powder coating, tinggi 4m',
			price: 'Rp 350.000 - 450.000',
			unit: 'per meter',
			image:
				'https://images.unsplash.com/photo-1505842465776-3a8f94ad9a92?auto=format&fit=crop&w=800&q=80'
		}
	];

	let currentImageIndex: number = 0; // ✅ tambahkan tipe number
	const heroImages: string[] = [
		'https://images.unsplash.com/photo-1603308824961-f5c3b8d6c802?auto=format&fit=crop&w=1600&q=80',
		'https://images.unsplash.com/photo-1592839713275-5e19f0b6f38d?auto=format&fit=crop&w=1600&q=80',
		'https://images.unsplash.com/photo-1578425570439-7b9d92869d02?auto=format&fit=crop&w=1600&q=80'
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % heroImages.length;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Lapangan Futsal - Spesifikasi & Material | Konstruksi Lapangan Olahraga</title>
	<meta
		name="description"
		content="Detail spesifikasi dan material untuk pembangunan lapangan futsal standar internasional. Rumput sintetis premium, sistem drainase optimal."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-96 overflow-hidden">
	<div class="absolute inset-0 transition-opacity duration-1000">
		<img
			src={heroImages[currentImageIndex]}
			alt="Lapangan Futsal"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/60"></div>
	</div>

	<div class="absolute inset-0 flex items-center justify-center">
		<div class="text-center text-white">
			<h1 class="mb-4 text-5xl font-bold tracking-tight">
				Lapangan <span class="text-emerald-400">Futsal</span>
			</h1>
			<p class="text-xl opacity-90">Spesifikasi Material & Konstruksi Profesional</p>
		</div>
	</div>

	<!-- Breadcrumb -->
	<div class="absolute bottom-4 left-4">
		<nav class="flex text-white/80" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<a href="/" class="transition-colors hover:text-emerald-400">Beranda</a>
				</li>
				<li>
					<div class="flex items-center">
						<span class="mx-2">/</span>
						<span class="text-emerald-400">Lapangan Futsal</span>
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
					Standar Konstruksi <span class="text-emerald-600">Internasional</span>
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-gray-600">
					Lapangan futsal kami dibangun sesuai standar FIFA dengan dimensi 38-42m x 18-25m.
					Menggunakan material premium dan teknologi terdepan untuk memberikan pengalaman bermain
					terbaik.
				</p>

				<div class="mb-8 grid grid-cols-2 gap-4">
					<div class="rounded-xl bg-emerald-50 p-4">
						<h4 class="mb-2 font-semibold text-emerald-700">Dimensi Standar</h4>
						<p class="text-sm text-gray-600">40m x 20m (FIFA approved)</p>
					</div>
					<div class="rounded-xl bg-teal-50 p-4">
						<h4 class="mb-2 font-semibold text-teal-700">Durasi Konstruksi</h4>
						<p class="text-sm text-gray-600">14-21 hari kerja</p>
					</div>
					<div class="rounded-xl bg-green-50 p-4">
						<h4 class="mb-2 font-semibold text-green-700">Garansi Material</h4>
						<p class="text-sm text-gray-600">5-8 tahun</p>
					</div>
					<div class="rounded-xl bg-cyan-50 p-4">
						<h4 class="mb-2 font-semibold text-cyan-700">Maintenance</h4>
						<p class="text-sm text-gray-600">Minimal & mudah</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="https://source.unsplash.com/600x400/?futsal-construction"
						alt="Konstruksi Futsal"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Materials Section -->
<section class="bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-800">
				Material & <span class="text-emerald-600">Spesifikasi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Komponen berkualitas tinggi untuk lapangan futsal yang tahan lama dan profesional
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
							class="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<div class="p-6">
						<h3
							class="mb-3 text-xl font-bold text-gray-800 transition-colors group-hover:text-emerald-600"
						>
							{material.name}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-600">
							{material.specification}
						</p>

						<div class="flex items-center justify-between">
							<div>
								<p class="text-lg font-semibold text-emerald-600">{material.price}</p>
								<p class="text-xs text-gray-500">{material.unit}</p>
							</div>
							<div class="rounded-full bg-emerald-100 px-3 py-1">
								<span class="text-xs font-medium text-emerald-700">Premium</span>
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
				Proses <span class="text-emerald-600">Konstruksi</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600">
				Tahapan pembangunan lapangan futsal yang sistematis dan profesional
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each [{ step: '01', title: 'Survey & Design', desc: 'Pengukuran lahan dan perancangan layout optimal' }, { step: '02', title: 'Persiapan Base', desc: 'Penggalian, pemadatan tanah, dan pemasangan drainase' }, { step: '03', title: 'Instalasi Material', desc: 'Pemasangan rumput sintetis dan rubber granules' }, { step: '04', title: 'Finishing & QC', desc: 'Pemasangan aksesori, marking, dan quality control' }] as process, index}
				<div class="group text-center">
					<div class="relative mb-6">
						<div
							class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg transition-transform duration-300 group-hover:scale-110"
						>
							<span class="text-2xl font-bold text-white">{process.step}</span>
						</div>
						{#if index < 3}
							<div
								class="absolute top-10 left-20 hidden h-0.5 w-full bg-gradient-to-r from-emerald-300 to-teal-300 lg:block"
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
<section class="bg-gradient-to-br from-emerald-600 to-teal-600 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center">
		<h2 class="mb-6 text-4xl font-bold text-white">Siap Membangun Lapangan Futsal Impian?</h2>
		<p class="mb-8 text-xl text-emerald-100">
			Konsultasikan kebutuhan Anda dengan tim ahli kami untuk mendapatkan solusi terbaik
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="tel:+62812345678"
				class="inline-flex transform items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
			>
				📞 Hubungi Sekarang
			</a>
			<a
				href="/kontak"
				class="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-emerald-600"
			>
				💬 Konsultasi Gratis
			</a>
		</div>
	</div>
</section>
