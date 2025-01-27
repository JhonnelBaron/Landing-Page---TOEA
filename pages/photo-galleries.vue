<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src='/img/toea-logo.png' class="h-10" alt="TOEA Icon" />
            <span class="self-center text-xs max-w-xs font-semibold whitespace-nowrap text-gray-700"><b>TESDA Organizational<br>Excellence Award</b></span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><NuxtLink to="/" class="block py-2 px-3 text-gray-900">Home</NuxtLink></li>
              <li><NuxtLink to="/reports-and-writeups" class="block py-2 px-3 text-gray-900">Reports and Write-ups</NuxtLink></li>
              <li><NuxtLink to="/advisories" class="block py-2 px-3 text-gray-900">Advisories</NuxtLink></li>
              <li><NuxtLink to="/photo-galleries" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Photo Galleries</NuxtLink></li>
              <li><NuxtLink to="/over-the-years" class="block py-2 px-3 text-gray-900">Over The Years</NuxtLink></li>
            </ul>
          </div>
        </div>
      </nav>
  
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
  
      <!-- Footer Section -->
      <footer class="bg-gray-900 text-white py-10 mt-16">
        <div class="container mx-auto text-center">
          <p>&copy; 2025 TESDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
    import { defineComponent } from 'vue';
  </script>
  
  <style scoped>
    /* Animations for hero section */
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
  