<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src='/img/toea-logo.png' class="h-10" alt="TOEA Icon" />
            <span class="self-center text-xs max-w-xs font-semibold whitespace-nowrap text-gray-700"><b>TESDA Organizational<br>Excellence Awards</b></span>
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
              <li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Advisories</a></li>
              <li><NuxtLink to="/photo-galleries" class="block py-2 px-3 text-gray-900">Photo Galleries</NuxtLink></li>
              <li><NuxtLink to="/over-the-years" class="block py-2 px-3 text-gray-900">Over The Years</NuxtLink></li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="bg-blue-700 text-white text-center py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-semibold mb-4">Latest Advisories</h1>
          <p class="text-xl mb-8">Stay updated with the latest advisories and announcements from TESDA.</p>
          <button class="bg-white text-blue-700 font-medium rounded-lg py-2 px-6 hover:bg-gray-100">Explore Now</button>
        </div>
      </section>
  
      <!-- Advisory Cards Section -->
      <section id="advisories" class="container mx-auto py-16 px-4">
        <h2 class="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-10">Recent Advisories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Advisory Card 1 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/500x300" alt="Advisory Image" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Advisory Title</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">A brief summary of the advisory content goes here. This will provide the user a preview of what the advisory is about.</p>
              <a href="#" class="text-blue-700 font-medium hover:underline">Read More</a>
            </div>
          </div>
          <!-- Advisory Card 2 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/500x300" alt="Advisory Image" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Advisory Title</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">A brief summary of the advisory content goes here. This will provide the user a preview of what the advisory is about.</p>
              <a href="#" class="text-blue-700 font-medium hover:underline">Read More</a>
            </div>
          </div>
          <!-- Advisory Card 3 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/500x300" alt="Advisory Image" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Advisory Title</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">A brief summary of the advisory content goes here. This will provide the user a preview of what the advisory is about.</p>
              <a href="#" class="text-blue-700 font-medium hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Image Carousel Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-10">Gallery</h2>
          <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://via.placeholder.com/1200x500" alt="Advisory Image" class="d-block w-full">
              </div>
              <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x500" alt="Advisory Image" class="d-block w-full">
              </div>
              <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x500" alt="Advisory Image" class="d-block w-full">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
  
      <!-- Footer Section -->
      <footer class="bg-gray-900 text-white py-10">
        <div class="container mx-auto text-center">
          <p>&copy; 2025 TESDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { Modal } from 'flowbite'
  import { useFlowbite } from '~/composables/useFlowbite';
  
  onMounted(() => {
      useFlowbite(() => {
          // setup available elements
          const $buttonElement = document.querySelector('#button');
          const $modalElement = document.querySelector('#modal');
          const $closeButton = document.querySelector('#closeButton');
  
          // set modal options
          const modalOptions = {
              backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40'
          }
  
          // create a new modal instance
          if ($modalElement) {
              const modal = new Modal($modalElement, modalOptions);
  
              // set event listeners for the button to show the modal
              $buttonElement.addEventListener('click', () => modal.toggle());
              $closeButton.addEventListener('click', () => modal.hide());
          }
      })
  })  </script>
  
  <style scoped>
  /* Custom styles for the landing page */
  .bg-blue-700 {
    background-color: #2563eb; /* Custom blue */
  }
  
  .text-3xl {
    font-size: 1.875rem; /* Adjust font size for headings */
  }
  
  .text-4xl {
    font-size: 2.25rem; /* Larger font for the title */
  }
  
  .bg-gray-50 {
    background-color: #f9fafb; /* Light gray background for sections */
  }
  
  .text-lg {
    font-size: 1.125rem; /* Adjust text size for readability */
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  }
  
  .carousel-inner img {
    width: 100%;
    height: auto;
  }
  </style>
  