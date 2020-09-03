<template>
  <div class="footer-container">
    <div v-for="item of items">
      <span class="footer-item">{{item.name}}</span>
    </div>
    <div class="logo-container">
      <span  v-for="item of logos">
      <img class="logo" :src="`${item.url}`" alt="Facebook">
    </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: 'Inicio', to: '/' },
        { name: 'Acerca de nosotros', to: '/about_us' },
        { name: 'Historia', to: '/history' },
        { name: 'Contacto', to: '/contact' },
      ],
      logos: [
        { url: 'https://i.ibb.co/MCwfmyw/group-22-3x.png'},
        { url: 'https://i.ibb.co/6tq4MXH/group-23-3x.png'},
        { url: 'https://i.ibb.co/mJ6zvZ6/group-24-3x.png'},
        { url: 'https://i.ibb.co/2vTwsdS/group-25-3x.png'},
        { url: 'https://i.ibb.co/xz2B1Nt/group-26-3x.png'}
      ]
    }
  }
}
</script>
<style>
  .footer-container {
    --var-sticky-yellow: #cbe346;
    height: 203px;
    padding: 2rem;
    text-align: left;
    background-color: var(--var-sticky-yellow, #cbe346);
  }

  .footer-container .footer-item {
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.14px;
    color: #2b3049;
  }

  .footer-container .logo-container {
    margin: 1rem;
  }

  .footer-container .logo-container .logo {
    width: 31px;
    height: 31px;
    object-fit: contain;
    margin: 0.5rem;
  }
</style>