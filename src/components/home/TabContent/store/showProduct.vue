<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="media">
            <img src="..." class="align-self-start mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">product 1</h5>
              <!-- <p>Product Info：</p> -->
              <ul>
                <li>Product Name： {{ productName }}</li>
                <li>Photo：</li>
                <li>Upload Date：</li>
                <li>Price：</li>
              </ul>
              <button
                type="button"
                class="btn btn-dark"
                @click="editItem"
                style="margin: 20px"
              >
                EDIT
              </button>
              <button type="button" class="btn btn-light" @click="deleteItem">
                DELETE
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 offset-md-4">
          <div class="media">
            <div class="media-body">
              <p>Product Info：</p>
              <ul>
                <li>Product Name <input type="text" v-model="newProduct" /></li>
                <li>Photo <input type="file" /></li>
                <li>Upload Date <input type="date" /></li>
                <li>
                  Price <input type="number" oninput="if(value<0)value=0" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<style scoped lang="scss">
</style>
<script setup>
function editItem() {
  console.log(this.newProduct);
  this.productName = this.newProduct;
  this.newProduct = "";
}
function deleteItem() {
  this.productName = "";
}
</script>
