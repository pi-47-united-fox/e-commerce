<template>
<div class="pl-0">
    <Navbar></Navbar>
    <div class="container pt-5" style="padding-top:20px;">
      <div class="columns box pl-0 pt-0 pb-0">
    <SidebarCart></SidebarCart>
    <WishlistList></WishlistList>
  </div>
    </div>
  </div>
</template>

<script>
import WishlistList from '../components/WishlistList'
import SidebarCart from '../components/SidebarCart'
import Navbar from '../components/Navbar'

export default {
  name: 'Wishlists',
  components: {
    Navbar,
    WishlistList,
    SidebarCart
  }
}
</script>

<style>
</style>
