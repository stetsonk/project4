<!-- src/lib/components/Sidebar.svelte -->
<script>
    import { Calendar, Clock, Sun, Moon, Phone, Bell, Users } from 'lucide-svelte';
    import { textSize, increaseTextSize, decreaseTextSize } from '$lib/stores/textSize.js';
    
    let currentTime = new Date();
    let timeString = '';
    let dateString = '';
    
    setInterval(() => {
      currentTime = new Date();
      timeString = currentTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      dateString = currentTime.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
    }, 1000);
  
    const upcomingToday = [
      { time: '2:00 PM', title: 'Book Club Meeting' },
      { time: '4:30 PM', title: 'Evening Walk Group' }
    ];
  
    const weather = {
      temp: '72°F',
      condition: 'Sunny',
      high: '75°F',
      low: '65°F'
    };
  
    const notifications = [
      { type: 'transport', message: 'Your ride is confirmed for tomorrow at 1:30 PM' },
      { type: 'event', message: 'New chess club meeting added for next week' }
    ];

    // Format text size for display
    $: textSizePercent = Math.round($textSize * 100);
  </script>
  
  <div class="w-80 bg-gradient-to-b from-gray-50 to-white border-l border-gray-200 overflow-y-auto sticky top-0 h-screen" style="font-size: {$textSize}rem">    <!-- Time and Date -->
    <div class="p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div class="text-3xl font-bold text-blue-800 mb-2">{timeString}</div>
      <div class="text-gray-600 font-medium">{dateString}</div>
    </div>
  
    <!-- Weather Widget -->
    <div class="p-6 border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
      <h3 class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <Sun class="text-yellow-500" />
        Today's Weather
      </h3>
      <div class="bg-white p-4 rounded-xl shadow-sm">
        <div class="flex justify-between items-center mb-2">
          <div class="text-3xl font-bold text-gray-800">{weather.temp}</div>
          <div class="text-gray-600 font-medium">{weather.condition}</div>
        </div>
        <div class="text-sm text-gray-600 flex justify-between">
          <span>High: {weather.high}</span>
          <span>Low: {weather.low}</span>
        </div>
      </div>
    </div>
  
    <!-- Today's Activities -->
    <div class="p-6 border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
      <h3 class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <Calendar class="text-blue-600" />
        Today's Activities
      </h3>
      {#if upcomingToday.length > 0}
        <div class="space-y-3">
          {#each upcomingToday as activity}
            <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="bg-blue-100 p-2 rounded-lg">
                <Clock class="text-blue-600" size={18} />
              </div>
              <div>
                <div class="font-medium text-gray-800">{activity.time}</div>
                <div class="text-gray-600">{activity.title}</div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-gray-600">No activities scheduled for today</p>
      {/if}
    </div>
  
    <!-- Quick Actions -->
    <div class="p-6 border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
      <h3 class="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
      <div class="space-y-3">
        <button class="w-full flex items-center gap-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md">
          <Phone size={20} />
          <span class="font-medium">Call for Support</span>
        </button>
        <button class="w-full flex items-center gap-3 bg-gradient-to-br from-green-600 to-green-700 text-white p-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-sm hover:shadow-md">
          <Users size={20} />
          <span class="font-medium">Find Activity Partner</span>
        </button>
      </div>
    </div>
  
    <!-- Notifications -->
    <div class="p-6 hover:bg-blue-50/50 transition-colors">
      <h3 class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <Bell class="text-blue-600" />
        Recent Updates
      </h3>
      <div class="space-y-3">
        {#each notifications as notification}
          <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p class="text-gray-600">{notification.message}</p>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Accessibility Controls -->
    <div class="p-6 mt-auto border-t border-gray-200 bg-gray-50">
        <div class="space-y-3">
          <div>
            <label class="flex items-center gap-2 text-gray-700 font-medium mb-2">
              Text Size ({textSizePercent}%)
            </label>
            <div class="flex gap-2">
              <button 
                class="p-2 bg-white rounded-lg hover:bg-blue-50 border border-gray-200 
                       transition-colors w-10 font-medium text-gray-600 disabled:opacity-50 
                       disabled:cursor-not-allowed"
                on:click={decreaseTextSize}
                disabled={$textSize <= 0.8}
                title="Decrease text size"
              >
                A-
              </button>
              <div class="flex-1 h-10 bg-gray-100 rounded-lg relative">
                <div 
                  class="absolute h-full bg-blue-100 rounded-lg transition-all"
                  style="width: {(($textSize - 0.8) / 0.7) * 100}%"
                ></div>
              </div>
              <button 
                class="p-2 bg-white rounded-lg hover:bg-blue-50 border border-gray-200 
                       transition-colors w-10 font-medium text-gray-600 disabled:opacity-50 
                       disabled:cursor-not-allowed"
                on:click={increaseTextSize}
                disabled={$textSize >= 1.5}
                title="Increase text size"
              >
                A+
              </button>
            </div>
          </div>
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 text-gray-700 font-medium">
            <Moon size={18} />
            <span>Dark Mode</span>
          </label>
          <button class="w-12 h-6 bg-gray-200 rounded-full relative transition-colors hover:bg-gray-300"></button>
        </div>
      </div>
    </div>
  </div>