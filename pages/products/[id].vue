<template>
   <div>
      <h1>Produc route id: {{ id }} </h1>
      <div class="bg-white">
         <div class="pt-6">
            <nav aria-label="Breadcrumb">
               <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li class="text-sm">
                     <NuxtLink to="/products" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{
                        'Products' }} </NuxtLink>
                  </li> / <li class="text-sm">
                     <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{
                        product.category }} </a>
                  </li>
               </ol>
            </nav>
            <!-- Image gallery -->
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
               <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                  <img :src="product.image" alt="Two each of gray, white, and black shirts laying flat."
                     class="h-full w-full object-cover object-center">
               </div>
               <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                     <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                        alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                  </div>
                  <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                     <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                        alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                  </div>
               </div>
               <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                     alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
               </div>
            </div>
            <!-- Product info -->
            <div
               class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
               <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"> {{ product.title }} </h1>
               </div>
               <!-- Options -->
               <div class="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 class="sr-only">Product information</h2>
                  <p class="text-3xl tracking-tight text-gray-900">Rs. {{ product.price }} </p>
               </div>
               <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  <!-- Description and details -->
                  <div>
                     <h3 class="sr-only">Description</h3>
                     <div class="space-y-6">
                        <p class="text-base text-gray-900">{{ product.description }}</p>
                     </div>
                  </div>
                  <div class="mt-10">
                     <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
                     <div class="mt-4">
                        <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                           <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
                           <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span>
                           </li>
                           <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                           <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
definePageMeta({
   layout: 'products'
})
//  id must be match acording to the file name like: [id].vue
const { id } = useRoute().params
const endPoint = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch(endPoint, { key: id })

</script>

<style scoped></style>