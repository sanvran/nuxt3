<template>
   <div>
      <header class="shadow-sm bg-white">
         <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold"> Brand Log </NuxtLink>
            <ul class="flex gap-4">
               <li>
                  <NuxtLink to="/">Home</NuxtLink>
               </li>
               <li>
                  <NuxtLink to="/about">About</NuxtLink>
               </li>
               <li>
                  <NuxtLink to="/products">Products</NuxtLink>
               </li>
               <li>
                  <NuxtLink to="/profile" class="btn">Profile</NuxtLink>
               </li>
            </ul>
         </nav>
      </header>
      <!-- start page content body -->
      <div class="container mx-auto p-4">
         <slot />
      </div>
      <!-- content page body end-->
   </div>
   <!-- start footer -->
   <footer> &copy; {{ new Date().getFullYear() }} All Rights Reserved </footer>
   <!-- footer end -->
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
   color: blue
}
</style>