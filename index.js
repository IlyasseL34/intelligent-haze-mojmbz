// Creating header and its content
const header = document.createElement('header')
header.classList.add('fixed', 'inset-x-0', 'top-0', 'z-50', 'bg-white', 'shadow-md')
header.innerHTML = `
  <div class="container mx-auto px-6 py-3 flex justify-between items-center">
    <div class="flex items-center">
      <button type="button"
              class="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <a href="#" class="ml-3">
        <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      </a>
    </div>
    <nav class="hidden md:flex md:items-center md:space-x-6">
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">Mac</a>
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">iPad</a>
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">iPhone</a>
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">Watch</a>
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">TV</a>
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">Music</a>
      <a href="#" class="py-2 text-gray-900 hover:text-indigo-600">Support</a>
    </nav>
    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
        Sign in
      </a>
      <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
        Sign up
      </a>
    </div>
  </div>
  <div class="md:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        Mac
      </a>
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        iPad
      </a>
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        iPhone
      </a>
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        Watch
      </a>
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        TV
      </a>
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        Music
      </a>
      <a href="#" class="block py-2 leading-5 px-3 text-base font-medium text-gray-900 transition-colors duration-150 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
        Support
      </a>
    </div>
    <div class="pt-4 pb-3 border-t border-gray-200">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-gray-800">Tom Cook</div>
          <div class="text-sm font-medium text-gray-500">tom@example.com</div>
        </div>
        <button type="button"
                class="ml-auto bg-gray-100 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.88 19.88A10 10 0 005.12 5.12"></path>
          </svg>
        </button>
      </div>
      <div class="mt-3 px-2 space-y-1">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-indigo-600">Your Profile</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-indigo-600">Settings</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-indigo-600">Sign out</a>
      </div>
    </div>
  </div>
`

// Creating the main content
const main = document.createElement('main')
main.classList.add('pt-16', 'pb-8')
main.innerHTML = `
  <div class="pb-16">
    <section class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-100"></div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="relative z-10 flex flex-col items-center pt-24 sm:pt-32 pb-12 sm:pb-20">
          <h1 class="text-5xl sm:text-6xl font-black text-center text-gray-900 leading-none tracking-tight mb-4">iPhone 13</h1>
          <p class="text-2xl sm:text-3xl text-center text-gray-500 font-medium">Your new superpower</p>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Meet the new iPhone 13 Pro</h2>
          <p class="mt-4 max-w-2xl text-xl text-gray-500">Super Retina XDR. Display with ProMotion. A15 Bionic, the world's fastest smartphone chip. Exceptional low-light photography with Night mode on all cameras. Cinematic mode, which adds shallow depth of field and shifts focus automatically. Superfast 5G. Durable design and the best water resistance ever in an iPhone. So much more. It's a Pro camera system, Pro performance, Pro display, and Pro design. It's the iPhone 13 Pro.</p>
          <div class="mt-12">
            <a href="#" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Learn more&nbsp;&rarr;</a>
          </div>
        </div>
      </div>
      <div class="mt-16 relative sm:mt-24 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="w-full object-cover sm:rounded-lg lg:rounded-none lg:shadow-none lg:ml-6" src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-image-tile-01.jpg" alt="">
      </div>
    </section>

    <section class="py-16 sm:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">The newest Apple Accessories</h2>
          <a href="#" class="mt-4 flex-shrink-0 text-base font-medium text-indigo-600 hover:text-indigo-500 sm:mt-0">Shop accessories&nbsp;&rarr;</a>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-01.jpg" alt="Accessories">
            </div>
            <a href="#" class="mt-4 block font-medium text-gray-900">Accessories</a>
            <p class="mt-1 text-sm text-gray-500">8 Products</p>
          </div>

          <div class="group relative">
            <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-02.jpg" alt="Games">
            </div>
            <a href="#" class="mt-4 block font-medium text-gray-900">Games</a>
            <p class="mt-1 text-sm text-gray-500">23 Products</p>
          </div>

          <div class="group relative">
            <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-03.jpg" alt="Gadgets">
            </div>
            <a href="#" class="mt-4 block font-medium text-gray-900">Gadgets</a>
            <p class="mt-1 text-sm text-gray-500">10 Products</p>
          </div>

          <div class="group relative">
            <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-04.jpg" alt="Home">
            </div>
            <a href="#" class="mt-4 block font-medium text-gray-900">Home</a>
            <p class="mt-1 text-sm text-gray-500">24 Products</p>
          </div>
        </div>
      </div>
    </section>
  </div>
`

// Adding header and main content to the app div
const appDiv = document.getElementById('app')
appDiv.appendChild(header)
appDiv.appendChild(main)