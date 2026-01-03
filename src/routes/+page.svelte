<script>
  let email = "";
  let submitted = false;
  let loading = false;

  async function handleSubmit(e) {
    e.preventDefault();
    loading = true;
    
    try {
      // You can add email capture here later (e.g., Mailchimp, SendGrid)
      // For now, just show success
      submitted = true;
      email = "";
    } catch (err) {
      console.error("Error:", err);
    } finally {
      loading = false;
    }
  }
</script>

<main class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
  <!-- Navigation -->
  <nav class="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
    <div class="text-2xl font-bold text-teal-600">
      <img src="/logo.svg" alt="NAIA" class="h-12" />
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 py-24 text-center">
    <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
      NAIA
    </h1>
    <p class="text-2xl text-gray-700 mb-2">Making Industrial Data Instantly Useful</p>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      The AI-powered platform that transforms 10+ years of cryptic historian data 
      into actionable intelligence.
    </p>
  </section>

  <!-- Problem Section -->
  <section class="bg-white py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">The Problem We're Solving</h2>
      
      <div class="prose prose-lg max-w-none text-gray-700">
        <p class="mb-6">
          Your industrial site has years of valuable data locked in legacy historians 
          <span class="font-semibold">(PI System, Wonderware, InfluxDB)</span>. But getting it organized? 
          That takes months. Costs <span class="font-semibold">$500K+</span>. And you restart from zero at every new location.
        </p>
        
        <p>
          <span class="font-semibold text-teal-600">NAIA changes that.</span> Our AI learns your equipment patterns as you build your asset 
          hierarchy, then instantly recognizes those same patterns in new data imports. 
          It's not a cheaper historian—it's a generational leap beyond 1990s architecture.
        </p>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">What's Coming</h2>
      
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-300 transition">
          <div class="w-12 h-12 bg-teal-100 rounded-lg mb-4 flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM2 8a2 2 0 11-4 0 2 2 0 014 0zM18 15v2H0v-2a6 6 0 0112 0v2h6v-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Intelligent Pattern Learning</h3>
          <p class="text-gray-600">
            Build once. Learn everywhere. The same patterns NAIA learns at your first site 
            automatically accelerate setup at your next one.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-300 transition">
          <div class="w-12 h-12 bg-teal-100 rounded-lg mb-4 flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.5 2a1.5 1.5 0 100 3h9a1.5 1.5 0 100-3h-9zM2 8a1 1 0 011-1h14a1 1 0 011 1v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Non-Destructive Migration</h3>
          <p class="text-gray-600">
            Keep your legacy PI System running. Connect it as a data source. Let NAIA organize 
            it. Deprecate on your timeline.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-300 transition">
          <div class="w-12 h-12 bg-teal-100 rounded-lg mb-4 flex items-center justify-center">
            <svg class="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a1 1 0 001 1h12a1 1 0 001-1V6a2 2 0 00-2-2H4zm12 12H4c-1.1 0-2-.896-2-2v-4a1 1 0 00-1-1H.5a.5.5 0 00-.5.5v4c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-4a1 1 0 001-1h.5a.5.5 0 01.5.5v4c0 1.104-.896 2-2 2z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Enterprise-Ready</h3>
          <p class="text-gray-600">
            Designed for 100,000+ points. Built for industrial scale. Ready to integrate with 
            your existing infrastructure.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-teal-600 to-teal-700 py-20 px-6">
    <div class="max-w-2xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-4">Be First to Know</h2>
      <p class="text-lg mb-8 opacity-90">
        Join our early access list for launch updates and exclusive beta access.
      </p>
      
      <form onsubmit={handleSubmit} class="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          bind:value={email}
          placeholder="your@email.com"
          required
          class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
          disabled={submitted}
        />
        <button
          type="submit"
          disabled={loading || submitted}
          class="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 disabled:opacity-50 transition"
        >
          {loading ? "Loading..." : submitted ? "Thank You!" : "Notify Me"}
        </button>
      </form>

      {#if submitted}
        <p class="mt-4 text-sm opacity-90">
          Thank you! We'll be in touch soon.
        </p>
      {/if}
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <p>&copy; 2026 NAIA. Built for industrial innovation.</p>
    </div>
  </footer>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
