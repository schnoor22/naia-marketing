<script>
  import { onMount } from 'svelte';

  let calculatorState = {
    pointCount: 10000,
    systemAge: 10,
  };

  let calculatorResult = null;

  function calculateMigration() {
    // System age drives legacy licensing cost escalation
    // Older systems = more accumulated licensing fees + higher base costs
    const baseAnnualLicense = 250000; // Starting PI license
    const ageMultiplier = 1 + (calculatorState.systemAge * 0.05); // 5% cost increase per year of system age
    const piAnnualLicense = baseAnnualLicense * ageMultiplier;
    const yearlyIncrease = 0.08; // 8% annual increase (standard enterprise software)
    const projectionYears = 5;
    
    // Calculate cumulative PI cost over 5 years with escalation
    let piTotalCost = 0;
    for (let i = 0; i < projectionYears; i++) {
      piTotalCost += piAnnualLicense * Math.pow(1 + yearlyIncrease, i);
    }
    
    // nai'a pricing: $2 per point per year, capped at $150k/year
    // System age = more historical data, but nai'a handles it non-destructively
    // One-time migration complexity factor (paid upfront)
    const naiaPricePerPoint = 2;
    const naiaCap = 150000;
    const naiaNumeratorAnnual = Math.min(calculatorState.pointCount * naiaPricePerPoint, naiaCap);
    const naiaTotalCost = naiaNumeratorAnnual * projectionYears;
    
    const costSaved = piTotalCost - naiaTotalCost;
    const roi = naiaTotalCost > 0 ? ((costSaved) / naiaTotalCost * 100).toFixed(0) : 0;

    calculatorResult = {
      systemAge: calculatorState.systemAge,
      pointCount: calculatorState.pointCount,
      piAnnualLicense: piAnnualLicense.toFixed(0),
      piTotalCost: piTotalCost.toFixed(0),
      naiaTotalCost: naiaTotalCost.toFixed(0),
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
      <div></div>
      <div class="text-sm text-slate-300 max-w-xs text-right">Unlock 10+ years of legacy data in days, not months</div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
    <div class="space-y-8">
      <img src="/logo.png" alt="naía" class="w-40 h-40 object-contain rounded-lg mx-auto" />
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
      <a href="#calculator" class="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/50 text-lg cursor-pointer">
        See Your ROI
      </a>
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
              max="10000000" 
              step="10000"
              bind:value={calculatorState.pointCount}
              on:input={handleSliderChange}
              class="w-full accent-cyan-500"
            />
            <div class="flex justify-between text-xs text-slate-400 mt-2">
              <span>1K tags</span>
              <span>10M tags</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-blue-300 mb-3">System Age: {calculatorState.systemAge} years</label>
            <input 
              type="range" 
              min="1" 
              max="50" 
              step="1"
              bind:value={calculatorState.systemAge}
              on:input={handleSliderChange}
              class="w-full accent-blue-500"
            />
            <div class="flex justify-between text-xs text-slate-400 mt-2">
              <span>1 year old</span>
              <span>50+ years</span>
            </div>
          </div>
          
          <div class="bg-slate-900/30 rounded-lg p-4 border border-slate-700/50">
            <p class="text-slate-300 text-sm">
              Compare your data point licensing costs over 5 years. nai'a charges a flat $2 per point annually (capped at $150k/year), while legacy systems typically escalate at 8% yearly.
            </p>
          </div>
        </div>

        {#if calculatorResult}
          <div class="space-y-6">
            <div class="bg-slate-900/50 rounded-xl p-6 border border-red-500/30">
              <p class="text-slate-400 text-sm mb-2">PI System Total Cost (5 years)</p>
              <p class="text-3xl font-bold text-red-400">${parseInt(calculatorResult.piTotalCost).toLocaleString()}</p>
              <p class="text-slate-500 text-xs mt-2">Annual license: ${parseInt(calculatorResult.piAnnualLicense).toLocaleString()} + 8% escalation</p>
              <p class="text-slate-600 text-xs mt-1">{calculatorResult.systemAge}yr system = {((calculatorResult.systemAge * 5)).toFixed(0)}% cost premium</p>
            </div>

            <div class="bg-slate-900/50 rounded-xl p-6 border border-cyan-500/30">
              <p class="text-slate-400 text-sm mb-2">nai'a Total Cost (5 years)</p>
              <p class="text-3xl font-bold text-cyan-400">${parseInt(calculatorResult.naiaTotalCost).toLocaleString()}</p>
              <p class="text-slate-500 text-xs mt-2">@$2/point/year × {calculatorResult.pointCount.toLocaleString()} points</p>
              <p class="text-slate-600 text-xs mt-1">Linear pricing—age doesn't increase cost</p>
            </div>

            <div class="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-emerald-500/50">
              <p class="text-slate-300 text-sm mb-3">Your 5-Year Savings</p>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-emerald-400 text-2xl font-bold">${parseInt(calculatorResult.costSaved).toLocaleString()}</p>
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

  <!-- Competitive Comparison -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 class="text-4xl font-bold mb-4 text-center">How nai'a Compares</h2>
    <p class="text-slate-300 text-center mb-12 max-w-2xl mx-auto">Enterprise-grade capabilities at startup pricing. Built for industrial data, not generic time-series.</p>
    
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b border-slate-700">
            <th class="text-left py-4 px-4 text-slate-300 font-semibold">Feature</th>
            <th class="text-center py-4 px-4"><div class="flex items-center justify-center gap-2"><span class="text-cyan-400 font-bold">nai'a</span></div></th>
            <th class="text-center py-4 px-4 text-slate-400">PI System</th>
            <th class="text-center py-4 px-4 text-slate-400">InfluxDB</th>
            <th class="text-center py-4 px-4 text-slate-400">Grafana</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">Non-destructive data ingestion</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">AI pattern learning (hierarchical)</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">Auto-semantic asset model</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-400">Partial</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">OPC-UA native support</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-400">Plugin</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">Handles 10+ years of legacy data</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-400">Partial</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">Scales to millions of points</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-400">Partial</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">Predictive analytics</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-400">Partial</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="border-b border-slate-800 hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300">Costs scale linearly (no surprises)</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">✓</span></td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
            <td class="text-center py-4 px-4 text-slate-500">✗</td>
          </tr>
          <tr class="hover:bg-slate-900/30 transition">
            <td class="py-4 px-4 text-slate-300 font-semibold">Typical annual cost (50K points)</td>
            <td class="text-center py-4 px-4"><span class="text-emerald-400 font-bold">$100K</span></td>
            <td class="text-center py-4 px-4 text-slate-400">$350K+</td>
            <td class="text-center py-4 px-4 text-slate-400">$200K+</td>
            <td class="text-center py-4 px-4 text-slate-400">$150K+</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
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
</style>
