<template>
<div>
    <div class="container">
        <h1 class="my-5 text-center">Our products</h1>
    </div>
    <div class="container my-5">
        <div class="row">
            <ProductCard></ProductCard>
        </div>
    </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
    name: 'Content',
    components: {
        ProductCard,        
    }
}
</script>

<style>

</style>