<!-- src/lib/components/EventCard.svelte -->
<script>
    import { Heart, Users, Calendar, Car, MapPin, Phone, AlertTriangle } from 'lucide-svelte';
    
    export let event;
    export let mobilityLevels;
    export let onTransportClick;
  </script>
  
  <div class="border rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div class="p-6">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="text-xl font-medium">{event.title}</h3>
          <p class="text-gray-600">{event.date}</p>
        </div>
        <div class="flex items-center gap-2">
          {#if event.virtual}
            <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Virtual</span>
          {:else}
            <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">In-Person</span>
          {/if}
        </div>
      </div>
  
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p class="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin size={18} />
            {event.location}
          </p>
          {#if !event.virtual}
            <p class="flex items-center gap-2 text-gray-600 mb-2">
              <AlertTriangle size={18} />
              Mobility Level: {mobilityLevels[event.mobility]}
            </p>
          {/if}
        </div>
        
        <div>
          <p class="flex items-center gap-2 text-gray-600 mb-2">
            <Users size={18} />
            {event.participants} participants
          </p>
          <p class="flex items-center gap-2 text-gray-600">
            <Phone size={18} />
            Coordinator: {event.coordinator} ({event.coordinatorPhone})
          </p>
        </div>
      </div>
  
      {#if !event.virtual && event.transport}
        <div class="bg-blue-50 p-4 rounded-md mb-4">
          <h4 class="font-medium mb-2 flex items-center gap-2">
            <Car size={18} />
            Transportation Status
          </h4>
          <div class="grid grid-cols-2 gap-4">
            <p class="text-sm">🚗 {event.transport.canDrive} people offering rides</p>
            <p class="text-sm">🙋‍♂️ {event.transport.needRide} people need rides</p>
          </div>
        </div>
      {/if}
  
      <div class="flex gap-3 mt-4">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Join Activity
        </button>
        {#if !event.virtual}
          <button 
            class="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
            on:click={() => onTransportClick(event)}
          >
            Transportation
          </button>
        {/if}
      </div>
    </div>
  </div>