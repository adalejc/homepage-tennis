<template>
  <div class="menu-container">
    <div class="menu-slider" v-if="enabled">
      <span class="close-btn" href="#" v-on:click="openNav">X</span>
      <ul>
        <li v-for="item of items">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="slide-menu-large">
      <span class="menu-item" v-for="item of items">
        {{item.name}}
      </span>
    </div>

    <nav class="top-nav" v-if="!enabled">
      <a href="#" v-on:click="openNav">
        <svg width="30" height="30" id="icoOpen">
          <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
          <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
          <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
        </svg>
      </a>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          { name: 'Inicio', to: '/' },
          { name: 'Acerca de Nosotros', to: '/about_us' },
          { name: 'Historia', to: '/history' },
          { name: 'Contacto', to: '/contact' },
        ],
        enabled: false
      }
    },
    methods: {
      openNav() {
        this.enabled = this.enabled ? false : true;
      }
    }
  }
</script>
<style>
  .slide-menu-large {
    display: none;
  }
  .menu-container {
    z-index: 2;
    position: absolute;
    margin: 1rem;
    --var-color-white: #ffffff;
    height: 37px;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.5px;
    color: var(--var-color-white, #ffffff);
  }
  .close-btn {
    text-align: left;
    left: 0;
    position: absolute;
    margin: 1rem;
  }
  .menu-slider {
    --var-menu-title: #fff;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: var(--var-menu-title, #ffffff);
    background-color: #000;
    opacity: 0.8;
    position: fixed;
    font-size: 2rem;
    overflow: hidden;
  }
  .menu-slider ul {
    list-style: none;
  }

  .menu-slider > ul > li {
    margin: 1rem;
  }

  .top-nav {
    left: 0;
  }

  @media (min-width: 768px)  {
    .top-nav {
      display: none;
    }

    .slide-menu-large {
      display: block;
      margin: 1rem 0 0 2rem;
    }

    .menu-item {
      margin: 0 2rem 0 0;
      cursor: pointer;
    }

  }
</style>