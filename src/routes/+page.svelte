<!-- src/routes/+page.svelte -->
<script>
    import { Heart, Calendar, Users, MapPin, Filter, Search } from 'lucide-svelte';
    import Banner from '$lib/components/Banner.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import CompanionMatch from '$lib/components/CompanionMatch.svelte';
    import { mobilityLevels, transportOptions, upcomingEvents } from '$lib/data';
  
    let searchQuery = '';
    let activeFilter = 'all';

    function isToday(dateStr) {
        return dateStr.toLowerCase().includes('today');
    }
    
    function isThisWeek(dateStr) {
        const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'tomorrow'];
        return weekdays.some(day => dateStr.toLowerCase().includes(day));
    }
    
    // Reactive filtered events
    $: filteredEvents = upcomingEvents.filter(event => {
        // Search query filter
        const matchesSearch = searchQuery === '' || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Category filter
        let matchesCategory = true;
        switch(activeFilter) {
        case 'today':
            matchesCategory = isToday(event.date);
            break;
        case 'this-week':
            matchesCategory = isThisWeek(event.date);
            break;
        case 'virtual':
            matchesCategory = event.virtual;
            break;
        case 'in-person':
            matchesCategory = !event.virtual;
            break;
        default:
            matchesCategory = true;
        }

        return matchesSearch && matchesCategory;
    });

    function getEventTypeStyle(isVirtual) {
        return isVirtual 
            ? 'from-blue-50 to-indigo-50 border-blue-100' 
            : 'from-green-50 to-emerald-50 border-green-100';
     }
  </script>
  
  <Banner />
  
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Community Activities</h1>
          <p class="text-gray-600 mt-1">Find activities and make connections</p>
        </div>
  
        <!-- Search and Filters -->
        <div class="flex gap-3 w-full md:w-auto">
          <div class="relative flex-1 md:w-64">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search activities..."
              bind:value={searchQuery}
              class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            <span class="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>
  
      <!-- Main Content Grid -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column - Main Content -->
        <div class="flex-1">
            <!-- Quick Filters -->
            <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
                {#each [
                { id: 'all', label: 'All' },
                { id: 'today', label: 'Today' },
                { id: 'this-week', label: 'This Week' },
                { id: 'virtual', label: 'Virtual' },
                { id: 'in-person', label: 'In-Person' }
                ] as filter}
                <button 
                    class="px-4 py-2 rounded-full whitespace-nowrap transition-colors
                        {activeFilter === filter.id ? 
                            'bg-blue-600 text-white' : 
                            'bg-white text-gray-600 hover:bg-gray-50'}"
                    on:click={() => activeFilter = filter.id}
                >
                    {filter.label}
                    <span class="ml-2 text-sm opacity-75">
                    ({filter.id === 'all' ? 
                        upcomingEvents.length : 
                        upcomingEvents.filter(event => 
                        filter.id === 'virtual' ? event.virtual : 
                        filter.id === 'in-person' ? !event.virtual :
                        filter.id === 'today' ? isToday(event.date) :
                        filter.id === 'this-week' ? isThisWeek(event.date) : true
                        ).length})
                    </span>
                </button>
                {/each}
            </div>
  
          <!-- Companion Match Section -->
          <CompanionMatch />
  
        <!-- Activities Grid -->
        <div class="grid md:grid-cols-2 gap-6">
        {#if filteredEvents.length === 0}
            <div class="col-span-2 text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
            <p class="text-gray-600 text-lg">No activities found matching your criteria.</p>
            <button 
                class="mt-4 text-blue-600 hover:underline"
                on:click={() => {
                searchQuery = '';
                activeFilter = 'all';
                }}
            >
                Clear filters and show all activities
            </button>
            </div>
        {:else}
        {#each filteredEvents as event}
        <div class="group relative bg-gradient-to-br border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 
                    {getEventTypeStyle(event.virtual)}">
            <!-- Card Header -->
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="font-semibold text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                        {event.title}
                    </h3>
                    <p class="text-gray-600 flex items-center gap-2 mt-1">
                        <Calendar size={16} />
                        {event.date}
                    </p>
                </div>
                <span class="{event.virtual 
                    ? 'bg-blue-100 text-blue-800 border-blue-200' 
                    : 'bg-green-100 text-green-800 border-green-200'} 
                    text-sm px-4 py-1.5 rounded-full border font-medium">
                    {event.virtual ? 'Virtual' : 'In-Person'}
                </span>
            </div>
    
            <!-- Card Content -->
            <div class="space-y-4">
                <div class="flex flex-col gap-3 p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                    <div class="flex items-center gap-3 text-gray-600">
                        <div class="bg-gray-100 p-2 rounded-full">
                            <MapPin size={18} />
                        </div>
                        <span class="text-sm">{event.location}</span>
                    </div>
                    
                    <div class="flex items-center gap-3 text-gray-600">
                        <div class="bg-gray-100 p-2 rounded-full">
                            <Users size={18} />
                        </div>
                        <span class="text-sm">{event.participants} participants</span>
                    </div>
    
                    {#if !event.virtual && event.transport}
                        <div class="flex items-center gap-3 text-blue-600">
                            <div class="bg-blue-100 p-2 rounded-full">
                                <Calendar size={18} />
                            </div>
                            <div class="text-sm">
                                <span class="font-medium">Transportation Available</span>
                                <br>
                                <span class="text-gray-600">
                                    {event.transport.canDrive} offering rides · {event.transport.needRide} need rides
                                </span>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
    
            <!-- Card Actions -->
            <div class="mt-6 flex gap-3">
                <button class="flex-1 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 
                            transition-colors shadow-sm hover:shadow-md font-medium">
                    Join Activity
                </button>
                {#if !event.virtual}
                    <button class="px-6 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 
                                transition-colors shadow-sm hover:shadow-md font-medium text-gray-700">
                        Details
                    </button>
                {/if}
            </div>
    
            <!-- Decorative corner accent -->
            <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div class="absolute top-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8
                            {event.virtual ? 'bg-blue-100' : 'bg-green-100'}">
                </div>
            </div>
        </div>
    {/each}
        {/if}
        </div>
        </div>
  
        <!-- Right Column - Sidebar -->
        <div class="lg:w-80">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
  
  <Footer />