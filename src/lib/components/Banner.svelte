<!-- src/lib/components/Banner.svelte -->
<script>
  import { Car, Users, Phone, Heart, MapPin } from 'lucide-svelte';
</script>

<div class="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 overflow-hidden">
  <!-- Decorative Background Elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
    <div class="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>
  </div>

  <!-- Main Content -->
  <div class="relative max-w-7xl mx-auto px-4 py-16">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Text Content -->
      <div class="text-center lg:text-left max-w-2xl">
        <div class="inline-block px-4 py-1 bg-blue-700/30 backdrop-blur-sm rounded-full text-blue-100 mb-4">
          A Welcoming Community for Adults 55+
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Senior Community Connect
        </h1>
        
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Making it easier to stay active, make friends, and enjoy life together.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold 
                         hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
            Join Our Community
          </button>
          <button class="border-2 border-white/80 text-white px-8 py-3 rounded-xl font-semibold
                         hover:bg-white/10 backdrop-blur-sm transition-all">
            Get Help
          </button>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-2 gap-4 w-full max-w-sm">
        {#each [
          { icon: Car, text: 'Free Rides', color: 'bg-blue-400/20' },
          { icon: Users, text: 'New Friends', color: 'bg-blue-400/20' },
          { icon: Phone, text: '24/7 Support', color: 'bg-blue-400/20' },
          { icon: Heart, text: 'Care Team', color: 'bg-blue-400/20' }
        ] as feature}
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 
                      hover:bg-white/20 transition-all group">
            <div class="flex flex-col items-center text-center gap-2">
              <div class="p-3 rounded-lg {feature.color} group-hover:scale-110 transition-transform">
                <svelte:component this={feature.icon} class="w-6 h-6 text-white" />
              </div>
              <span class="text-white font-medium">{feature.text}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="relative bg-blue-800/50 backdrop-blur-sm border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 py-3">
      <div class="flex flex-wrap items-center justify-center md:justify-between gap-4 text-blue-100">
        <div class="flex items-center gap-2">
          <span>Need assistance?</span>
          <a href="tel:(555) 123-4567" class="font-semibold hover:text-white transition-colors">
            (555) 123-4567
          </a>
        </div>
        <div class="flex items-center gap-2">
          <MapPin size={16} class="text-blue-300" />
          <span>Available 24/7</span>
        </div>
      </div>
    </div>
  </div>
</div>