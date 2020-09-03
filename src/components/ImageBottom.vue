<template>
  <div class="image-container">
    <img class="image" :src="`${imageUrl}`" alt="">
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: 'https://i.ibb.co/mR4f0Tt/action-athlete-ball-342361.jpg'
    }
  }
}
</script>
<style>
  .image-container {
    width: 100%;
  }

  .image-container .image {
    width: 100%;
  }
</style>