<script lang="ts">
	import { onMount } from 'svelte';

	interface Testimonial {
		id: string;
		name: string;
		role: string;
		text: string;
		rating: number;
		projectName: string;
		projectType: string;
		location: string;
		completedDate: string;
		projectDetails: {
			area: string;
			duration: string;
			features: string[];
		};
		images: string[];
	}

	// Data dummy testimoni dengan informasi lapangan lengkap
	let testimonials: Testimonial[] = [
		{
			id: '1',
			name: 'Budi Santoso',
			role: 'Pemilik Lapangan Futsal',
			text: 'Tim Kontraktor Lapangan bekerja dengan sangat profesional. Kualitas lapangan futsal yang dibangun melebihi ekspektasi kami. Drainase sempurna, rumput sintetis berkualitas tinggi.',
			rating: 5,
			projectName: 'Futsal Arena Budi',
			projectType: 'Lapangan Futsal',
			location: 'Jakarta Selatan',
			completedDate: '2024-03-15',
			projectDetails: {
				area: '25m x 15m',
				duration: '3 minggu',
				features: [
					'Rumput Sintetis Premium',
					'Sistem Drainase Modern',
					'Lampu LED Floodlight',
					'Gawang Aluminium'
				]
			},
			images: ['/images/projects/futsal-budi-1.jpg', '/images/projects/futsal-budi-2.jpg']
		},
		{
			id: '2',
			name: 'Sari Wijaya',
			role: 'Kepala Sekolah',
			text: 'Lapangan basket sekolah kami dibangun dengan standar internasional. Anak-anak sangat senang dan olahraga menjadi lebih menyenangkan. Terima kasih!',
			rating: 5,
			projectName: 'Lapangan Basket SMAN 12',
			projectType: 'Lapangan Basket',
			location: 'Bandung',
			completedDate: '2024-02-20',
			projectDetails: {
				area: '28m x 15m',
				duration: '4 minggu',
				features: [
					'Flooring Polyurethane',
					'Ring Basket Adjustable',
					'Marking Standar FIBA',
					'Tribun Penonton'
				]
			},
			images: ['/images/projects/basket-sekolah-1.jpg', '/images/projects/basket-sekolah-2.jpg']
		},
		{
			id: '3',
			name: 'Ahmad Rahman',
			role: 'Manager Olahraga',
			text: 'Lapangan tenis yang dibangun sangat berkualitas. Surface sempurna untuk bermain, net berkualitas tinggi, dan pencahayaan yang excellent untuk bermain malam hari.',
			rating: 5,
			projectName: 'Tennis Court Premium',
			projectType: 'Lapangan Tenis',
			location: 'Surabaya',
			completedDate: '2024-01-10',
			projectDetails: {
				area: '23.77m x 10.97m',
				duration: '5 minggu',
				features: ['Acrylic Surface', 'Net System Premium', 'LED Court Lighting', 'Umpire Chair']
			},
			images: ['/images/projects/tennis-ahmad-1.jpg', '/images/projects/tennis-ahmad-2.jpg']
		},
		{
			id: '4',
			name: 'Lisa Permata',
			role: 'Pemilik Sport Center',
			text: 'Luar biasa! Multi-purpose court yang dibangun bisa digunakan untuk berbagai olahraga. Investasi yang sangat menguntungkan untuk bisnis sport center kami.',
			rating: 5,
			projectName: 'Multi-Purpose Sport Center',
			projectType: 'Lapangan Multi-Purpose',
			location: 'Yogyakarta',
			completedDate: '2023-12-05',
			projectDetails: {
				area: '40m x 20m',
				duration: '6 minggu',
				features: ['Rubber Flooring', 'Modular Net System', 'Multi-Sport Marking', 'Sound System']
			},
			images: [
				'/images/projects/multipurpose-lisa-1.jpg',
				'/images/projects/multipurpose-lisa-2.jpg'
			]
		},
		{
			id: '5',
			name: 'Andi Kurniawan',
			role: 'Ketua RT',
			text: 'Lapangan badminton untuk warga RW 05 dibangun dengan sangat baik. Warga sangat antusias dan kegiatan olahraga masyarakat jadi lebih aktif.',
			rating: 5,
			projectName: 'Lapangan Badminton RW 05',
			projectType: 'Lapangan Badminton',
			location: 'Bekasi',
			completedDate: '2023-11-18',
			projectDetails: {
				area: '13.4m x 6.1m',
				duration: '2 minggu',
				features: ['PVC Sports Flooring', 'Shuttlecock Net', 'Court Lines Standard', 'Wall Padding']
			},
			images: ['/images/projects/badminton-rw05-1.jpg', '/images/projects/badminton-rw05-2.jpg']
		},
		{
			id: '6',
			name: 'Maya Sari',
			role: 'Direktur Hotel',
			text: 'Fasilitas olahraga hotel kami menjadi daya tarik utama tamu. Lapangan voli pantai indoor yang unik dan berkualitas tinggi. Highly recommended!',
			rating: 5,
			projectName: 'Indoor Beach Volleyball Court',
			projectType: 'Lapangan Voli Pantai Indoor',
			location: 'Bali',
			completedDate: '2023-10-22',
			projectDetails: {
				area: '18m x 9m',
				duration: '4 minggu',
				features: [
					'Sand Court Surface',
					'Beach Volleyball Net',
					'Climate Control',
					'Spectator Area'
				]
			},
			images: [
				'/images/projects/beach-volleyball-maya-1.jpg',
				'/images/projects/beach-volleyball-maya-2.jpg'
			]
		},
		{
			id: '7',
			name: 'Rizki Pratama',
			role: 'Ketua Club Sepak Bola',
			text: 'Lapangan sepak bola mini yang dibangun sangat berkualitas. Rumput sintetis premium dan drainase yang sempurna. Tim kami sangat puas berlatih disini.',
			rating: 5,
			projectName: 'Mini Soccer Field Garuda FC',
			projectType: 'Lapangan Sepak Bola Mini',
			location: 'Tangerang',
			completedDate: '2023-09-30',
			projectDetails: {
				area: '40m x 25m',
				duration: '4 minggu',
				features: [
					'Rumput Sintetis FIFA Quality',
					'Sistem Drainase Advanced',
					'Gawang Steel Premium',
					'Papan Skor Digital'
				]
			},
			images: [
				'/images/projects/mini-soccer-rizki-1.jpg',
				'/images/projects/mini-soccer-rizki-2.jpg'
			]
		},
		{
			id: '8',
			name: 'Diana Sari',
			role: 'Manager Fitness Center',
			text: 'Lapangan squash indoor yang dibangun di fitness center kami mendapat respons luar biasa dari member. Kualitas dinding dan flooring sangat baik.',
			rating: 5,
			projectName: 'Squash Court Elite Fitness',
			projectType: 'Lapangan Squash',
			location: 'Jakarta Pusat',
			completedDate: '2023-08-15',
			projectDetails: {
				area: '9.75m x 6.4m',
				duration: '3 minggu',
				features: [
					'Tempered Glass Wall',
					'Maple Wood Flooring',
					'Professional Lighting',
					'Ventilation System'
				]
			},
			images: ['/images/projects/squash-diana-1.jpg', '/images/projects/squash-diana-2.jpg']
		}
	];

	let animatedElements: { [key: string]: boolean } = {};
	let selectedFilter = 'semua';
	let searchQuery = '';

	// Filter dan search functionality
	$: filteredTestimonials = testimonials.filter((testimonial) => {
		const matchesFilter =
			selectedFilter === 'semua' ||
			testimonial.projectType.toLowerCase().includes(selectedFilter.toLowerCase());
		const matchesSearch =
			testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			testimonial.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			testimonial.location.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	onMount(() => {
		// Animate elements on scroll
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('data-animate');
						if (id) {
							animatedElements[id] = true;
						}
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Observe all animated elements
		document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Testimoni & Projek - Kontraktor Lapangan Olahraga</title>
	<meta
		name="description"
		content="Lihat testimoni klien dan portfolio projek lapangan olahraga yang telah kami kerjakan dengan kualitas terbaik."
	/>
</svelte:head>

<main class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 py-20">
		<div class="mx-auto max-w-7xl px-4">
			<div class="text-center text-white">
				<h1 class="mb-6 text-4xl font-black sm:text-5xl lg:text-6xl">
					Testimoni & <span class="text-emerald-300">Projek Kami</span>
				</h1>
				<p class="mb-8 text-xl text-emerald-100">
					Kepercayaan klien adalah motivasi terbesar kami untuk terus memberikan yang terbaik
				</p>
				<div class="flex flex-wrap justify-center gap-4 text-sm">
					<div class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
						<span class="text-emerald-300">✓</span>
						<span>80+ Projek Selesai</span>
					</div>
					<div class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
						<span class="text-emerald-300">✓</span>
						<span>100% Kepuasan Klien</span>
					</div>
					<div class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
						<span class="text-emerald-300">✓</span>
						<span>Garansi 2 Tahun</span>
					</div>
					<div class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
						<span class="text-emerald-300">✓</span>
						<span>Berpengalaman 10+ Tahun</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Filter dan Search Section -->
	<section class="border-b bg-white py-8">
		<div class="mx-auto max-w-7xl px-4">
			<div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
				<!-- Search Bar -->
				<div class="relative max-w-md flex-1">
					<input
						type="text"
						placeholder="Cari berdasarkan nama, projek, atau lokasi..."
						bind:value={searchQuery}
						class="w-full rounded-full border border-gray-300 py-3 pr-4 pl-12 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
					/>
					<svg
						class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>

				<!-- Filter Buttons -->
				<div class="flex flex-wrap gap-3">
					{#each ['semua', 'futsal', 'basket', 'tenis', 'badminton', 'voli', 'sepak bola', 'squash'] as filter}
						<button
							on:click={() => (selectedFilter = filter)}
							class="rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 {selectedFilter ===
							filter
								? 'bg-emerald-600 text-white shadow-lg'
								: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
						>
							{filter.charAt(0).toUpperCase() + filter.slice(1)}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials & Projects Grid -->
	<section class="py-16">
		<div class="mx-auto max-w-7xl px-4">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				{#each filteredTestimonials as testimonial, i}
					<article
						data-animate="testimonial-{testimonial.id}"
						class="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
						class:animate-fadeInUp={animatedElements[`testimonial-${testimonial.id}`]}
						style="animation-delay: {i * 0.1}s"
					>
						<!-- Project Header -->
						<div class="mb-6 flex items-start justify-between">
							<div>
								<h3 class="text-xl font-bold text-gray-800">{testimonial.projectName}</h3>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
										{testimonial.projectType}
									</span>
									<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
										📍 {testimonial.location}
									</span>
								</div>
							</div>
							<div class="flex">
								{#each Array(testimonial.rating) as _}
									<span class="text-amber-400">⭐</span>
								{/each}
							</div>
						</div>

						<!-- Project Details -->
						<div class="mb-6 rounded-2xl bg-gray-50 p-4">
							<div class="grid grid-cols-2 gap-4 text-sm">
								<div>
									<span class="font-semibold text-gray-600">Luas Area:</span>
									<p class="text-gray-800">{testimonial.projectDetails.area}</p>
								</div>
								<div>
									<span class="font-semibold text-gray-600">Durasi:</span>
									<p class="text-gray-800">{testimonial.projectDetails.duration}</p>
								</div>
								<div class="col-span-2">
									<span class="font-semibold text-gray-600">Selesai:</span>
									<p class="text-gray-800">
										{new Date(testimonial.completedDate).toLocaleDateString('id-ID', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</p>
								</div>
							</div>
						</div>

						<!-- Features -->
						<div class="mb-6">
							<h4 class="mb-3 font-semibold text-gray-800">Fitur & Spesifikasi:</h4>
							<div class="flex flex-wrap gap-2">
								{#each testimonial.projectDetails.features as feature}
									<span
										class="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800"
									>
										{feature}
									</span>
								{/each}
							</div>
						</div>

						<!-- Testimonial Quote -->
						<blockquote
							class="relative mb-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 text-gray-700 italic"
						>
							<span class="absolute -top-2 -left-2 text-3xl text-emerald-200">"</span>
							<span class="relative z-10">{testimonial.text}</span>
							<span class="absolute -right-2 -bottom-4 text-3xl text-emerald-200">"</span>
						</blockquote>

						<!-- Client Info -->
						<div class="flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 font-bold text-white shadow-lg"
							>
								{testimonial.name[0]}
							</div>
							<div>
								<h4 class="font-bold text-gray-800">{testimonial.name}</h4>
								<p class="text-sm text-gray-600">{testimonial.role}</p>
							</div>
						</div>

						<!-- Project Images Placeholder -->
						<div class="mt-6 grid grid-cols-2 gap-3">
							{#each testimonial.images as image, imgIndex}
								<div
									class="group relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300"
								>
									<!-- Placeholder untuk gambar projek -->
									<div class="flex h-full items-center justify-center text-gray-500">
										<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div
										class="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
									>
										<span class="text-sm">Foto Projek {imgIndex + 1}</span>
									</div>
								</div>
							{/each}
						</div>
					</article>
				{/each}
			</div>

			<!-- No Results -->
			{#if filteredTestimonials.length === 0}
				<div class="py-16 text-center">
					<svg
						class="mx-auto mb-4 h-16 w-16 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.709A7.962 7.962 0 014 8c0-4.418 3.582-8 8-8s8 3.582 8 8a7.963 7.963 0 01-2.176 5.291L20 21l-8-8z"
						/>
					</svg>
					<h3 class="mb-2 text-xl font-semibold text-gray-800">Tidak ada hasil ditemukan</h3>
					<p class="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
		<div class="mx-auto max-w-4xl px-4 text-center">
			<h2 class="mb-4 text-3xl font-bold text-white">Siap Memulai Projek Lapangan Anda?</h2>
			<p class="mb-8 text-xl text-emerald-100">
				Bergabunglah dengan klien-klien yang telah merasakan kepuasan bekerja sama dengan kami
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="rounded-full bg-white px-8 py-4 font-bold text-emerald-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					Konsultasi Gratis
				</a>
				<a
					href="/portfolio"
					class="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-emerald-600"
				>
					Hubungin Langsung
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fadeInUp {
		animation: fadeInUp 0.8s ease-out forwards;
	}
</style>
