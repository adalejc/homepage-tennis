<template>
  <div id="mainHeader" class="main-header">
    <div class="las-mejores-raquetas">
      <span>{{message}}</span><span class="text-style-1">{{title}}</span>
    </div>
    <div>
      <span class="rectangle">{{aboutBtn}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Las mejores raquetas para jugar',
        title: 'Tennis',
        aboutBtn: 'acerca de nosotros'
      }
    },
  }
</script>
<style>
  .main-header {
    --var-color-white: #ffffff;
    min-height: 230px;
    width: 100%;
    background-image: url("https://i.ibb.co/c6j0Zt3/group.png");
    background-color: #2c3e50;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--var-color-white, #ffffff);
    text-align: left;
    justify-content: center;
    align-items: center;
  }

  .main-header .las-mejores-raquetas {
    --var-color-white: #ffffff;
    margin: 2rem 1rem 1rem 3rem;
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: -0.05px;
    color: var(--var-color-white, #ffffff);
  }

  .main-header .text-style-1 {
    --var-sticky-yellow: #cbe346;
    margin: 0 0 0 0.5rem;
    color: var(--var-sticky-yellow, #cbe346);
    font-weight: bold;
  }

  .main-header .rectangle {
    --var-color-white: #ffffff;
    text-transform: uppercase;
    width: 269px;
    height: 53px;
    border-radius: 26.5px;
    border: 1px solid var(--var-color-white, #ffffff);
    margin: 2rem 0 0 3rem;
    padding: 0.2rem;
    font-size: 0.8rem;
    cursor: pointer;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .main-header {
      min-height: 430px;
    }

    .main-header .las-mejores-raquetas {
      width: 309px;
      padding: 6rem 0 1rem 0;
    }

    .main-header .rectangle {
      margin: 2rem 0 0 3rem;
      padding: 1rem;
    }
  }

  @media (min-width: 1025px) {
    .main-header {
      min-height: 730px;
    }

    .main-header .las-mejores-raquetas {
      font-size: 4rem;
      margin: 8rem 1rem 4rem 8rem;
      width: 800px;
    }

    .main-header .rectangle {
      font-size: 1.5rem;
      padding: 1rem;
      margin: 8rem;
    }
  }
</style>