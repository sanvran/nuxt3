<template>
   <div>
      <header>
         <nav>
            <ul>
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
                  <NuxtLink to="/profile">Profile</NuxtLink>
               </li>
            </ul>
         </nav>
      </header>
      <!-- start page content body -->
      <div>
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