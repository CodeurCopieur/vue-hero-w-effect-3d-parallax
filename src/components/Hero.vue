<script setup>
  import Logo from '../assets/logo.svg'
  import layer1 from '../assets/layer-1.jpg'
  import layer2 from '../assets/layer-2.png'
  import layer5 from '../assets/layer-5.png'
  import layer6 from '../assets/layer-6.png'

</script>

<template>
  <header>
    <div class="logo" :style="{ backgroundImage: `url(${Logo})` }"></div>
    <section class="layers">
      <div class="layers__container">
        <div class="layers__item layer-1" :style="{ backgroundImage: `url(${layer1})` }"></div>
        <div class="layers__item layer-2" :style="{ backgroundImage: `url(${layer2})` }"></div>
        <div class="layers__item layer-3">
          <div class="hero-content">
            <h1>3D parallax effect <span>HTML/CSS</span></h1>
            <p class="hero-content__p">a beautiful 3D website with a ‘lens effect’</p>
            <button class="button-start">CodeurCopieur</button>
          </div>
        </div>
        <div class="layers__item layer-4">
          <canvas class="rain" width="270" height="730"></canvas>
        </div>
        <div class="layers__item layer-5" :style="{ backgroundImage: `url(${layer5})` }"></div>
        <div class="layers__item layer-6" :style="{ backgroundImage: `url(${layer6})` }"></div>
      </div>
    </section>
    <div style="height: 100vh;"></div>
  </header>
</template>