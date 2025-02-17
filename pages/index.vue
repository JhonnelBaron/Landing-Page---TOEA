<template>
    <div>
      <!-- Navigation Bar -->
      <!-- <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src='/img/toea-logo.png' class="h-10" alt="TOEA Icon" />
            <span class="self-center text-xs max-w-xs font-semibold whitespace-nowrap text-gray-700"><b>TESDA Organizational<br>Excellence Awards</b></span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">TVET Dashboard</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <!-- <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Home</a></li>
              <li><NuxtLink to="/reports-and-writeups" class="block py-2 px-3 text-gray-900">Reports and Write-ups</NuxtLink></li>
              <li><NuxtLink to="/advisories" class="block py-2 px-3 text-gray-900">Advisories</NuxtLink></li>
              <li><NuxtLink to="/photo-galleries" class="block py-2 px-3 text-gray-900">Photo Galleries</NuxtLink></li>
              <li><NuxtLink to="/over-the-years" class="block py-2 px-3 text-gray-900">Over The Years</NuxtLink></li>
            </ul>
          </div> -->
        <!-- </div>
      </nav> --> 
      <Main />
      <About />
      <Categories />
      <!-- <Bro /> -->
      <Topics />
      <Action />
      <Reports />
      <Advsries />
      <PhotoGllry />
      <OverTY />

    </div>



  </template>
  
  <script setup>
//   import { onMounted } from 'vue'
// import { useFlowbite } from '~/composables/useFlowbite';

// // initialize components based on data attribute selectors
// onMounted(() => {
//     useFlowbite(() => {
//         initFlowbite();
//     })
// })
  import { onMounted } from 'vue'
  import { Modal } from 'flowbite'
  import Main from '@/components/Main.vue';
  import { useFlowbite } from '~/composables/useFlowbite';
import Action from '~/components/Action.vue';
import Reports from '~/components/Reports.vue';
import PhotoGllry from '~/components/Photo-gllry.vue';
import OverTY from '~/components/OverTY.vue';
import Categories from '~/components/Categories.vue';
import Bro from '~/components/Bro.vue';
  
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
  