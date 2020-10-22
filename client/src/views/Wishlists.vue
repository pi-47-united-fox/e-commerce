<template>
    <div class="container"> 
        <div class="row text-left ml-2 mt-2">
            <p class="">Home > Wishlist</p>
        </div>
        <hr>
        <h2>Your Wishlist</h2>
        <div class="row">
            <div class="col-3 sidebar">
            </div>
            <div class="col-9 bg-light">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <RowWishlist 
                        v-for="(wishlist, i) in wishlists" 
                        :wishlist="wishlist"
                        :key="wishlist.ProductId"
                        :count="i"
                        />
                        <!-- <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr> -->
                    </tbody>
                    </table>

            </div>
        </div>
    </div>
</template>

<script>
import RowWishlist from '@/components/RowWishlists.vue'
export default {
    name: 'Wishlist',
    components: {
        RowWishlist
    },
    computed: {
        wishlists () {
            return this.$store.state.wishlists
        }
    }

}
</script>

<style scoped>
 
.sidebar {
    background-image: url('../assets/wishlist-logo-2.png') ;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-y;
    min-height: 213px;

}
.container {
    min-height: 65vh;
}
</style>