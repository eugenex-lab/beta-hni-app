<template>
  <carousel class="carouselContainer" :items-to-show="7"
            :wrap-around="false"

  >
    <slide class="carousel__item" v-for="(slide, i) in slides" :key="i"
           :image="slide.image"
           :title="slide.title"
           :content="slide.content">

        <img  class="imageDerivatesResize" :src="slide.image" alt="slide image">
      <section class="stockGrid">

      <div class="imageTop">1
      </div>
        <div class="statsSection">2</div>
        <div class="keepSubmitButton">3</div>

      </section>
    </slide>

      <navigation />
      <pagination />
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: Array(10)
          .fill()
          .map((_, i) => ({
            // image: `https://picsum.photos/id/${i + 1}/400/300`

            image: require(`../../components/assets/images/stockCardsEach.png`),
title: `Slide ${i + 1}`,

          }))

};
  },
};
</script>

<style >

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
  color: #063a79;
}

.carousel__prev,
.carousel__next {
  color: #050505;
}

.carousel__prev, .carousel__next {
  background-color: #063a79;
  border-radius: var(--vc-nav-width);

  text-align: center;
  font-size: calc(var(--vc-nav-width) * 2 / 3);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;


}


.carouselContainer {
  width: 70rem;
  height: 300px;
  /*background-color: #063a79;*/
   /*
     background-color: #063a79;

   */
   margin: 0 auto;


}

.imageDerivatesResize {
  width: 8rem;
  height: 160px;
  -o-object-fit: cover;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  border: 1px solid #ffffff;
  box-shadow: 0 0 5px #ffffff;



  /*background-color: #063a79;*/


}

.carousel__item{
  /*background-color: #063a79;*/
}


.stockGrid{
  width: 7rem;
  height: 10rem;
  position: absolute;
  /*top: 0;*/
}

.imageTop {
  padding-bottom: 2.8rem;
  background-color: beige;
  padding-left: -4rem;
  margin-left: -0.558rem;
  margin-right: -0.58rem;
}

.statsSection{
  padding-bottom: 2.8rem;
  background-color: #063a79;
  padding-left: -4rem;
  margin-left: -0.558rem;
  margin-right: -0.58rem;
}

</style>
