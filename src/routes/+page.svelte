<script>
  import { onMount } from 'svelte';

  let calculatorState = {
    pointCount: 10000,
    systemCount: 5,
    dataAgeYears: 12,
    manualHoursPerPoint: 4,
  };

  let calculatorResult = null;

  function calculateMigration() {
    const totalManualHours = calculatorState.pointCount * calculatorState.manualHoursPerPoint;
    const manualWeeks = totalManualHours / 40;
    const manualCost = totalManualHours * 125;
    
    const naiaDays = (calculatorState.pointCount * 0.15) / 24;
    const naiaCost = naiaDays * 2500;
    
    const timeSaved = manualWeeks - (naiaDays / 5);
    const costSaved = manualCost - naiaCost;
    const roi = ((costSaved) / naiaCost * 100).toFixed(0);

    calculatorResult = {
      manualHours: totalManualHours,
      manualCost: manualCost.toFixed(0),
      naiaCost: naiaCost.toFixed(0),
      timeSaved: timeSaved.toFixed(1),
      costSaved: costSaved.toFixed(0),
      roi
    };
  }

  onMount(() => {
    calculateMigration();
  });

  function handleSliderChange() {
    calculateMigration();
  }
</script>

<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

<div class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white font-sans">
  <!-- Navigation -->
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-blue-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center">
          <img src="/logo.png" alt="naía" class="w-full h-full object-cover mix-blend-mode: multiply brightness-110" />
        </div>
        <div>
          <div class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">nai'a</div>
          <div class="text-xs text-slate-400">Industrial AI</div>
        </div>
      </div>
      <div class="text-sm text-slate-300 max-w-xs text-right">Unlock 10+ years of legacy data in days, not months</div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
    <div class="space-y-8">
      <h1 class="text-6xl md:text-7xl font-black tracking-tight">
        <span class="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Transform</span>
        <br />
        <span class="text-slate-100">Industrial Data into</span>
        <br />
        <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Intelligence</span>
      </h1>
      <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Enterprise AI that learns your asset patterns and connects disparate data sources. Non-destructive, intelligent, immediate.
      </p>
      <button class="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/50 text-lg">
        Start Migration Calculator
      </button>
    </div>

    <div class="absolute inset-0 overflow-hidden -z-10">
      <div class="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style="animation-delay: 2s;"></div>
    </div>
  </section>

  <!-- Migration Calculator -->
  <section id="calculator" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl border border-blue-700/50 p-12 backdrop-blur-xl">
      <h2 class="text-4xl font-bold mb-4 text-center">Migration ROI Calculator</h2>
      <p class="text-slate-300 text-center mb-12 max-w-2xl mx-auto">See how nai'a transforms months of manual work into days of automated intelligence</p>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div>
            <label class="block text-sm font-semibold text-cyan-300 mb-3">Data Points: {calculatorState.pointCount.toLocaleString()}</label>
            <input 
              type="range" 
              min="1000" 
              max="100000" 
              step="1000"
              bind:value={calculatorState.pointCount}
              on:input={handleSliderChange}
              class="w-full accent-cyan-500"
            />
            <div class="flex justify-between text-xs text-slate-400 mt-2">
              <span>1K</span>
              <span>100K</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-blue-300 mb-3">Legacy Systems: {calculatorState.systemCount}</label>
            <input 
              type="range" 
              min="1" 
              max="20" 
              step="1"
              bind:value={calculatorState.systemCount}
              on:input={handleSliderChange}
              class="w-full accent-blue-500"
            />
            <div class="flex justify-between text-xs text-slate-400 mt-2">
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-cyan-300 mb-3">Data Age: {calculatorState.dataAgeYears} years</label>
            <input 
              type="range" 
              min="1" 
              max="30" 
              step="1"
              bind:value={calculatorState.dataAgeYears}
              on:input={handleSliderChange}
              class="w-full accent-cyan-500"
            />
            <div class="flex justify-between text-xs text-slate-400 mt-2">
              <span>1</span>
              <span>30</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-blue-300 mb-3">Manual Hours per Point: {calculatorState.manualHoursPerPoint}h</label>
            <input 
              type="range" 
              min="1" 
              max="16" 
              step="0.5"
              bind:value={calculatorState.manualHoursPerPoint}
              on:input={handleSliderChange}
              class="w-full accent-blue-500"
            />
            <div class="flex justify-between text-xs text-slate-400 mt-2">
              <span>1h</span>
              <span>16h</span>
            </div>
          </div>
        </div>

        {#if calculatorResult}
          <div class="space-y-6">
            <div class="bg-slate-900/50 rounded-xl p-6 border border-red-500/30">
              <p class="text-slate-400 text-sm mb-2">Traditional Manual Migration</p>
              <p class="text-3xl font-bold text-red-400">${calculatorResult.manualCost}</p>
              <p class="text-slate-500 text-xs mt-2">{calculatorResult.manualHours.toLocaleString()} engineer hours</p>
            </div>

            <div class="bg-slate-900/50 rounded-xl p-6 border border-cyan-500/30">
              <p class="text-slate-400 text-sm mb-2">nai'a Intelligent Migration</p>
              <p class="text-3xl font-bold text-cyan-400">${calculatorResult.naiaCost}</p>
              <p class="text-slate-500 text-xs mt-2">{calculatorResult.timeSaved} weeks to deploy</p>
            </div>

            <div class="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-emerald-500/50">
              <p class="text-slate-300 text-sm mb-3">Your Savings</p>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-emerald-400 text-2xl font-bold">${calculatorResult.costSaved}</p>
                  <p class="text-xs text-slate-400">Total savings</p>
                </div>
                <div>
                  <p class="text-emerald-400 text-2xl font-bold">{calculatorResult.roi}%</p>
                  <p class="text-xs text-slate-400">ROI</p>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="text-4xl font-bold mb-16 text-center">How nai'a Works</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
        <div class="relative bg-slate-900/50 border border-slate-700/50 group-hover:border-cyan-500/50 rounded-xl p-8 transition-all">
          <div class="text-4xl font-bold text-cyan-400 mb-4">1</div>
          <h3 class="text-xl font-bold mb-4">Connect Sources</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            Point nai'a to your historians, databases, and real-time streams. Non-destructive connection with zero system impact.
          </p>
        </div>
      </div>

      <div class="relative group md:mt-12">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
        <div class="relative bg-slate-900/50 border border-slate-700/50 group-hover:border-blue-500/50 rounded-xl p-8 transition-all">
          <div class="text-4xl font-bold text-blue-400 mb-4">2</div>
          <h3 class="text-xl font-bold mb-4">Learn Patterns</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            AI discovers asset fingerprints, parameter relationships, and operational patterns across decades of data.
          </p>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
        <div class="relative bg-slate-900/50 border border-slate-700/50 group-hover:border-cyan-500/50 rounded-xl p-8 transition-all">
          <div class="text-4xl font-bold text-cyan-400 mb-4">3</div>
          <h3 class="text-xl font-bold mb-4">Activate Intelligence</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            Your data becomes a semantic asset model. Query, visualize, predict, and discover insights instantly.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Philosophy -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="bg-gradient-to-br from-blue-900/30 to-slate-900/50 border border-blue-700/30 rounded-2xl p-12 backdrop-blur-xl text-center">
      <h3 class="text-2xl font-bold mb-6">The nai'a Philosophy</h3>
      <p class="text-lg text-slate-200 leading-relaxed mb-8">
        Like the dolphin that communicates the knowledge of many fish, nai'a speaks for your silent data. Each data point is a signal waiting to be heard.
      </p>
      <p class="text-sm text-slate-400 italic">
        Non-destructive. Intelligent. Enterprise-grade AI for the industrial world.
      </p>
    </div>
  </section>

  <!-- CTA -->
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <h2 class="text-4xl font-bold mb-6">Ready to Unlock Your Data?</h2>
    <p class="text-xl text-slate-300 mb-8">Talk to our team about your migration challenges</p>
    <button class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-cyan-500/50 text-lg">
      Schedule a Demo
    </button>
  </section>

  <!-- Footer -->
  <footer class="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center text-slate-400 text-sm">
      <p>&copy; 2026 nai'a. Enterprise Industrial AI. All rights reserved.</p>
    </div>
  </footer>
</div>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  /* Logo white background blending */
  img[alt="naía"] {
    mix-blend-mode: multiply;
    filter: brightness(1.15) contrast(1.1);
  }
</style>
