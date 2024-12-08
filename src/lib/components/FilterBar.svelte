<!-- src/lib/components/FilterBar.svelte -->
<script>
    export let onFilterChange = () => {};
  </script>
  
  <div class="mb-6 flex flex-wrap gap-4">
    <select class="border rounded-md px-3 py-2" on:change={() => onFilterChange('activity')}>
      <option>All Activities</option>
      <option>In-Person Only</option>
      <option>Virtual Only</option>
    </select>
    
    <select class="border rounded-md px-3 py-2" on:change={() => onFilterChange('mobility')}>
      <option>All Mobility Levels</option>
      <option>Easy Access</option>
      <option>Moderate Activity</option>
      <option>Active</option>
    </select>
    
    <select class="border rounded-md px-3 py-2" on:change={() => onFilterChange('transport')}>
      <option>All Transportation</option>
      <option>Rides Available</option>
      <option>Public Transit Access</option>
    </select>
  </div>