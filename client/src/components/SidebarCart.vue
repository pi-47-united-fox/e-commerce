<template>
  <div class="column is-2 ml-0" style="background-color: #f6f1ed">
    <aside class="menu">
      <p class="menu-label">My Profile</p>
      <ul class="menu-list">
        <li>
          <a><i class="fas fa-users"></i> Profile</a>
        </li>
        <li>
          <a><i class="fas fa-coins"></i> Money</a>
        </li>
      </ul>
      <p class="menu-label">Shopping</p>
      <ul class="menu-list">
        <li>
          <router-link to="/checkout"><i class="fas fa-shopping-cart"></i> My Cart</router-link>
        </li>
        <li>
          <router-link to="/wishlists"><i class="fas fa-heart"></i> Wishlist</router-link>
        </li>
        <li>
          <router-link to="/transactions"><i class="fas fa-credit-card"></i> Transactions</router-link>
        </li>
      </ul>
    </aside>
  </div>
  <!--SIDE MENU END-->
</template>

<script>
export default {
  name: "SidebarCart",
  
};
</script>

<style>
</style>