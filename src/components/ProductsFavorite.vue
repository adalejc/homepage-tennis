<template>
  <div class="product-list-container">
    <div v-for="item in productList">
      <div class="item-image">
        <img :src="`${item.img}`" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          id: 1,
          img: 'https://i.ibb.co/GCsxjQQ/group-10.jpg'
        },
        {
          id: 1,
          img: 'https://i.ibb.co/GCsxjQQ/group-10.jpg'
        },
        {
          id: 1,
          img: 'https://i.ibb.co/GCsxjQQ/group-10.jpg'
        }
      ]
    }
  }
}
</script>
<style>
.product-list-container {
  margin: 1rem;
  display: flex;
  overflow: auto;
}
 .product-list-container .item-image {
    margin: 0 0 0 1rem;
 }
</style>