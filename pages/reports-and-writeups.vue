<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src='/img/toea-logo.png' class="h-10" alt="TOEA Icon" />
            <span class="self-center text-xs font-semibold text-gray-700 dark:text-white">
              <b>TESDA Organizational<br>Excellence Award</b>
            </span>
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
                <li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Reports and Write-ups</a></li>
                <li><NuxtLink to="/advisories" class="block py-2 px-3 text-gray-900">Advisories</NuxtLink></li>
                <li><NuxtLink to="/photo-galleries" class="block py-2 px-3 text-gray-900">Photo Galleries</NuxtLink></li>
                <li><NuxtLink to="/over-the-years" class="block py-2 px-3 text-gray-900">Over The Years</NuxtLink></li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Report Content Section -->
      <section class="container mx-auto py-16 px-4">
        <!-- Report Header -->
        <header class="text-center mb-10">
          <h1 class="text-4xl font-semibold text-gray-900 dark:text-white">TESDA Report: Organizational Excellence</h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">A detailed report on the progress and outcomes of TESDA’s Organizational Excellence initiatives.</p>
        </header>
  
        <!-- Carousel for Images -->
        <div class="mb-10">
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <!-- <img src="/img/toea-logo.png" class="d-block w-full" alt="Slide 1">
              </div>
              <div class="carousel-item">
                <img src="/img/toea-logo.png" class="d-block w-full" alt="Slide 2">
              </div>
              <div class="carousel-item">
                <img src="/img/toea-logo.png" class="d-block w-full" alt="Slide 3"> -->
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
  
        <!-- Report Objectives -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Objectives</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">Our primary objectives are to evaluate the ongoing projects, identify key improvements, and propose actionable strategies for further excellence in all divisions of TESDA.</p>
        </section>
  
        <!-- Detailed Report -->
        <section class="mb-12">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Detailed Report</h2>
          <div class="space-y-6">
            <p class="text-lg text-gray-700 dark:text-gray-300">This section covers detailed evaluations of various departments, including performance metrics, challenges, and key achievements over the last quarter.</p>
  
            <div class="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Department 1: Innovation</h3>
              <p class="text-lg text-gray-700 dark:text-gray-300">The innovation department has introduced several new tools to streamline processes, with a 25% improvement in efficiency observed since the last quarter.</p>
            </div>
  
            <div class="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Department 2: Development</h3>
              <p class="text-lg text-gray-700 dark:text-gray-300">Significant progress has been made in project development, with a 30% increase in successful project completions compared to last year.</p>
            </div>
  
          </div>
        </section>
  
        <!-- Closing Remarks -->
        <section>
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Closing Remarks</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">We are committed to continuing the pursuit of excellence and addressing the challenges ahead. With ongoing dedication, TESDA aims to remain at the forefront of organizational excellence in the Philippines.</p>
        </section>
      </section>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { Modal } from 'flowbite'
  import { useFlowbite } from '~/composables/useFlowbite';
  
  onMounted(() => {
      useFlowbite(() => {
          const $buttonElement = document.querySelector('#button');
          const $modalElement = document.querySelector('#modal');
          const $closeButton = document.querySelector('#closeButton');
  
          const modalOptions = {
              backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40'
          }
  
          if ($modalElement) {
              const modal = new Modal($modalElement, modalOptions);
              $buttonElement.addEventListener('click', () => modal.toggle());
              $closeButton.addEventListener('click', () => modal.hide());
          }
      })
  })
  </script>
  
  <style scoped>
  /* Custom styles for the report template */
  .container {
    max-width: 1200px;
  }
  
  .bg-blue-700 {
    background-color: #2563eb; /* Custom blue */
  }
  
  .bg-gray-50 {
    background-color: #f9fafb; /* Light gray background for sections */
  }
  
  .text-lg {
    font-size: 1.125rem; /* Adjust text size for readability */
  }
  
  .text-3xl {
    font-size: 1.875rem; /* Adjust font size for headings */
  }
  
  .text-4xl {
    font-size: 2.25rem; /* Larger font for the title */
  }
  
  .font-semibold {
    font-weight: 600; /* Slightly bold font weight */
  }
  
  .rounded-lg {
    border-radius: 0.5rem; /* Rounded corners for sections */
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  }
  
  /* Dark Mode Enhancements */
  .dark .bg-gray-900 {
    background-color: #1f2937; /* Darker background for the dark mode */
  }
  
  .dark .text-white {
    color: #ffffff; /* White text for dark mode */
  }
  
  .dark .text-gray-300 {
    color: #d1d5db; /* Light gray text for dark mode */
  }
  </style>
  