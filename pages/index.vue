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
              <li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Home</a></li>
              <li><NuxtLink to="/reports-and-writeups" class="block py-2 px-3 text-gray-900">Reports and Write-ups</NuxtLink></li>
              <li><NuxtLink to="/advisories" class="block py-2 px-3 text-gray-900">Advisories</NuxtLink></li>
              <li><NuxtLink to="/photo-galleries" class="block py-2 px-3 text-gray-900">Photo Galleries</NuxtLink></li>
              <li><NuxtLink to="/over-the-years" class="block py-2 px-3 text-gray-900">Over The Years</NuxtLink></li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="relative h-screen mt-16 pt-20 bg-cover bg-center" style="background-image: url('/img/bg-s2-home3.jpg');">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="flex justify-center items-center">
    <img src='/img/toea-logo.png' class="h-72 relative" alt="TOEA Icon" />
</div>

        <div class="flex items-center justify-center relative z-10 text-center text-white">
          <div class="max-w-4xl">
            <h1 class="text-5xl font-bold leading-tight mb-6">TESDA Organizational Excellence Award</h1>
            <p class="text-lg mb-8">Celebrating the best and brightest organizations dedicated to excellence in their respective fields.</p>
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section class="py-16 bg-gray-100 dark:bg-gray-800">
        <div class="max-w-screen-xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About the Award</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">The TESDA Organizational Excellence Award is a prestigious recognition for organizations excelling in their contribution to skill development, training, and enhancing the workforce of the country.</p>
          <button class="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg">
            Learn More
          </button>
        </div>
      </section>
  
      <!-- Main Topics Section -->
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Explore the Awards</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <!-- Reports and Write-ups -->
            <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Reports and Write-ups</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Read detailed reports and comprehensive write-ups of our evaluations and activities.</p>
              <button class="text-blue-700 hover:text-blue-800">Learn More</button>
            </div>
  
            <!-- Advisories -->
            <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Advisories</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Stay updated with the latest advisories and official announcements.</p>
              <button class="text-blue-700 hover:text-blue-800">Explore</button>
            </div>
  
            <!-- Photo Galleries -->
            <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Photo Galleries</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Browse through photos capturing memorable moments from the awards.</p>
              <button class="text-blue-700 hover:text-blue-800">View Photos</button>
            </div>
  
            <!-- Over the Years -->
            <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Over the Years</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Learn about the evolution of the TESDA Organizational Excellence Awards over time.</p>
              <button class="text-blue-700 hover:text-blue-800">Read More</button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="py-16 bg-blue-700 text-white text-center">
        <h2 class="text-3xl font-bold mb-6">Join the Excellence Movement</h2>
        <p class="text-lg mb-8">Start your journey today by being part of the most prestigious awards program in TESDA.</p>
        <button class="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg">Contact Us</button>
      </section>
  
      <div>
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

      <div>
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
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-10">AdvisoryGallery</h2>
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
      </div>

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

      <div>
        <section class="bg-gray-100 dark:bg-gray-900 py-16 mt-20">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">Over The Years</h2>
        
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="#" alt="Year 1" class="w-full h-60 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">2021</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">A brief description of the achievements and milestones.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="#" alt="Year 2" class="w-full h-60 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">2022</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">Key highlights and progress during the year.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="#" alt="Year 3" class="w-full h-60 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">2023</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">Notable events and success stories from this year.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>

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
  