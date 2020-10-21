<template>
<li class="media d-flex align-items-center bg-white rounded p-2 shadow my-3">
    <img src="" class="mr-3 rounded" alt="Product's photo" width="100">
    <div class="media-body p-1">
        <button type="button" class="close float-right" aria-label="Close"
        v-on:click.prevent="deleteFavorite(favorite.PlantId)">
        <span aria-hidden="true">&times;</span>
        </button>
        <div class="text-left">
            <h5 class="mt-0 mb-0 text-dark">Product Name</h5> 
        </div>
        <div class="text-left mt-2 d-flex flex-row justify-content-start">
            <h5 class="text-muted mr-1">Product stock</h5>
            <button type="button" class="close mx-1"><i class="fas fa-plus"></i></button>
            <button type="button" class="close"><i class="fas fa-minus"></i></button>
        </div>
    </div>
</li>
</template>

<script>
export default {
    name: 'CartDetail'
}
</script>

<style>

</style>
