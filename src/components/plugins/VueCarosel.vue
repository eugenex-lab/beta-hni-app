<template>
  <carousel class="carouselContainer" :items-to-show="7"
            :wrap-around="false"

  >
<!--    <slide class="carousel__item" v-for="(slide, i) in slides   ,  (productName) in products  " :key="i"-->
<!--    >-->

      <slide class="carousel__item" v-for="{id, productName,productInitials,currencyInput,unitPrice, productRate,logo} in productx  " :key="id">


          <div class="carousel__item__content__title">



            <div class="carousel__item__content__title__logo">
              <img :src="logo" alt="logo" class="logoPosition">
            </div>

            <div class="stockFullName">
              {{productName}}
            </div>

            <div class="stockAbbr">
              {{productInitials}}
            </div>

            <div class="stockCurrency">
              {{currencyInput}}
            </div>

            <div class="stockPrice">
              {{unitPrice}}
            </div>

            <div class="stockRate">
              {{productRate}}%
            </div>

            <div class="stockButton">
              <button class="stockButton__button">
                <span class="stockButton__button__text">Add to Cart</span>
              </button>
            </div>

            <router-link to="/products/p1/contactAdvisor">
              <img class="chatPosition" :src="chatAdvisor">
            </router-link>




          </div>

        <div   class="titleFlag" />
<!--        <img src="public/images/nigerianFlag.png">-->



        <!--      <img  class="imageDerivatesResize" :src="slide.image" alt="slide image">-->


      <section class="stockGrid">

<!--      <div class="imageTop">1-->
<!--      </div>-->
<!--        <div class="statsSection">2</div>-->
<!--        <div class="keepSubmitButton">3</div>-->

      </section>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation , Pagination } from 'vue3-carousel';
import {useLoadWealthProducts} from "@/firebase";

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data() {
    return {
      slides: Array(14)
          .fill()
          .map((_, i) => ({
            // image: `https://picsum.photos/id/${i + 1}/400/300`,

            image: require(`../../components/assets/images/stockCardsEach.png`),
            flagDisplay: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
title: `Slide ${i + 1}`,



          })),
      chatAdvisor: require("../../../public/images/chatIconn.png"),

}



  },
  setup(props){  // this is a hook
    console.log("setup hook is called" , props);
    const productx =  useLoadWealthProducts()
    return { productx,
    }
  },

  state(){
    return{
      product: this.productx
    }
  },

  created() {
    // console.log(this.forLoop)

  }
,
  computed:{
    // iterate over the product and return the product name



  }



};
</script>

<style >
.chatPosition{
  display: none;
  top: 9.25rem;
  right: 9.5rem;
  width: 1.6rem;
  height: -4.5rem;
  z-index: 12;
  position: absolute;
}

.logoPosition {
  position: absolute;
  width: 62px;
  height: 46px;
  margin-left: -58px;
  margin-top: 9px;
}


.titleFlag {
  width: 158px;
  height: 13px;
  right: -117px;
  position: absolute;
  top: 9px;
  /* visibility: visible; */
  flex-basis: 518px;
  background-image: url(https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: left top;
}

.stockButton__button {
  padding: 1em 1.2em;
  border-radius: 11px;
  color: #000000;
  background-color: rgb(255, 192, 0);
  /* font-size: 1.1em; */
  border: 0;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 9px;
  /* letter-spacing: 2.71px; */
  line-height: 6px;
  position: relative;
  top: 9.3rem;
  font-weight: 550;
  left: -1.7rem;
}
.stockRate {
  color: #0BA50D;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  position: absolute;
  top: 7.1rem;
  text-indent: 0.5rem;
}

.stockPrice {
  color: #020E1E;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 5.7rem;
  text-indent: 1.2rem;
}

.stockCurrency{
  color: #020E1E;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  top: 5.7rem;
  text-indent: 0.4rem;
}

.stockAbbr {
  color: #020E1E;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  top: 3.5rem;
  text-indent: 0.4rem;
  position: absolute;
  white-space: nowrap;
  overflow: visible;
  width: 136px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}

.stockFullName {
  /* height: 0.42%; */
  /* width: 90.67%; */
  color: rgba(2,14,30,0.31);
  font-family: Inter;
  font-size: 10px;
  letter-spacing: 0;
  line-height: 12px;
  position: absolute;
  top: 4.8rem;
  text-indent: 0.4rem;
  position: absolute;
  white-space: nowrap;
  overflow: visible;
  width: 136px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}


.carousel__item__content__title {
  background-color: white;
  position: relative;
  width: 8.5rem;
  height: 11.5rem;
  border-radius: 0.3rem;
   border: 1px solid #e6e6e6;
}

.carousel__prev--in-active,
.carousel__next--in-active {
  /*display: ;*/
  color: #063a79;
}


.carousel__next--in-active ,.carousel__next {
  /*display: ;*/
  margin-left: 0rem;
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


.carousel__prev--in-active ,.carousel__prev {
  left: -0.7em;

}

.carousel__prev--in-next ,.carousel__next {
  right: -0.7em;

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


/*.stockGrid{*/
/*  width: 2.5rem;*/
/*  height: 92rem;*/
/*  position: absolute;*/
/*  z-index: -1;*/
/*  background-color: white;*/
/*  !*top: 0;*!*/
/*}*/

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

.carousel__pagination-item {
  display: none;
}

.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: white;
}


</style>
