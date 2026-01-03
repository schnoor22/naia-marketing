<script>
	import { onMount } from 'svelte';

	let email = '';
	let submitted = false;

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Email submitted:', email);
		submitted = true;
		email = '';
		setTimeout(() => (submitted = false), 3000);
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
	<!-- Navigation -->
	<nav class="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
			<div class="flex items-center gap-2">
				<img src="/logo.png" alt="NAIA" class="w-10 h-10 object-contain" />
				<span class="text-xl font-bold">NAIA</span>
			</div>
			<div class="text-sm text-slate-400">Industrial Data Intelligence</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
		<h1 class="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
			Your Industrial Data,
			<br />
			Instantly Useful
		</h1>
		<p class="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
			Turn 10+ years of cryptic historian data into actionable intelligence. NAIA learns your patterns and makes legacy systems speak.
		</p>
		<a href="#signup" class="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
			Get Early Access
		</a>
	</section>

	<!-- Problem Statement -->
	<section class="bg-slate-800/50 py-16">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold mb-8 text-center">The Problem With Legacy Data</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="p-6 bg-slate-700/30 rounded-lg border border-slate-600">
					<div class="text-4xl mb-4">📚</div>
					<h3 class="font-bold mb-2">Data Historian Chaos</h3>
					<p class="text-slate-300 text-sm">
						Years of readings with cryptic naming. "WTG001.Var.Temp" — what does it mean? Where does it fit?
					</p>
				</div>
				<div class="p-6 bg-slate-700/30 rounded-lg border border-slate-600">
					<div class="text-4xl mb-4">🔄</div>
					<h3 class="font-bold mb-2">Manual Mapping Hell</h3>
					<p class="text-slate-300 text-sm">
						Hours spent connecting points to your hierarchy. Every new data source means starting over.
					</p>
				</div>
				<div class="p-6 bg-slate-700/30 rounded-lg border border-slate-600">
					<div class="text-4xl mb-4">❓</div>
					<h3 class="font-bold mb-2">Lost Context</h3>
					<p class="text-slate-300 text-sm">
						Original meaning is forgotten. Was this temperature critical? What's the normal range?
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Features -->
	<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
		<h2 class="text-4xl font-bold mb-16 text-center">How NAIA Solves It</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<div class="p-8 bg-gradient-to-br from-blue-900/40 to-slate-800 rounded-xl border border-blue-700/30">
				<div class="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">⚙️</div>
				<h3 class="text-xl font-bold mb-4">Pattern Learning</h3>
				<p class="text-slate-300">
					NAIA learns from your asset structure and recognizes patterns automatically. Import new data and get smart suggestions instantly.
				</p>
			</div>
			<div class="p-8 bg-gradient-to-br from-cyan-900/40 to-slate-800 rounded-xl border border-cyan-700/30">
				<div class="w-12 h-12 bg-cyan-600 rounded-lg mb-6 flex items-center justify-center">🔐</div>
				<h3 class="text-xl font-bold mb-4">Non-Destructive Migration</h3>
				<p class="text-slate-300">
					Keep your existing systems intact. NAIA sits alongside your historian as a semantic bridge—no risky data migrations.
				</p>
			</div>
			<div class="p-8 bg-gradient-to-br from-green-900/40 to-slate-800 rounded-xl border border-green-700/30">
				<div class="w-12 h-12 bg-green-600 rounded-lg mb-6 flex items-center justify-center">🏢</div>
				<h3 class="text-xl font-bold mb-4">Enterprise-Ready</h3>
				<p class="text-slate-300">
					Built for industrial scale. Time-series optimized, multi-site support, OPC UA native integration.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="signup" class="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-t border-b border-blue-700/30 py-16">
		<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl font-bold mb-6">Ready to Make Your Data Useful?</h2>
			<p class="text-slate-300 mb-8">
				We're in private beta. Get early access and shape the future of industrial data intelligence.
			</p>
			<form onsubmit={handleSubmit} class="flex flex-col sm:flex-row gap-3">
				<input
					type="email"
					placeholder="your@company.com"
					bind:value={email}
					required
					class="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
				/>
				<button
					type="submit"
					class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
				>
					Request Access
				</button>
			</form>
			{#if submitted}
				<p class="mt-4 text-green-400">Thanks! We'll be in touch soon.</p>
			{/if}
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-slate-900 border-t border-slate-700 py-8">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
			<p>&copy; 2026 NAIA. Industrial data intelligence. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}
</style>

