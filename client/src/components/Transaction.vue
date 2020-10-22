<template>
  <div class="item col-lg-4">
    <div class="thumbnail card">
      <div class="img-event">
        <img
          class="group list-group-image img-fluid"
          :src="allIsPaid.Product.image_url"
          style="width: 300px; height: 170px"
          alt=""
        />
      </div>
      <div class="caption card-body">
        <h1 class="group card-title inner list-group-item-heading">
          {{ allIsPaid.Product.name }}
        </h1>
        <h5 class="group card-title inner list-group-item-heading">
          Quantity:
          <form> 
            <div class="form-group" style="display:flex; justify-content:center;">
              <input
                type="text"
                class="form-control form-control-sm"
                style="width: 90px"
                v-model="allIsPaid.quantity"
                disabled
              />
            </div>
          </form>
        </h5>
        <div class="row">
          <div class="col-6">
            <p class="lead">{{'Rp' + (allIsPaid.quantity * allIsPaid.Product.price).toLocaleString()}}</p>
          </div>
          <!-- <div class="col-6 ban-buttons">
            <a class="btn btn-course" href="" @click.prevent="removeCart(allIsPaid.ProductId)">Remove</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Transaction',
    props: ['allIsPaid']
}
</script>

<style>

</style>