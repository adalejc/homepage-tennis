<template>
  <div id="app">
    <div class="container">
      <MenuSlider></MenuSlider>
      <MainHeader></MainHeader>
      <ProductList></ProductList>
      <div class="product-overview-main">
        <div class="carousel-main">
          <ProductImages></ProductImages>
        </div>
        <div class="product-main">
          <ProductsFavorite></ProductsFavorite>
        </div>
      </div>
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
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .product-overview-main {
    display: flex;
  }

  .product-overview-main .carousel-main {
    width: 40%;
  }

  .product-overview-main .product-main {
    width: 60%;
  }
}

@media (min-width: 1024px) {
  .product-overview-main .carousel-main {
    width: 35%;
  }

  .product-overview-main .product-main {
    width: 65%;
  }
}
</style>
