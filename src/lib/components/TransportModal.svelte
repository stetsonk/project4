<!-- src/lib/components/TransportModal.svelte -->
<script>
    export let show = false;
    export let transportOptions;
    export let onClose;
    export let onSubmit;
    
    let selectedTransport = '';
    let additionalNotes = '';
  
    function handleSubmit() {
      onSubmit({ selectedTransport, additionalNotes });
      selectedTransport = '';
      additionalNotes = '';
    }
  </script>
  
  {#if show}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 class="text-xl font-medium mb-4">Transportation Preferences</h3>
        
        <div class="mb-4">
          <label class="block mb-2">What's your transportation situation?</label>
          {#each transportOptions as option}
            <label class="flex items-center gap-2 mb-2">
              <input 
                type="radio" 
                name="transport" 
                value={option.id}
                bind:group={selectedTransport}
              >
              {option.label}
            </label>
          {/each}
        </div>
  
        <div class="mb-4">
          <label class="block mb-2">Additional Notes</label>
          <textarea 
            bind:value={additionalNotes}
            class="w-full border rounded-md p-2"
            rows="3"
            placeholder="Add any specific requirements or offers..."
          ></textarea>
        </div>
  
        <div class="flex justify-end gap-3">
          <button 
            class="px-4 py-2 border rounded-md"
            on:click={onClose}
          >
            Cancel
          </button>
          <button 
            class="px-4 py-2 bg-blue-600 text-white rounded-md"
            on:click={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  {/if}