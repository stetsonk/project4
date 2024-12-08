<!-- src/lib/components/Footer.svelte -->
<script>
    import { Phone, Mail, MapPin, AlertCircle, ChevronRight } from 'lucide-svelte';
  </script>
  
  <footer class="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
    <!-- Main Footer Content -->
    <div class="max-w-6xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Contact & Emergency -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-gray-800">Need Help?</h3>
          <ul class="space-y-4">
            <li>
              <a href="tel:555-123-4567" 
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 
                        transition-colors duration-200 group">
                <div class="bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 
                            transition-colors duration-200">
                  <Phone size={18} class="text-blue-600" />
                </div>
                (555) 123-4567
              </a>
            </li>
            <li>
              <a href="mailto:help@seniorconnect.com" 
                 class="flex items-center gap-3 text-gray-600 hover:text-blue-600 
                        transition-colors duration-200 group">
                <div class="bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 
                            transition-colors duration-200">
                  <Mail size={18} class="text-blue-600" />
                </div>
                help@seniorconnect.com
              </a>
            </li>
            <li>
              <div class="flex items-start gap-3 text-gray-600">
                <div class="bg-blue-50 p-2 rounded-full mt-1">
                  <MapPin size={18} class="text-blue-600" />
                </div>
                <div>
                  123 Community Way<br />
                  Cityville, ST 12345
                </div>
              </div>
            </li>
          </ul>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-gray-800">Activities</h3>
          <ul class="space-y-3">
            {#each ['Calendar', 'Interest Groups', 'Transportation', 'Virtual Events'] as link}
              <li>
                <a href="/{link.toLowerCase().replace(' ', '-')}" 
                   class="flex items-center text-gray-600 hover:text-blue-600 
                          transition-colors duration-200 group">
                  <ChevronRight size={16} 
                               class="opacity-0 -ml-4 group-hover:opacity-100 
                                      group-hover:ml-0 transition-all duration-200" />
                  {link}
                </a>
              </li>
            {/each}
          </ul>
        </div>
  
        <!-- Resources -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-gray-800">Resources</h3>
          <ul class="space-y-3">
            {#each ['Getting Started Guide', 'Accessibility Info', 'FAQ', 'Technical Support'] as link}
              <li>
                <a href="/{link.toLowerCase().replace(' ', '-')}" 
                   class="flex items-center text-gray-600 hover:text-blue-600 
                          transition-colors duration-200 group">
                  <ChevronRight size={16} 
                               class="opacity-0 -ml-4 group-hover:opacity-100 
                                      group-hover:ml-0 transition-all duration-200" />
                  {link}
                </a>
              </li>
            {/each}
          </ul>
        </div>
  
        <!-- Emergency Info -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-gray-800">Emergency</h3>
          <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl 
                      border border-red-200 shadow-lg hover:shadow-xl 
                      transition-shadow duration-300">
            <div class="flex items-start gap-3 text-red-700 mb-3">
              <AlertCircle size={20} />
              <span class="font-bold">24/7 Emergency Support</span>
            </div>
            <p class="text-red-600 mb-2 text-sm">For immediate assistance:</p>
            <p class="font-bold text-red-700 text-xl">(555) 911-0000</p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <div class="flex flex-wrap gap-6 justify-center md:justify-start">
            {#each ['Privacy Policy', 'Terms of Use', 'Accessibility Statement'] as link}
              <a href="/{link.toLowerCase().replace(' ', '-')}" 
                 class="hover:text-blue-600 transition-colors duration-200">
                {link}
              </a>
            {/each}
          </div>
          <div class="text-sm">
            © {new Date().getFullYear()} Senior Community Connect. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>