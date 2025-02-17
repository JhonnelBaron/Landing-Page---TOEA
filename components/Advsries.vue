<template>
    <div>
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
    </div>
</template>

<script setup>

</script>

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