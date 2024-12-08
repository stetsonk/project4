<!-- src/lib/components/CompanionMatch.svelte -->
<script>
    import { Heart, Coffee, Book, Music, ChevronRight, ChevronLeft, User, Footprints, Calendar } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
  
    const companions = [
      {
        name: "Mary Wilson",
        age: 68,
        interests: ["reading", "walking", "music"],
        bio: "I love helping new members feel welcome! I've been part of the community for 3 years and enjoy meeting new friends.",
        experience: "15 members welcomed",
        availability: "Weekday mornings and afternoons"
      },
      {
        name: "Robert Chen",
        age: 71,
        interests: ["chess", "gardening", "books"],
        bio: "Former teacher who enjoys helping others feel comfortable in new situations. Always happy to share a cup of coffee and conversation.",
        experience: "12 members welcomed",
        availability: "Weekends and Tuesday/Thursday"
      },
      {
        name: "Sarah Johnson",
        age: 65,
        interests: ["music", "walking", "coffee"],
        bio: "Retired nurse who loves music and meeting new people. I enjoy helping others discover our wonderful community.",
        experience: "8 members welcomed",
        availability: "Flexible schedule"
      }
    ];
  
    const interestIcons = {
      reading: Book,
      walking: Footprints,
      music: Music,
      coffee: Coffee,
      chess: Coffee,
      gardening: Coffee,
      books: Book
    };
  
    let currentIndex = 0;
    let direction = 1;
  
    function nextCompanion() {
      direction = 1;
      currentIndex = (currentIndex + 1) % companions.length;
    }
  
    function previousCompanion() {
      direction = -1;
      currentIndex = (currentIndex - 1 + companions.length) % companions.length;
    }
  
    function goToCompanion(index) {
      direction = index > currentIndex ? 1 : -1;
      currentIndex = index;
    }
  </script>
  
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-blue-100">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Meet a Friendly Companion</h2>
      <p class="text-gray-600">
        Let an experienced member show you around and join you for your first activities.
      </p>
    </div>
  
    <div class="relative">
      <!-- Navigation Buttons -->
      <button 
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 
               shadow-lg hover:bg-gray-50 z-10 hover:scale-110 transition-all duration-200
               border border-gray-100"
        on:click={previousCompanion}
      >
        <ChevronLeft class="text-gray-600" />
      </button>
      
      <button 
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 
               shadow-lg hover:bg-gray-50 z-10 hover:scale-110 transition-all duration-200
               border border-gray-100"
        on:click={nextCompanion}
      >
        <ChevronRight class="text-gray-600" />
      </button>
  
      <!-- Companion Card -->
      <div class="px-8 overflow-hidden">
        <div 
          class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm"
          transition:fade={{ duration: 300 }}
        >
          <div class="flex gap-6 items-start">
            <div class="w-24 h-24 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 
                        flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-200">
              <User size={36} class="text-blue-600" />
            </div>
            
            <div class="flex-1">
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="text-xl font-semibold text-gray-800">
                    {companions[currentIndex].name}
                  </h3>
                  <p class="text-blue-600 font-medium">
                    {companions[currentIndex].experience}
                  </p>
                </div>
                <span class="bg-blue-100 text-blue-800 text-sm px-4 py-1.5 rounded-full border border-blue-200">
                  {companions[currentIndex].age} years young
                </span>
              </div>
              
              <p class="text-gray-600 mb-4 line-clamp-2">
                {companions[currentIndex].bio}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                {#each companions[currentIndex].interests as interest}
                  <div class="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                    <svelte:component this={interestIcons[interest] || Coffee} size={14} class="text-gray-600" />
                    <span class="capitalize text-gray-700">{interest}</span>
                  </div>
                {/each}
              </div>
  
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <div class="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span class="text-sm">{companions[currentIndex].availability}</span>
                </div>
                <button class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg 
                             hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                  Connect
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Dots Indicator -->
      <div class="flex justify-center gap-3 mt-6">
        {#each companions as _, index}
          <button 
            class="w-2.5 h-2.5 rounded-full transition-all duration-200 
                   {index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}"
            on:click={() => goToCompanion(index)}
          />
        {/each}
      </div>
    </div>
  </div>