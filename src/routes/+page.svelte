<script lang="ts">
	import { slides, testimonials, stats, contactInfo } from '$lib/data/homeData';
	import { nextSlide } from '$lib/utils/slider';
	import { onMount } from 'svelte';

	let current = 0;
	let isMenuOpen = false;
	let scrollY = 0;
	let innerWidth = 0;

	// Status animasi scroll
	let animatedSections: { [key: string]: boolean } = {
		testimonials: false,
		stats: false,
		contact: false
	};

	function next() {
		current = nextSlide(current, slides.length);
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Intersection Observer untuk memicu animasi saat scroll
	function handleIntersect(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute('data-section');
				if (id) {
					animatedSections[id] = true;
				}
			}
		});
	}

	onMount(() => {
		const interval = setInterval(next, 6000);

		// Setup Intersection Observer
		const observer = new IntersectionObserver(handleIntersect, {
			threshold: 0.1,
			rootMargin: '50px'
		});

		// Observe semua section yang punya data-section
		document.querySelectorAll('[data-section]').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			clearInterval(interval);
			observer.disconnect();
		};
	});

	// Parallax scroll offset (kalau kamu pakai nanti)
	$: parallaxOffset = scrollY * 0.5;
</script>

<svelte:window bind:scrollY bind:innerWidth />

<svelte:head>
	<style>
		/* Prevent horizontal scroll */
		body,
		html {
			overflow-x: hidden;
			max-width: 100vw;
		}

		* {
			box-sizing: border-box;
		}

		/* Enhanced Animations */
		@keyframes fadeInUp {
			from {
				opacity: 0;
				transform: translateY(40px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes slideInLeft {
			from {
				opacity: 0;
				transform: translateX(-50px);
			}
			to {
				opacity: 1;
				transform: translateX(0);
			}
		}

		@keyframes slideInRight {
			from {
				opacity: 0;
				transform: translateX(50px);
			}
			to {
				opacity: 1;
				transform: translateX(0);
			}
		}

		@keyframes scaleIn {
			from {
				opacity: 0;
				transform: scale(0.8);
			}
			to {
				opacity: 1;
				transform: scale(1);
			}
		}

		@keyframes bounceIn {
			0% {
				opacity: 0;
				transform: scale(0.3) rotate(-10deg);
			}
			50% {
				opacity: 1;
				transform: scale(1.05) rotate(2deg);
			}
			70% {
				transform: scale(0.9) rotate(-1deg);
			}
			100% {
				opacity: 1;
				transform: scale(1) rotate(0deg);
			}
		}

		@keyframes pulse {
			0%,
			100% {
				transform: scale(1);
			}
			50% {
				transform: scale(1.05);
			}
		}

		@keyframes float {
			0%,
			100% {
				transform: translateY(0px);
			}
			50% {
				transform: translateY(-10px);
			}
		}

		@keyframes shimmer {
			0% {
				background-position: -200% 0;
			}
			100% {
				background-position: 200% 0;
			}
		}

		@keyframes rotateIn {
			from {
				opacity: 0;
				transform: rotate(-180deg) scale(0.5);
			}
			to {
				opacity: 1;
				transform: rotate(0deg) scale(1);
			}
		}

		.animate-fadeInUp {
			animation: fadeInUp 0.8s ease-out forwards;
		}

		.animate-slideInLeft {
			animation: slideInLeft 0.8s ease-out forwards;
		}

		.animate-slideInRight {
			animation: slideInRight 0.8s ease-out forwards;
		}

		.animate-scaleIn {
			animation: scaleIn 0.6s ease-out forwards;
		}

		.animate-bounceIn {
			animation: bounceIn 0.8s ease-out forwards;
		}

		.animate-pulse-custom {
			animation: pulse 2s infinite;
		}

		.animate-float {
			animation: float 4s ease-in-out infinite;
		}

		.animate-shimmer {
			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
			background-size: 200% 100%;
			animation: shimmer 2s infinite;
		}

		.animate-rotateIn {
			animation: rotateIn 0.8s ease-out forwards;
		}

		/* Initial states for animations */
		.animate-on-scroll {
			opacity: 0;
		}

		.animate-on-scroll.animate-fadeInUp {
			opacity: 1;
		}

		.animate-on-scroll.animate-slideInLeft {
			opacity: 1;
		}

		.animate-on-scroll.animate-slideInRight {
			opacity: 1;
		}

		.animate-on-scroll.animate-scaleIn {
			opacity: 1;
		}

		.animate-on-scroll.animate-bounceIn {
			opacity: 1;
		}

		.animate-on-scroll.animate-rotateIn {
			opacity: 1;
		}

		/* Gradient text animation */
		@keyframes gradient {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}

		.animate-gradient {
			background: linear-gradient(-45deg, #10b981, #06b6d4, #8b5cf6, #f59e0b);
			background-size: 400% 400%;
			animation: gradient 3s ease infinite;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	</style>
</svelte:head>

<main class="overflow-hidden pt-16">
	<!-- Header Slider with Enhanced Parallax -->

	<!-- Enhanced responsive slider section -->
	<section id="home" class="relative h-[85vh] min-h-[500px] overflow-hidden sm:min-h-[600px]">
		{#each slides as slide, i}
			<div
				class="absolute inset-0 transition-all duration-1000 {current === i
					? 'opacity-100'
					: 'opacity-0'}"
				style="transform: translateY({current === i ? parallaxOffset : 0}px)"
			>
				<!-- Gambar responsif untuk slider -->
				<img
					src={slide}
					alt="Slide {i + 1}"
					class="h-full w-full scale-100
				   object-cover object-center
				   transition-transform duration-700
				   sm:scale-110 sm:object-center"
				/>
			</div>
		{/each}

		<!-- Overlay gradasi animasi -->
		<div class="absolute inset-0">
			<div
				class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-red-900/40 to-slate-900/80"
			></div>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
			></div>
		</div>

		<!-- Konten utama slider -->
		<div class="absolute inset-0 flex items-center justify-center px-4">
			<div class="animate-fadeInUp max-w-5xl text-center">
				<div class="mb-8">
					<!-- Judul utama -->
					<h1
						class="mt-22 mb-6 text-3xl leading-tight font-black text-white sm:text-5xl lg:text-7xl"
					>
						Best Sports<br />
						<span
							class="animate-gradient bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent"
						>
							Field Solutions
						</span>
					</h1>
					<!-- Deskripsi singkat -->
					<p
						class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl"
					>
						Bring your dream sports field to life with international quality and trusted service.
					</p>
				</div>

				<!-- Tombol aksi -->
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="#layanan"
						class="group relative transform overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/25"
					>
						<span class="relative z-10">🏆 View Services</span>
						<div
							class="absolute inset-0 bg-gradient-to-r from-red-700 to-rose-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</a>
					<a
						href="#kontak"
						class="group transform rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-red-600"
					>
						💬 Free Consultation
					</a>
				</div>

				<!-- Indikator kepercayaan -->
				<div class="mt-8 mb-20 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
					<div class="flex items-center space-x-2">
						<div class="h-2 w-2 rounded-full bg-red-400"></div>
						<span>10+ Years Experience</span>
					</div>
					<div class="flex items-center space-x-2">
						<div class="h-2 w-2 rounded-full bg-rose-400"></div>
						<span>500+ Projects Completed</span>
					</div>
					<div class="flex items-center space-x-2">
						<div class="h-2 w-2 rounded-full bg-pink-400"></div>
						<span>5-Year Warranty</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Slider Indicators -->
		<div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-3">
			{#each slides as _, i}
				<button
					class="group relative h-3 w-8 rounded-full transition-all duration-300 {current === i
						? 'bg-white'
						: 'bg-white/40 hover:bg-white/60'}"
					on:click={() => (current = i)}
				>
					{#if current === i}
						<div
							class="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-rose-400 opacity-80"
						></div>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform animate-bounce">
			<div class="flex flex-col items-center text-white/60">
				<span class="mb-2 text-xs">Scroll</span>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					></path>
				</svg>
			</div>
		</div>
	</section>

	<!-- Enhanced Stats Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 py-16"
		data-section="stats"
	>
		<div
			class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
		></div>

		<div class="relative mx-auto max-w-7xl px-4">
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
				{#each stats as stat, i}
					<div
						class="animate-on-scroll transform text-center transition-all duration-300 hover:scale-110"
						class:animate-bounceIn={animatedSections['stats']}
						style="animation-delay: {i * 0.2}s"
					>
						<div class="group relative">
							<div
								class="animate-pulse-custom mb-3 text-2xl font-black text-red-600 sm:text-3xl lg:text-4xl"
							>
								{stat.number}
							</div>
							<div class="text-sm font-semibold text-gray-700 sm:text-base">{stat.label}</div>
							<div
								class="absolute -inset-4 -z-10 rounded-xl bg-gradient-to-r from-red-100 to-rose-100 opacity-0 transition-all duration-300 group-hover:opacity-100"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Enhanced About Section -->
	<section id="about" class="overflow-hidden bg-white py-20" data-section="about">
		<div class="mx-auto max-w-6xl px-4">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div
					class="animate-on-scroll order-2 lg:order-1"
					class:animate-slideInLeft={animatedSections['about']}
				>
					<div class="mb-6">
						<span
							class="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800"
						>
							🏢 Tentang Kami
						</span>
						<h2 class="text-3xl leading-tight font-black text-gray-800 sm:text-4xl lg:text-5xl">
							Membangun <span class="text-red-600">Impian</span><br />
							Lapangan Anda
						</h2>
					</div>

					<div class="space-y-6 leading-relaxed text-gray-600">
						<p class="text-lg">
							AMFlooring adalah perusahaan spesialis pembangunan dan renovasi lapangan olahraga
							seperti futsal, basket, badminton, dan lainnya. Kami telah berpengalaman lebih dari 10
							tahun dan dipercaya oleh banyak klien di seluruh Indonesia.
						</p>
						<p>
							Dengan komitmen terhadap kualitas dan inovasi, kami menggunakan teknologi terdepan dan
							material berkualitas tinggi untuk memastikan setiap proyek memenuhi standar
							internasional.
						</p>
					</div>

					<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
						{#each [{ icon: '🏆', title: 'Kualitas Terjamin', desc: 'Standar internasional' }, { icon: '👥', title: 'Tim Profesional', desc: 'Berpengalaman 10+ tahun' }, { icon: '💰', title: 'Harga Kompetitif', desc: 'Sesuai budget Anda' }] as feature, i}
							<div
								class="group rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 p-4 transition-all duration-300 hover:from-red-100 hover:to-rose-100 hover:shadow-lg"
								style="animation-delay: {i * 0.1}s"
							>
								<div class="mb-2 text-2xl transition-transform duration-300 group-hover:scale-110">
									{feature.icon}
								</div>
								<h4 class="mb-1 font-bold text-gray-800">{feature.title}</h4>
								<p class="text-sm text-gray-600">{feature.desc}</p>
							</div>
						{/each}
					</div>
				</div>

				<div
					class="animate-on-scroll order-1 lg:order-2"
					class:animate-fadeInUp={animatedSections['about']}
				>
					<div class="group relative">
						<div
							class="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-400 to-rose-400 opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-30"
						></div>
						<img
							src="/images/foto-owner.png"
							alt="Tentang AMFlooring"
							class="relative h-auto w-full transform rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-red-500/25"
						/>

						<!-- Floating elements -->
						<div
							class="animate-float absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-80"
						></div>
						<div
							class="animate-float absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 opacity-30"
							style="animation-delay: 1s"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Enhanced Services Section -->
	<section
		id="layanan"
		class="overflow-hidden bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 py-20"
		data-section="services"
	>
		<div class="mx-auto max-w-7xl px-4">
			<div
				class="animate-on-scroll mb-16 text-center"
				class:animate-fadeInUp={animatedSections['services']}
			>
				<span
					class="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800"
				>
					⚽ Layanan Kami
				</span>
				<h2 class="mb-6 text-3xl leading-tight font-black text-gray-800 sm:text-4xl lg:text-5xl">
					Berbagai Jenis <span class="text-emerald-600">Lapangan</span><br />
					<span class="text-2xl text-gray-600 sm:text-3xl lg:text-4xl">untuk Kebutuhan Anda</span>
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-gray-600">
					Kami menyediakan berbagai solusi lapangan olahraga dengan standar internasional
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
				{#each [{ name: 'Lapangan Futsal', image: '/images/lapangan-futsal.webp', color: 'emerald', features: ['Rumput sintetis premium', 'Sistem drainase optimal', 'Pencahayaan LED'], link: '/layanan/futsal', icon: '⚽' }, { name: 'Lapangan Basket', image: '/images/lapangan-basket.jpg', color: 'amber', features: ['Lantai parket profesional', 'Ring standar FIBA', 'Marking presisi'], link: '/layanan/basket', icon: '🏀' }, { name: 'Lapangan Badminton', image: '/images/lapangan-badminton.png', color: 'rose', features: ['Lantai karet anti-slip', 'Net berkualitas tinggi', 'Ventilasi modern'], link: '/layanan/badminton', icon: '🏸' }, { name: 'Lapangan Mini Soccer', image: '/images/lapangan-minisoccer.jpg', color: 'indigo', features: ['Rumput sintetis FIFA Approved', 'Area aman untuk anak', 'Penerangan LED'], link: '/layanan/minisoccer', icon: '⚽' }] as service, i}
					<div
						class="group animate-on-scroll flex transform cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl active:scale-95 active:rotate-0"
						class:animate-scaleIn={animatedSections['services']}
						style="animation-delay: {i * 0.2}s"
					>
						<div class="relative overflow-hidden">
							<img
								src={service.image}
								alt={service.name}
								class="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-52"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
							<div
								class="absolute top-4 left-4 text-3xl transition-transform duration-300 group-hover:scale-125"
							>
								{service.icon}
							</div>
						</div>

						<div class="flex flex-1 flex-col p-6">
							<h3
								class="mb-3 text-xl font-bold text-gray-800 group-hover:text-{service.color}-600 transition-colors duration-300"
							>
								{service.name}
							</h3>

							<ul class="mb-6 space-y-2">
								{#each service.features as feature}
									<li class="flex items-center text-sm text-gray-600">
										<div class="mr-3 h-1.5 w-1.5 rounded-full bg-{service.color}-500"></div>
										{feature}
									</li>
								{/each}
							</ul>

							<a
								href={service.link}
								class="group/btn relative mt-auto self-end overflow-hidden rounded-xl
							{service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' : ''}
							{service.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-amber-700' : ''}
							{service.color === 'rose' ? 'bg-gradient-to-br from-rose-500 to-rose-700' : ''}
							{service.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-indigo-700' : ''}
							px-6 py-3 font-bold text-white
							transition-all duration-300
							hover:shadow-lg
							{service.color === 'emerald' ? 'hover:shadow-emerald-500/25' : ''}
							{service.color === 'amber' ? 'hover:shadow-amber-500/25' : ''}
							{service.color === 'rose' ? 'hover:shadow-rose-500/25' : ''}
							{service.color === 'indigo' ? 'hover:shadow-indigo-500/25' : ''}
							transform hover:-translate-y-0.5
							hover:scale-105 active:scale-95"
							>
								<span
									class="relative z-10 transition-transform duration-200 group-hover/btn:scale-105"
									>Lihat Detail</span
								>
								<div
									class="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100
								{service.color === 'emerald' ? 'bg-gradient-to-tl from-emerald-600 to-emerald-400' : ''}
								{service.color === 'amber' ? 'bg-gradient-to-tl from-amber-600 to-amber-400' : ''}
								{service.color === 'rose' ? 'bg-gradient-to-tl from-rose-600 to-rose-400' : ''}
								{service.color === 'indigo' ? 'bg-gradient-to-tl from-indigo-600 to-indigo-400' : ''}"
								></div>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Enhanced Contact Section -->
	<section
		id="kontak"
		class="overflow-hidden bg-gradient-to-br from-gray-50 via-red-50 to-rose-50 py-20"
		data-section="contact"
	>
		<div class="mx-auto max-w-7xl px-4">
			<div
				class="animate-on-scroll mb-16 text-center"
				class:animate-fadeInUp={animatedSections['contact']}
			>
				<span
					class="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800"
				>
					📞 Hubungi Kami
				</span>
				<h2 class="mb-6 text-3xl font-black text-gray-800 sm:text-4xl lg:text-5xl">
					Siap Mewujudkan <span class="text-red-600">Impian</span><br />
					<span class="text-2xl text-gray-600 sm:text-3xl lg:text-4xl">Lapangan Anda?</span>
				</h2>
				<p class="mb-4 text-lg text-gray-600">Konsultasi gratis dengan tim ahli kami</p>
				<div
					class="inline-flex items-center space-x-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-600"
				>
					<div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
					<span>📞 Jam Operasional: Senin - Sabtu (08:00 - 17:00)</span>
				</div>
			</div>

			<!-- Enhanced Contact Grid -->
			<div class="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each contactInfo as contact, i}
					<a
						href={contact.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group animate-on-scroll transform rounded-xl border border-red-100 bg-gradient-to-br from-white to-red-50 p-4 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
						class:animate-bounceIn={animatedSections['contact']}
						style="animation-delay: {i * 0.1}s"
					>
						<div class="mb-3 flex justify-center">
							<div
								class="animate-float flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-rose-100 text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-red-200 group-hover:to-rose-200"
							>
								{contact.icon}
							</div>
						</div>
						<div class="text-center">
							<h3
								class="mb-1 text-base font-bold text-gray-800 transition-colors duration-300 group-hover:text-red-600"
							>
								{contact.title}
							</h3>
							<p
								class="mb-1 text-xs font-medium break-words text-gray-700 transition-colors duration-300 group-hover:text-gray-900"
							>
								{contact.value}
							</p>
							<p
								class="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-600"
							>
								{contact.desc}
							</p>
						</div>
						<div class="mt-3 flex justify-center">
							<div
								class="h-1 w-0 rounded-full bg-gradient-to-r from-red-500 to-rose-500 transition-all duration-500 group-hover:w-12"
							></div>
						</div>
					</a>
				{/each}
			</div>

			<!-- Enhanced Quick Actions -->
			<div
				class="animate-on-scroll text-center"
				class:animate-fadeInUp={animatedSections['contact']}
			>
				<h3 class="mb-8 text-2xl font-bold text-gray-800">💬 Aksi Cepat</h3>
				<div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="https://wa.me/6282xxxxxxxx?text=Halo%20AMFlooring,%20saya%20tertarik%20untuk%20konsultasi%20lapangan%20olahraga"
						target="_blank"
						rel="noopener noreferrer"
						class="group relative inline-flex transform items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/25"
					>
						<span class="text-xl">💬</span>
						<span class="relative z-10">Chat WhatsApp</span>
						<div
							class="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</a>
					<a
						href="tel:+6282xxxxxxxx"
						class="group inline-flex transform items-center justify-center gap-3 rounded-2xl border-2 border-red-600 bg-white px-8 py-4 font-bold text-red-600 transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/25"
					>
						<span class="text-xl">📞</span>
						<span>Telepon Langsung</span>
					</a>
				</div>

				<!-- Additional CTA Section -->
				<div
					class="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 p-6 text-white"
				>
					<h4 class="mb-2 text-xl font-bold">🎁 Promo Spesial Bulan Ini!</h4>
					<p class="mb-4">Dapatkan konsultasi gratis + diskon 10% untuk proyek pertama Anda</p>
					<div class="flex flex-col justify-center gap-3 sm:flex-row">
						<span class="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm"
							>⏰ Terbatas sampai akhir bulan</span
						>
						<span class="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm"
							>✅ Garansi 5 tahun</span
						>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- testimonials section with navigation -->
	<section class="overflow-hidden bg-white py-20" data-section="testimonials">
		<div class="mx-auto max-w-7xl px-4">
			<div
				class="animate-on-scroll mb-16 text-center"
				class:animate-fadeInUp={animatedSections['testimonials']}
			>
				<span
					class="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800"
				>
					💬 Testimoni
				</span>
				<h2 class="mb-4 text-3xl font-black text-gray-800 sm:text-4xl lg:text-5xl">
					Apa Kata <span class="text-red-600">Klien Kami</span>
				</h2>
				<p class="mb-6 text-lg text-gray-600">Kepuasan klien adalah prioritas utama kami</p>

				<!-- Navigation Button to Full Testimonials Page -->
				<a
					href="/testimonials"
					class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-rose-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/25"
				>
					<span>Lihat Semua Testimoni & Projek</span>
					<svg
						class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each testimonials as testimonial, i}
					<div
						class="group animate-on-scroll transform rounded-2xl bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10"
						class:animate-fadeInUp={animatedSections['testimonials']}
						style="animation-delay: {i * 0.2}s"
					>
						<div class="mb-4 flex">
							{#each Array(testimonial.rating) as _, starIndex}
								<span
									class="transform text-xl text-amber-400 transition-transform duration-300 hover:scale-125"
									style="animation-delay: {starIndex * 0.1}s"
								>
									⭐
								</span>
							{/each}
						</div>
						<blockquote class="relative mb-6 leading-relaxed text-gray-700 italic">
							<span class="absolute -top-2 -left-2 text-4xl text-red-200">"</span>
							<span class="relative z-10">{testimonial.text}</span>
							<span class="absolute -right-2 -bottom-4 text-4xl text-red-200">"</span>
						</blockquote>
						<div class="flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 font-bold text-white shadow-lg transition-shadow duration-300 group-hover:shadow-red-500/25"
							>
								{testimonial.name[0]}
							</div>
							<div>
								<h4 class="font-bold text-gray-800">{testimonial.name}</h4>
								<p class="text-sm text-gray-600">{testimonial.role}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Enhanced Vision & Mission -->
	<section
		id="visi"
		class="overflow-hidden bg-gradient-to-br from-gray-50 via-red-50 to-rose-50 py-20"
		data-section="vision"
	>
		<div class="mx-auto max-w-7xl px-4">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<!-- Enhanced Image Grid -->
				<div
					class="animate-on-scroll order-2 lg:order-1"
					class:animate-slideInLeft={animatedSections['vision']}
				>
					<div class="grid grid-cols-2 gap-4">
						{#each ['foto-1.png', 'foto-2.png', 'foto-3.png', 'foto-4.png'] as img, i}
							<div
								class="group relative overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
								class:rounded-tl-[2rem]={i === 0}
								class:rounded-br-[2rem]={i === 1}
								class:rounded-tr-[3rem]={i === 2}
								class:rounded-bl-[3rem]={i === 3}
								style="animation-delay: {i * 0.2}s"
							>
								<img
									src={`/images/${img}`}
									alt="Foto Visi Misi"
									class="h-auto w-full transition-transform duration-700 group-hover:scale-110"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
								<div
									class="absolute -right-2 -bottom-2 h-8 w-8 bg-gradient-to-br from-red-400 to-rose-500 opacity-30 transition-opacity duration-300 group-hover:opacity-60"
									style="border-radius: 1rem 0.25rem 1rem 0.25rem;"
								></div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Enhanced Vision & Mission Content -->
				<div
					class="animate-on-scroll order-1 space-y-12 lg:order-2"
					class:animate-slideInRight={animatedSections['vision']}
				>
					<!-- Vision -->
					<div class="group">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-xl text-white"
							>
								🎯
							</div>
							<h2 class="text-3xl font-black text-gray-800 sm:text-4xl">
								<span class="text-red-600">Visi</span> Kami
							</h2>
						</div>
						<div
							class="relative rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 p-6 transition-all duration-300 group-hover:from-red-100 group-hover:to-rose-100"
						>
							<p class="text-lg leading-relaxed text-gray-700">
								Menjadi perusahaan terdepan dalam pembangunan dan renovasi lapangan olahraga di
								Indonesia yang inovatif, berkualitas tinggi, dan terpercaya.
							</p>
							<div
								class="absolute -top-2 -right-2 h-4 w-4 animate-pulse rounded-full bg-red-400 opacity-60"
							></div>
						</div>
					</div>

					<!-- Mission -->
					<div class="group">
						<div class="mb-6 flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-xl text-white"
							>
								🚀
							</div>
							<h2 class="text-3xl font-black text-gray-800 sm:text-4xl">
								<span class="text-red-600">Misi</span> Kami
							</h2>
						</div>
						<div class="space-y-4">
							{#each ['Menggunakan material berkualitas tinggi yang ramah lingkungan', 'Memberikan solusi desain lapangan yang inovatif dan sesuai kebutuhan', 'Menjaga kepercayaan dan kepuasan pelanggan sebagai prioritas utama', 'Mengembangkan teknologi terdepan dalam konstruksi lapangan olahraga'] as mission, index}
								<div
									class="group/item flex items-start space-x-4 rounded-xl bg-white/50 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
								>
									<div
										class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-rose-600 text-sm font-bold text-white transition-transform duration-300 group-hover/item:scale-110"
									>
										{index + 1}
									</div>
									<p
										class="leading-relaxed text-gray-700 transition-colors duration-300 group-hover/item:text-gray-900"
									>
										{mission}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Enhanced Contact Section - Updated to Red Theme -->
	<section
		id="kontak"
		class="overflow-hidden bg-gradient-to-br from-white via-red-50 to-rose-50 py-20"
		data-section="contact"
	>
		<div class="mx-auto max-w-7xl px-4">
			<div
				class="animate-on-scroll mb-16 text-center"
				class:animate-fadeInUp={animatedSections['contact']}
			>
				<span
					class="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800"
				>
					📞 Hubungi Kami
				</span>
				<h2 class="mb-6 text-3xl font-black text-gray-800 sm:text-4xl lg:text-5xl">
					Siap Mewujudkan <span class="text-red-600">Impian</span><br />
					<span class="text-2xl text-gray-600 sm:text-3xl lg:text-4xl">Lapangan Anda?</span>
				</h2>
				<p class="mb-4 text-lg text-gray-600">Konsultasi gratis dengan tim ahli kami</p>
				<div
					class="inline-flex items-center space-x-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-600"
				>
					<div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
					<span>📞 Jam Operasional: Senin - Sabtu (08:00 - 17:00)</span>
				</div>
			</div>

			<!-- Enhanced Contact Grid - Updated to Red Theme -->
			<div class="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each contactInfo as contact, i}
					<a
						href={contact.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group animate-on-scroll transform rounded-xl border border-red-100 bg-gradient-to-br from-white to-red-50 p-4 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
						class:animate-bounceIn={animatedSections['contact']}
						style="animation-delay: {i * 0.1}s"
					>
						<div class="mb-3 flex justify-center">
							<div
								class="animate-float flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-100 to-rose-100 text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:from-red-200 group-hover:to-rose-200"
							>
								{contact.icon}
							</div>
						</div>
						<div class="text-center">
							<h3
								class="mb-1 text-base font-bold text-gray-800 transition-colors duration-300 group-hover:text-red-600"
							>
								{contact.title}
							</h3>
							<p
								class="mb-1 text-xs font-medium break-words text-gray-700 transition-colors duration-300 group-hover:text-gray-900"
							>
								{contact.value}
							</p>
							<p
								class="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-600"
							>
								{contact.desc}
							</p>
						</div>
						<div class="mt-3 flex justify-center">
							<div
								class="h-1 w-0 rounded-full bg-gradient-to-r from-red-500 to-rose-500 transition-all duration-500 group-hover:w-12"
							></div>
						</div>
					</a>
				{/each}
			</div>

			<!-- Enhanced Quick Actions - Updated to Red Theme -->
			<div
				class="animate-on-scroll text-center"
				class:animate-fadeInUp={animatedSections['contact']}
			>
				<h3 class="mb-8 text-2xl font-bold text-gray-800">💬 Aksi Cepat</h3>
				<div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="https://wa.me/6282xxxxxxxx?text=Halo%20AMFlooring,%20saya%20tertarik%20untuk%20konsultasi%20lapangan%20olahraga"
						target="_blank"
						rel="noopener noreferrer"
						class="group relative inline-flex transform items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/25"
					>
						<span class="text-xl">💬</span>
						<span class="relative z-10">Chat WhatsApp</span>
						<div
							class="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</a>
					<a
						href="tel:+6282xxxxxxxx"
						class="group inline-flex transform items-center justify-center gap-3 rounded-2xl border-2 border-red-600 bg-white px-8 py-4 font-bold text-red-600 transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/25"
					>
						<span class="text-xl">📞</span>
						<span>Telepon Langsung</span>
					</a>
				</div>

				<!-- Additional CTA Section - Updated to Red Theme -->
				<div
					class="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 p-6 text-white"
				>
					<h4 class="mb-2 text-xl font-bold">🎁 Promo Spesial Bulan Ini!</h4>
					<p class="mb-4">Dapatkan konsultasi gratis + diskon 10% untuk proyek pertama Anda</p>
					<div class="flex flex-col justify-center gap-3 sm:flex-row">
						<span class="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm"
							>⏰ Terbatas sampai akhir bulan</span
						>
						<span class="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm"
							>✅ Garansi 5 tahun</span
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Enhanced Footer - Updated to Red Theme -->
<footer
	class="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute inset-0 opacity-5"
			style="background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 py-16">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
			<!-- Enhanced Company Info - Updated to Red Theme -->
			<div class="lg:col-span-2">
				<div class="mb-6 flex items-center space-x-3">
					<div
						class="group flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-xl transition-transform duration-300 hover:scale-110"
					>
						<img
							src="/images/logo-amflooring.jpg"
							alt="Logo"
							class="h-full w-full rounded-2xl object-cover"
						/>
					</div>
					<h3
						class="animate-gradient bg-gradient-to-r from-red-600 via-rose-400 to-pink-400 bg-clip-text text-3xl font-black text-transparent"
					>
						AMFlooring
					</h3>
				</div>
				<p class="mb-6 max-w-md text-lg leading-relaxed text-gray-300">
					Sports field construction and renovation specialists with over 10 years of experience.
					Make your dream field come true with us.
				</p>

				<!-- Enhanced Social Media with Red Theme -->
				<div class="mb-6">
					<h4 class="mb-4 text-sm font-semibold tracking-wide text-red-400 uppercase">Follow Us</h4>
					<div class="flex flex-wrap gap-3">
						<!-- Instagram -->
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							class="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 hover:shadow-lg hover:shadow-red-500/25"
						>
							<svg class="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
						</a>

						<!-- Facebook -->
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							class="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-red-600 hover:to-rose-600 hover:shadow-lg hover:shadow-red-500/25"
						>
							<svg class="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
								<path
									d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
								/>
							</svg>
						</a>

						<!-- YouTube -->
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
							class="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-red-600 hover:to-rose-600 hover:shadow-lg hover:shadow-red-500/25"
						>
							<svg class="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
								<path
									d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
								/>
							</svg>
						</a>

						<!-- Twitter/X -->
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							class="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-black hover:shadow-lg hover:shadow-gray-500/25"
						>
							<svg class="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
								<path
									d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
								/>
							</svg>
						</a>

						<!-- Threads -->
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Threads"
							class="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 hover:shadow-lg hover:shadow-red-500/25"
						>
							<svg class="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
								<path
									d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.8-.365-.467-.835-.8-1.442-.992-.355-.112-.742-.17-1.152-.17-.35 0-.656.05-.918.152-.262.101-.498.249-.708.444-.42.39-.748.973-.925 1.64l-1.95-.484c.264-1.004.694-1.86 1.291-2.568.598-.708 1.355-1.26 2.270-1.657.915-.397 1.942-.595 3.08-.595.579 0 1.124.044 1.638.133.514.089.99.224 1.431.405 1.04.425 1.916 1.1 2.628 2.024.712.925 1.067 2.047 1.067 3.368v.024c.02 2.12-.88 3.854-2.256 5.178C17.663 23.35 15.492 24 12.199 24h-.013z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Quick Links - Updated to Red Theme -->
			<div>
				<h4 class="mb-6 text-lg font-bold text-red-400">🔗 Quick Links</h4>
				<ul class="space-y-3">
					{#each [{ name: 'Home', href: '#home', icon: '🏠' }, { name: 'About Us', href: '#about', icon: '🏢' }, { name: 'Services', href: '#layanan', icon: '⚽' }, { name: 'Vision & Mission', href: '#visi', icon: '🎯' }, { name: 'Contact', href: '#kontak', icon: '📞' }] as link}
						<li>
							<a
								href={link.href}
								class="group inline-flex items-center space-x-2 text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-red-400"
							>
								<span class="text-sm">{link.icon}</span>
								<span>{link.name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services - Updated to Red Theme -->
			<div>
				<h4 class="mb-6 text-lg font-bold text-red-400">⚽ Our Services</h4>
				<ul class="space-y-3">
					{#each [{ name: 'Futsal Court', icon: '⚽' }, { name: 'Basketball Court', icon: '🏀' }, { name: 'Badminton Court', icon: '🏸' }, { name: 'Tennis Court', icon: '🎾' }, { name: 'Volleyball Court', icon: '🏐' }] as service}
						<li>
							<a
								href="#layanan"
								class="group inline-flex items-center space-x-2 text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-red-400"
							>
								<span class="text-sm">{service.icon}</span>
								<span>{service.name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Enhanced Contact Info Footer - Updated to Red Theme -->
		<div class="mt-12 border-t border-slate-700 pt-8">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each [{ icon: '📍', label: 'Address', value: 'Jl. Olahraga No. 123, Medan', color: 'red' }, { icon: '📞', label: 'Phone', value: '+62 821-xxxx-xxxx', color: 'rose' }, { icon: '✉️', label: 'Email', value: 'info@amflooring.com', color: 'pink' }] as contact}
					<div
						class="group flex items-center space-x-4 rounded-xl bg-slate-700/50 p-4 transition-all duration-300 hover:bg-slate-700"
					>
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-{contact.color}-500 to-{contact.color}-600 transition-transform duration-300 group-hover:scale-110"
						>
							{contact.icon}
						</div>
						<div>
							<p class="text-xs tracking-wide text-gray-400 uppercase">{contact.label}</p>
							<p class="font-medium text-white">{contact.value}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Enhanced Copyright -->
		<div class="mt-8 border-t border-slate-700 pt-8">
			<div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
				<div class="text-center sm:text-left">
					<p class="text-sm text-gray-400">&copy; 2025 AMFlooring. All rights reserved.</p>
					<p class="text-xs text-gray-500">Dibuat dengan ❤️ untuk masa depan olahraga Indonesia</p>
				</div>
				<div class="flex items-center space-x-4 text-xs text-gray-500">
					<a href="#" class="transition-colors duration-300 hover:text-red-400">Privacy Policy</a>
					<span>•</span>
					<a href="#" class="transition-colors duration-300 hover:text-red-400"
						>Terms & Conditions</a
					>
				</div>
			</div>
		</div>
	</div>
</footer>
