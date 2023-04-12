<template>
   <div>
      <div class="bg-white">
         <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
               <span class="material-symbols-rounded"> chevron_right </span>
               <span class="material-symbols-rounded">storefront </span> Products also purchased
            </h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               <div v-for="(item, i) in product" class="group relative" :key="item.id">
                  <div
                     class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                     <img :src="item.image" alt="Front of men&#039;s Basic Tee in black."
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                  </div>
                  <div class="mt-4 flex justify-between">
                     <div>
                        <h3 class="text-sm text-gray-700">
                           <NuxtLink :to="`products/${item.id}`">
                              <span aria-hidden="true" class="absolute inset-0"></span> {{ item.title }}
                           </NuxtLink>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500 ">Rating: {{ item.rating.rate }}</p>
                     </div>
                     <p class="text-sm font-medium text-gray-900">Rs.{{ item.price }} </p>
                  </div>
               </div>
               <!-- More products... -->
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>

definePageMeta({
   layout: 'products'
})
useHead({
   title: "Products"
})
const endPont = `https://fakestoreapi.com/products`
const { data: product, error, pending } = await useFetch(endPont)
// const { data: product, error, pending } = await useLazyFetch(endPont)
if (error) {
   console.log(error.value?.statusMessage)
}

</script>

<style scoped></style>