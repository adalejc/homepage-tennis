<template>
  <div class="product-list">
    <span class="raquetas-accesorios" v-on:click="clickProduct(item)" v-for="item in products">{{item.name}}</span>
    <div>
      <span class="about-product">{{description}}</span>
    </div>
    <div class="btn-product">
      <span class="rectangle-product">{{aboutProduct}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        products: [
          { id: '01',name: 'Tennis', description: 'Conoce nuestras tennis y aprende a jugar Tennis cómo un profesional.' },
          { id: '02', name: 'Raquetas', description: 'Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.'},
          { id: '03', name: 'Accesorios', description: 'Conoce nuestras accesorios y aprende a jugar Tennis cómo un profesional.'},
          { id: '04', name: 'Pelotas', description: 'Conoce nuestras pelotas y aprende a jugar Tennis cómo un profesional.'}
        ],
        description: 'Conoce nuestras tennis y aprende a jugar Tennis cómo un profesional.',
        aboutProduct: 'historia',

      }
    },
    methods: {
      clickProduct(item) {
        this.description = this.products[this.products.indexOf(item)].description;
      }
    },
    computed: {

    },
    props: {
    }
  }
</script>
<style>

  .product-list {
    height: 10rem;
    background-color: #f3f4f8;
    padding: 2rem;
  }

  .raquetas-accesorios {
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: -0.06px;
    color: #1e2335;
    margin-right: 1rem ;
  }

  .raquetas-accesorios:hover {
    color: #cbe346;
  }

  .about-product {
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: 0.51px;
    color: #787878;
  }
  .rectangle-product {
    width: 234px;
    height: 53px;
    border-radius: 26.5px;
    border: solid 1px #282e47;
    padding: 0.2rem;
    font-size: 0.8rem;
  }

  .btn-product {
    margin: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .raquetas-accesorios {
      font-size: 2rem;
    }
  }
</style>