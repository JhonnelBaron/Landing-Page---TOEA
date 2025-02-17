<template>
    <div>
        
      <div>
         <!-- Hero Section -->
      <section class="relative w-full h-96 bg-cover bg-center" style="background-image: url('/img/hero-image.jpg');">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative container mx-auto text-center text-white py-28">
          <h1 class="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Explore Our Stunning Photo Galleries</h1>
          <p class="text-xl animate__animated animate__fadeIn animate__delay-1s">Discover moments captured in time, showcasing excellence and achievements.</p>
          <button class="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out">Browse Galleries</button>
        </div>
      </section>
  
      <!-- Gallery Preview Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-semibold mb-8">Our Latest Photo Collections</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Gallery Item 1 -->
            <div class="relative group">
              <img src="#" alt="Gallery 1" class="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-semibold">View Gallery</span>
              </div>
            </div>
            <!-- Gallery Item 2 -->
            <div class="relative group">
              <img src="#" alt="Gallery 2" class="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-semibold">View Gallery</span>
              </div>
            </div>
            <!-- Gallery Item 3 -->
            <div class="relative group">
              <img src="#" alt="Gallery 3" class="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-semibold">View Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .animate__animated {
      animation-duration: 1s;
      animation-fill-mode: both;
    }
    .animate__fadeIn {
      animation-name: fadeIn;
    }
    .animate__delay-1s {
      animation-delay: 1s;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
</style>