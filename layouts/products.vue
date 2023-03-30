<template>
   <div>
      <header>
         <nav>
            <h2> LOGO </h2>
         </nav>
      </header>
      <!-- start page content body -->
      <div>
         <slot />
      </div>
      <!-- content page body end-->
   </div>
   <!-- start footer -->
   <footer>
      <ul>
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