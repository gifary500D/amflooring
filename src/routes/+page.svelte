<script lang="ts">
	import { slides, testimonials, stats, contactInfo } from '$lib/data/homeData';
	import { nextSlide } from '$lib/utils/slider';

	let current = 0;
	let isMenuOpen = false;

	function next() {
		current = nextSlide(current, slides.length);
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	setInterval(next, 5000);
</script>

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

		@keyframes slideInLeft {
			from {
				opacity: 0;
				transform: translateX(-30px);
			}
			to {
				opacity: 1;
				transform: translateX(0);
			}
		}

		@keyframes pulse {
			0%,
			100% {
				transform: scale(1);
			}
			50% {
				transform: scale(1.02);
			}
		}

		@keyframes float {
			0%,
			100% {
				transform: translateY(0px);
			}
			50% {
				transform: translateY(-5px);
			}
		}

		.animate-fadeInUp {
			animation: fadeInUp 0.8s ease-out;
		}

		.animate-slideInLeft {
			animation: slideInLeft 0.8s ease-out;
		}

		.animate-pulse-custom {
			animation: pulse 2s infinite;
		}

		.animate-float {
			animation: float 3s ease-in-out infinite;
		}
	</style>
</svelte:head>

<main class="overflow-hidden pt-16">
	<!-- Header Slider -->
	<section id="home" class="relative h-[500px] overflow-hidden">
		{#each slides as slide, i}
			<img
				src={slide}
				alt="Slide"
				class="absolute inset-0 h-full w-full transform object-cover transition-all duration-1000 {current ===
				i
					? 'scale-100 opacity-100'
					: 'scale-110 opacity-0'}"
			/>
		{/each}
		<div
			class="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-900/70"
		></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="animate-fadeInUp max-w-6xl px-4 text-center">
				<h2 class="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
					Solusi Lapangan<br />
					<span class="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
						Olahraga Terbaik
					</span>
				</h2>
				<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-200">
					Wujudkan lapangan olahraga impian Anda dengan kualitas internasional dan pelayanan
					terpercaya
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="#layanan"
						class="transform rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-emerald-700 hover:to-teal-700"
					>
						Lihat Layanan
					</a>
					<a
						href="#kontak"
						class="transform rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-emerald-600"
					>
						Konsultasi Gratis
					</a>
				</div>
			</div>
		</div>

		<!-- Slider Indicators -->
		<div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 transform space-x-2">
			{#each slides as _, i}
				<button
					class="h-3 w-3 rounded-full transition-all duration-300 {current === i
						? 'bg-white'
						: 'bg-white/50'}"
					on:click={() => (current = i)}
				></button>
			{/each}
		</div>
	</section>

	<!-- Stats Section -->
	<section class="overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
		<div class="mx-auto max-w-7xl px-4">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
				{#each stats as stat, i}
					<div class="animate-fadeInUp text-center" style="animation-delay: {i * 0.1}s">
						<div class="animate-pulse-custom mb-2 text-3xl font-bold text-emerald-600 md:text-4xl">
							{stat.number}
						</div>
						<div class="font-medium text-gray-600">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Tentang Kami -->
	<section id="about" class="overflow-hidden bg-white py-20">
		<div class="mx-auto max-w-6xl px-4">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div class="animate-slideInLeft">
					<h2 class="mb-6 text-4xl font-bold text-gray-800">
						Tentang <span class="text-emerald-600">AMFlooring</span>
					</h2>
					<p class="mb-6 text-lg leading-relaxed text-gray-600">
						AMFlooring adalah perusahaan spesialis pembangunan dan renovasi lapangan olahraga
						seperti futsal, basket, badminton, dan lainnya. Kami telah berpengalaman lebih dari 10
						tahun dan dipercaya oleh banyak klien di seluruh Indonesia.
					</p>
					<p class="mb-8 leading-relaxed text-gray-600">
						Dengan komitmen terhadap kualitas dan inovasi, kami menggunakan teknologi terdepan dan
						material berkualitas tinggi untuk memastikan setiap proyek memenuhi standar
						internasional.
					</p>
					<div class="flex flex-wrap gap-4">
						<div class="flex items-center space-x-2">
							<div class="h-3 w-3 rounded-full bg-emerald-500"></div>
							<span class="text-gray-700">Kualitas Terjamin</span>
						</div>
						<div class="flex items-center space-x-2">
							<div class="h-3 w-3 rounded-full bg-emerald-500"></div>
							<span class="text-gray-700">Tim Profesional</span>
						</div>
						<div class="flex items-center space-x-2">
							<div class="h-3 w-3 rounded-full bg-emerald-500"></div>
							<span class="text-gray-700">Harga Kompetitif</span>
						</div>
					</div>
				</div>
				<div class="animate-fadeInUp">
					<div class="relative overflow-hidden rounded-3xl">
						<img
							src="/images/foto-owner.png"
							alt="Tentang AMFlooring"
							class="h-auto w-full transform rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
						/>
						<div
							class="absolute -right-4 -bottom-4 hidden h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 opacity-20 md:block"
						></div>
						<div
							class="absolute -top-4 -left-4 hidden h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-30 md:block"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Layanan -->
	<section id="layanan" class="overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
		<div class="mx-auto max-w-7xl px-4">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-800">
					Layanan <span class="text-emerald-600">Kami</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-gray-600">
					Kami menyediakan berbagai solusi lapangan olahraga dengan standar internasional
				</p>
			</div>

			<!-- Grid dengan 2 kolom di sm, 3 di md+ -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				<!-- Card Template -->
				<!-- Reuse style dan ubah data sesuai kebutuhan -->

				<!-- Card 1 - Futsal -->
				<div
					class="group transform overflow-hidden rounded-xl bg-white text-sm shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:text-base"
				>
					<div class="relative overflow-hidden rounded-t-xl">
						<img
							src="/images/lapangan-futsal.webp"
							alt="Lapangan Futsal"
							class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] sm:h-48"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>
					<div class="p-5 sm:p-6">
						<h3 class="mb-2 text-xl font-bold text-gray-800 group-hover:text-emerald-600">
							Lapangan Futsal
						</h3>
						<p class="mb-4 text-gray-600">
							Desain dan pembangunan lapangan futsal standar internasional.
						</p>
						<ul class="mb-4 space-y-1 text-sm text-gray-500">
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-emerald-500"></span>Rumput sintetis
								premium
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-emerald-500"></span>Sistem drainase
								optimal
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-emerald-500"></span>Pencahayaan LED
							</li>
						</ul>
						<a
							href="/layanan/futsal"
							class="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 font-semibold text-white transition-all hover:from-emerald-700 hover:to-teal-700"
						>
							Lihat Detail
						</a>
					</div>
				</div>

				<!-- Card 2 - Basket -->
				<div
					class="group transform overflow-hidden rounded-xl bg-white text-sm shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:text-base"
				>
					<div class="relative overflow-hidden rounded-t-xl">
						<img
							src="/images/lapangan-basket.jpg"
							alt="Lapangan Basket"
							class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] sm:h-48"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-amber-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>
					<div class="p-5 sm:p-6">
						<h3 class="mb-2 text-xl font-bold text-gray-800 group-hover:text-amber-600">
							Lapangan Basket
						</h3>
						<p class="mb-4 text-gray-600">Permukaan berkualitas dan sistem pencahayaan terbaik.</p>
						<ul class="mb-4 space-y-1 text-sm text-gray-500">
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-amber-500"></span>Lantai parket
								profesional
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-amber-500"></span>Ring standar FIBA
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-amber-500"></span>Marking presisi
							</li>
						</ul>
						<a
							href="/layanan/basket"
							class="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 font-semibold text-white transition-all hover:from-amber-600 hover:to-orange-600"
						>
							Lihat Detail
						</a>
					</div>
				</div>

				<!-- Card 3 - Badminton -->
				<div
					class="group transform overflow-hidden rounded-xl bg-white text-sm shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:text-base"
				>
					<div class="relative overflow-hidden rounded-t-xl">
						<img
							src="/images/lapangan-badminton.png"
							alt="Lapangan Badminton"
							class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] sm:h-48"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-rose-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>
					<div class="p-5 sm:p-6">
						<h3 class="mb-2 text-xl font-bold text-gray-800 group-hover:text-rose-600">
							Lapangan Badminton
						</h3>
						<p class="mb-4 text-gray-600">Indoor dan outdoor dengan material anti-slip terbaik.</p>
						<ul class="mb-4 space-y-1 text-sm text-gray-500">
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>Lantai karet anti-slip
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>Net berkualitas tinggi
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-rose-500"></span>Ventilasi modern
							</li>
						</ul>
						<a
							href="/layanan/badminton"
							class="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2 font-semibold text-white transition-all hover:from-rose-600 hover:to-pink-600"
						>
							Lihat Detail
						</a>
					</div>
				</div>

				<!-- Card 4 - Mini Soccer -->
				<div
					class="group transform overflow-hidden rounded-xl bg-white text-sm shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:text-base"
				>
					<div class="relative overflow-hidden rounded-t-xl">
						<img
							src="/images/lapangan-minisoccer.jpg"
							alt="Lapangan Mini Soccer"
							class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] sm:h-48"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>
					<div class="p-5 sm:p-6">
						<h3 class="mb-2 text-xl font-bold text-gray-800 group-hover:text-indigo-600">
							Lapangan Mini Soccer
						</h3>
						<p class="mb-4 text-gray-600">
							Ukuran lapangan yang ideal untuk komunitas dan sekolah sepak bola.
						</p>
						<ul class="mb-4 space-y-1 text-sm text-gray-500">
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-indigo-500"></span>Rumput sintetis FIFA
								Approved
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-indigo-500"></span>Area aman untuk anak
							</li>
							<li class="flex items-center">
								<span class="mr-2 h-2 w-2 rounded-full bg-indigo-500"></span>Penerangan LED
							</li>
						</ul>
						<a
							href="/layanan/minisoccer"
							class="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 font-semibold text-white transition-all hover:from-indigo-600 hover:to-blue-600"
						>
							Lihat Detail
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="overflow-hidden bg-white py-20">
		<div class="mx-auto max-w-7xl px-4">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-800">
					Apa Kata <span class="text-emerald-600">Klien Kami</span>
				</h2>
				<p class="text-xl text-gray-600">Kepuasan klien adalah prioritas utama kami</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each testimonials as testimonial, i}
					<div
						class="transform rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						style="animation-delay: {i * 0.2}s"
					>
						<div class="mb-4 flex">
							{#each Array(testimonial.rating) as _}
								<span class="text-xl text-amber-400">★</span>
							{/each}
						</div>
						<p class="mb-6 leading-relaxed text-gray-700 italic">"{testimonial.text}"</p>
						<div class="flex items-center">
							<div
								class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 font-bold text-white"
							>
								{testimonial.name[0]}
							</div>
							<div>
								<h4 class="font-semibold text-gray-800">{testimonial.name}</h4>
								<p class="text-sm text-gray-600">{testimonial.role}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Visi dan Misi -->
	<section id="visi" class="overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
		<div class="mx-auto max-w-7xl px-4">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<!-- Gambar 4 buah, 2 per baris -->
				<div class="order-2 lg:order-1">
					<div class="grid grid-cols-2 gap-4">
						{#each ['foto-1.png', 'foto-2.png', 'foto-3.png', 'foto-4.png'] as img, i}
							<!-- Tentukan radius berbeda untuk setiap indeks -->
							<div
								class="relative overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]"
								class:rounded-tl-[2rem]={i === 0}
								class:rounded-br-[2rem]={i === 1}
								class:rounded-tr-[3rem]={i === 2}
								class:rounded-bl-[3rem]={i === 3}
							>
								<img src={`/images/${img}`} alt="Foto Visi Misi" class="h-auto w-full" />
								<div
									class="absolute -right-2 -bottom-2 hidden h-10 w-10 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 md:block"
									style="border-radius: 1.5rem 0.5rem 1.5rem 0.5rem;"
								></div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Teks Visi Misi -->
				<div class="order-1 lg:order-2">
					<div class="mb-12">
						<h2 class="mb-6 text-4xl font-bold text-gray-800">
							<span class="text-emerald-600">Visi</span> Kami
						</h2>
						<p class="text-lg leading-relaxed text-gray-700">
							Menjadi perusahaan terdepan dalam pembangunan dan renovasi lapangan olahraga di
							Indonesia yang inovatif, berkualitas tinggi, dan terpercaya.
						</p>
					</div>

					<div>
						<h2 class="mb-6 text-4xl font-bold text-gray-800">
							<span class="text-emerald-600">Misi</span> Kami
						</h2>
						<div class="space-y-4">
							<div class="group flex items-start space-x-4">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-[1.05]"
								>
									2
								</div>
								<p class="leading-relaxed text-gray-700">
									Menggunakan material berkualitas tinggi yang ramah lingkungan.
								</p>
							</div>
							<div class="group flex items-start space-x-4">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-[1.05]"
								>
									3
								</div>
								<p class="leading-relaxed text-gray-700">
									Memberikan solusi desain lapangan yang inovatif dan sesuai kebutuhan.
								</p>
							</div>
							<div class="group flex items-start space-x-4">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-[1.05]"
								>
									4
								</div>
								<p class="leading-relaxed text-gray-700">
									Menjaga kepercayaan dan kepuasan pelanggan sebagai prioritas utama.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="kontak" class="overflow-hidden bg-white py-20">
		<div class="mx-auto max-w-7xl px-4">
			<div class="mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold text-gray-800">
					Hubungi <span class="text-emerald-600">Kami</span>
				</h2>
				<p class="text-xl text-gray-600">Siap mewujudkan lapangan olahraga impian Anda</p>
				<div class="mt-6">
					<p class="text-sm text-gray-500">📞 Jam Operasional: Senin - Sabtu (08:00 - 17:00)</p>
				</div>
			</div>

			<!-- Grid 2 kolom di mobile -->
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each contactInfo as contact, i}
					<a
						href={contact.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group transform rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-3 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6"
						style="animation-delay: {i * 0.1}s"
					>
						<div class="mb-2 flex justify-center sm:mb-4">
							<div
								class="animate-float flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-xl transition-transform duration-300 group-hover:scale-[1.05] sm:h-16 sm:w-16 sm:text-2xl"
							>
								{contact.icon}
							</div>
						</div>
						<div class="text-center">
							<h3
								class="mb-1 text-sm font-bold text-gray-800 transition-colors duration-300 group-hover:text-emerald-600 sm:mb-2 sm:text-lg"
							>
								{contact.title}
							</h3>
							<p class="mb-1 text-xs font-medium break-words text-gray-700 sm:text-sm">
								{contact.value}
							</p>
							<p class="text-[10px] text-gray-500 sm:text-xs">
								{contact.desc}
							</p>
						</div>
						<div class="mt-2 flex justify-center sm:mt-4">
							<div
								class="h-1 w-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-8 sm:group-hover:w-12"
							></div>
						</div>
					</a>
				{/each}
			</div>

			<!-- Quick Actions -->
			<div class="mt-16 text-center">
				<h3 class="mb-8 text-2xl font-bold text-gray-800">Aksi Cepat</h3>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a
						href="https://wa.me/6282xxxxxxxx?text=Halo%20AMFlooring,%20saya%20tertarik%20untuk%20konsultasi%20lapangan%20olahraga"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-green-600 hover:to-green-700"
					>
						📱 Chat WhatsApp
					</a>
					<a
						href="tel:+6282xxxxxxxx"
						class="inline-flex transform items-center justify-center gap-2 rounded-full border-2 border-emerald-600 px-8 py-4 font-semibold text-emerald-600 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-600 hover:text-white"
					>
						📞 Telepon Langsung
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info -->
			<div class="lg:col-span-2">
				<div class="mb-6 flex items-center space-x-2">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow"
					>
						<img
							src="/images/logo-amflooring.jpg"
							alt="Logo"
							class="h-full w-full rounded-full object-cover"
						/>
					</div>
					<h3
						class="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-2xl font-bold text-transparent"
					>
						AMFlooring
					</h3>
				</div>
				<p class="mb-6 max-w-md leading-relaxed text-gray-300">
					Spesialis pembangunan dan renovasi lapangan olahraga dengan pengalaman lebih dari 10
					tahun. Wujudkan lapangan impian Anda bersama kami.
				</p>

				<div class="flex flex-wrap gap-3">
					<!-- WhatsApp -->
					<a
						href="https://wa.me/6282xxxxxxxx"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-green-600 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:bg-green-700"
					>
						<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12.01 2.003a9.953 9.953 0 00-8.31 15.427L2.003 22l4.684-1.68a9.957 9.957 0 0014.327-8.317c0-5.514-4.486-10-10-10zm.042 17.006a7.942 7.942 0 01-4.2-1.2l-.3-.2-2.484.89.847-2.453-.2-.3a7.964 7.964 0 1114.052-4.902 7.968 7.968 0 01-7.715 8.165zM16.64 14.5c-.27-.136-1.6-.79-1.846-.882-.247-.09-.428-.136-.608.136s-.7.882-.86 1.065c-.157.181-.312.204-.58.068a6.471 6.471 0 01-1.913-1.178 7.17 7.17 0 01-1.328-1.65c-.14-.24-.014-.37.105-.505.106-.118.24-.308.362-.462.122-.154.162-.26.244-.437.08-.177.04-.33-.02-.462-.06-.136-.608-1.46-.834-2.004-.218-.524-.438-.454-.6-.462l-.513-.01c-.176 0-.462.067-.704.33s-.92.898-.92 2.188.943 2.538 1.075 2.715c.132.177 1.85 2.833 4.48 3.97.626.27 1.113.433 1.494.554.628.2 1.2.172 1.652.104.504-.074 1.6-.654 1.825-1.287.225-.632.225-1.177.158-1.287-.066-.11-.244-.178-.51-.312z"
							/>
						</svg>
					</a>

					<!-- Instagram -->
					<a
						href="#"
						aria-label="Instagram"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg transition-all duration-300 hover:scale-[1.05]"
					>
						<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.4.6.2 1.1.6 1.6 1.1s.9 1 .9 1.6c.2.5.3 1.3.4 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.5-.2.6-.6 1.1-1.1 1.6s-1 .9-1.6 1.1c-.5.2-1.3.3-2.5.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1.1-.6-1.6-1.1s-.9-1-.9-1.6c-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.5.2-.6.6-1.1 1.1-1.6S4.8 2.7 5.4 2.5c.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.3-.5.2-.8.4-1.1.8-.4.3-.6.6-.8 1.1-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.3 2.1.2.5.4.8.8 1.1.3.4.6.6 1.1.8.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.3.5-.2.8-.4 1.1-.8.4-.3.6-.6.8-1.1.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.3-2.1-.2-.5-.4-.8-.8-1.1-.3-.4-.6-.6-1.1-.8-.4-.1-1-.3-2.1-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.9a5.9 5.9 0 110 11.8 5.9 5.9 0 010-11.8zm0 1.8a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm5.8-1.9a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8z"
							/>
						</svg>
					</a>

					<!-- Facebook -->
					<a
						href="#"
						aria-label="Facebook"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:bg-blue-700"
					>
						<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h3l-.5 3h-2.5v7C18.3 21.1 22 17 22 12.1z"
							/>
						</svg>
					</a>

					<!-- YouTube -->
					<a
						href="#"
						aria-label="YouTube"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:bg-red-700"
					>
						<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M19.6 3H4.4C3 3 2 4 2 5.4v13.2C2 20 3 21 4.4 21h15.2c1.4 0 2.4-1 2.4-2.4V5.4C22 4 21 3 19.6 3zM10 16V8l6 4-6 4z"
							/>
						</svg>
					</a>

					<!-- TikTok -->
					<a
						href="#"
						aria-label="TikTok"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-black shadow-lg transition-all duration-300 hover:scale-[1.05] hover:bg-gray-800"
					>
						<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 256 256">
							<path
								d="M168 48c11.5 8.7 23.5 13.1 36 13.9v29.2c-11.7-.2-22.8-3.5-33.3-9.7v62.6c0 48.1-51.6 75.9-90.1 52.7-26.3-16-33.7-54.3-14.3-79.7 13.4-17.6 33.8-24.7 53.3-20.8V132c-10.7-2.9-21.5 1.2-26.7 11.4-7.4 14.3 2.5 32.7 19.3 33.9 11.6.8 23.8-8.7 23.8-23.5V24h31v24z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-6 text-lg font-semibold text-emerald-400">Tautan Cepat</h4>
				<ul class="space-y-3">
					<li>
						<a
							href="#home"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Beranda</a
						>
					</li>
					<li>
						<a
							href="#about"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Tentang Kami</a
						>
					</li>
					<li>
						<a
							href="#layanan"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Layanan</a
						>
					</li>
					<li>
						<a
							href="#visi"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Visi & Misi</a
						>
					</li>
					<li>
						<a
							href="#kontak"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Kontak</a
						>
					</li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-6 text-lg font-semibold text-emerald-400">Layanan Kami</h4>
				<ul class="space-y-3">
					<li>
						<a
							href="#layanan"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Lapangan Futsal</a
						>
					</li>
					<li>
						<a
							href="#layanan"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Lapangan Basket</a
						>
					</li>
					<li>
						<a
							href="#layanan"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Lapangan Badminton</a
						>
					</li>
					<li>
						<a
							href="#layanan"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Lapangan Tenis</a
						>
					</li>
					<li>
						<a
							href="#layanan"
							class="inline-block text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-emerald-400"
							>Lapangan Voli</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Contact Info Footer -->
		<div class="mt-12 border-t border-slate-700 pt-8">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<div class="flex items-center space-x-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">📍</div>
					<div>
						<p class="text-sm text-gray-400">Alamat</p>
						<p class="text-white">Jl. Olahraga No. 123, Medan</p>
					</div>
				</div>
				<div class="flex items-center space-x-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">📞</div>
					<div>
						<p class="text-sm text-gray-400">Telepon</p>
						<p class="text-white">+62 821-xxxx-xxxx</p>
					</div>
				</div>
				<div class="flex items-center space-x-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">✉️</div>
					<div>
						<p class="text-sm text-gray-400">Email</p>
						<p class="text-white">info@amflooring.com</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 border-t border-slate-700 pt-8 text-center">
			<div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
				<p class="text-sm text-gray-400">&copy; 2025 AMFlooring. Semua hak dilindungi.</p>
				<p class="text-xs text-gray-500">Dibuat dengan ❤️ untuk masa depan olahraga Indonesia</p>
			</div>
		</div>
	</div>
</footer>
