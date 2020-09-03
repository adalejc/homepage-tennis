<template>
  <div id="app">
    <div class="container">
      <MenuSlider></MenuSlider>
      <MainHeader></MainHeader>
      <ProductList></ProductList>
      <ProductImages></ProductImages>
      <ProductsFavorite></ProductsFavorite>
      <ImageBottom></ImageBottom>
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
import MenuSlider from "@/components/MenuSlider";
import MainHeader from "@/components/MainHeader";
import ProductList from "@/components/ProductList";
import ProductImages from "@/components/ProductImages";
import ProductsFavorite from "@/components/ProductsFavorite";
import ImageBottom from "@/components/ImageBottom";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    MenuSlider,
    MainHeader,
    ProductList,
    ProductImages,
    ProductsFavorite,
    ImageBottom,
    Footer
  }
}
</script>

<style>
#app {
  font-family: HelveticaNeue,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  flex-direction: column;
}
.item {
  width: 100%;
  height: 25%;
  position: a;
}

body {
  margin: 0;
  padding: 0;
}
</style>
