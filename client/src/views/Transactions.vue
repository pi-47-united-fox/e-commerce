<template>
<div class="pl-0">
    <Navbar></Navbar>
    <div class="container pt-5" style="padding-top:20px;">
      <div class="columns box pl-0 pt-0 pb-0">
    <SidebarCart></SidebarCart>
    <TransactionList></TransactionList>
  </div>
    </div>
  </div>
</template>

<script>
import TransactionList from '../components/TransactionList'
import SidebarCart from '../components/SidebarCart'
import Navbar from '../components/Navbar'

export default {
  name: 'Transactions',
  components: {
    Navbar,
    TransactionList,
    SidebarCart
  }
}
</script>

<style>
</style>
