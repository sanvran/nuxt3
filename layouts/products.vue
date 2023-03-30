<template>
   <div>
      <header class="shadow-sm bg-white">
         <nav class="container mx-auto p-4 flex justify-between">
            <h2> LOGO </h2>
         </nav>
      </header>
      <!-- start page content body -->
      <div class="container mx-auto p-4">
         <slot />
      </div>
      <!-- content page body end-->
   </div>
   <!-- start footer -->
   <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
         <li>
            <NuxtLink to="/">Home</NuxtLink>
         </li>
         <li>
            <NuxtLink to="/products">Products</NuxtLink>
         </li>
         <li>
            <NuxtLink to="/profile">Profile</NuxtLink>
         </li>
      </ul>
      <div> &copy; {{ new Date().getFullYear() }} All Rights Reserved custom layout </div>
   </footer>
   <!-- footer end -->
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
   color: white;
   background: #2196F3;
   border-radius: 5px;
   padding: 1px;
}
</style>