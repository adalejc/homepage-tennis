<template>
  <div>
    <div>
      <carousel :adjustableHeight="true" :per-page="1" :mouse-drag="false">
        <slide v-for="product of productImages" v-bind:key="product.id">
          <div class="item-product" :style="{'background-image':`url(${product.img})`}">
            <div class="nuestras-raquetas">{{product.title}}</div>
            <div class="description">{{product.description}}</div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        productImages: [
          {
            id: 1,
            title: 'Nuestros Tennis',
            img: 'https://i.ibb.co/nfnL3V9/ball-color-court-1405355.jpg',
            description: 'Conoce nuestros tennis y aprende a jugar como Tennis como un profesional'
          },
          {
            id: 2,
            title: 'Nuestros Raquetas',
            img: 'https://i.ibb.co/nfnL3V9/ball-color-court-1405355.jpg',
            description: 'Conoce nuestros raquetas y aprende a jugar como Tennis como un profesional'
          },
          {
            id: 3,
            title: 'Nuestros Accesorios',
            img: 'https://i.ibb.co/nfnL3V9/ball-color-court-1405355.jpg',
            description: 'Conoce nuestros accesorios y aprende a jugar como Tennis como un profesional'
          },
          {
            id: 4,
            title: 'Nuestros Pelotas',
            img: 'https://i.ibb.co/nfnL3V9/ball-color-court-1405355.jpg',
            description: 'Conoce nuestros pelotas y aprende a jugar como Tennis como un profesional'
          }
        ]
      }
    }
  }
</script>
<style>
  .item-product {
    width: 100%;
    height: 268px;
  }

  .nuestras-raquetas {
    --var-color-white: #fff;
    width: 200px;
    height: 150px;
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: -0.06px;
    color: var(--var-color-white, #ffffff);
    margin: 0 0 0 8rem;
    text-align: right;
    padding: 1rem 0;
  }

  .description {
    width: 303px;
    height: 122px;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.51px;
    color: var(--var-color-white, #ffffff);
    margin: 0 0 0 3rem;
    text-align: left;
    padding: 1rem 0;
  }
</style>