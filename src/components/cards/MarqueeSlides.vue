<template>

    <vue3-marquee :pauseOnHover="true"
                 :duration="100"
                  class="marquee">
      <span  class="borderStock">TWITTER <img class="triangle-up" :src="triagleImageStockUp" > 0.30% </span>
      <span class="borderStock">FACEBOOK<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>
      <span class="borderStock"> TESLA <img class="triangle-up" :src="triagleImageStockUp"> 0.14%</span>
      <span class="borderStock"> NETFLIX  <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
      <span  class="borderStock">GHANA BONDS <img class="triangle-up" :src="triagleImageStockUp" > 0.30% </span>
      <span class="borderStock"> ALI BABA <img class="triangle-up" :src="triagleImageStockUp"> 0.14%</span>
      <span class="borderStock">AZA<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>

      <span class="borderStock" >BNB <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
      <span class="borderStock" >ETH  <img class="triangle-up" :src="triagleImageStockUp">0.12%</span>
      <span class="borderStock">AERO  <img class="triangle-up" :src="triagleImageStockUp">0.13%</span>
      <span class="borderStock">AZA<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>

      <span class="borderStock" >AMAZON <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
      <span class="borderStock" >APPLE  <img class="triangle-up" :src="triagleImageStockUp">0.12%</span>
      <span class="borderStock">MICROSOFT  <img class="triangle-up" :src="triagleImageStockUp">0.13%</span>
      <span  class="borderStock"> GOOGLE  <img class="triangle-up" :src="triagleImageStockUp">-0.19%</span>
      <span class="borderStock"> NETFLIX  <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
      <span  class="borderStock">CNBC <img class="triangle-up" :src="triagleImageStockUp" > 0.30% </span>
      <span class="borderStock">BIT COIN  <img class="triangle-up" :src="triagleImageStockUp">0.13%</span>
      <span  class="borderStock"> GOOGLE  <img class="triangle-up" :src="triagleImageStockUp">-0.19%</span>
      <span class="borderStock">AZA<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>
      <span class="borderStock"> ALI BABA <img class="triangle-up" :src="triagleImageStockUp"> 0.14%</span>
      <span class="borderStock" >BNB <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
      <span class="borderStock" >ETH  <img class="triangle-up" :src="triagleImageStockUp">0.12%</span>
      <span class="borderStock">AZA<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>

      <span class="borderStock">CONOIL<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>
      <span class="borderStock"> EURO <img class="triangle-up" :src="triagleImageStockUp"> 0.14%</span>
      <span class="borderStock" >DOLLAR <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
      <span class="borderStock" > NIKE  <img class="triangle-up" :src="triagleImageStockUp">0.12%</span>
      <span class="borderStock">AERO  <img class="triangle-up" :src="triagleImageStockUp">0.13%</span>
      <span  class="borderStock"> GOOGLE  <img class="triangle-up" :src="triagleImageStockUp">-0.19%</span>
      <span class="borderStock"> NETFLIX  <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>
    </vue3-marquee>

</template>

<script>

import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  name: "MarqueeSlides",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      // triagleImageStockUp:require('../../../../public/images/iconmonstr-triangle-3-240.png'),
      triagleImageStockDown: require('../../../public/images/iconmonstr-triangle-3-240 (1).png'),
      triagleImageStockUp: require('../../../public/images/iconmonstr-triangle-3-240.png')

    }
  }
};


</script>

<style scoped>


.triangle-up {
  width: 15px;
  height: 9px;
  position: relative;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 4px;
  filter: invert(0.5) sepia(1) saturate(3) hue-rotate(100deg);
}

.triangle-down{
  width: 15px;
  height: 8px;
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
  transform: rotate(180deg);

}


.borderStock{
  height: 17px;
  width: auto;
  color: rgb(5, 5, 5);
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  text-align: center;
  border-radius: 5px;
  margin: 4px 20px 6px 0px;
}

.marquee{
  height: 48px;
  width: 1920px;
  background-color: rgb(134 134 134 / 20%);
  position: relative;
  top: -7px;


}


</style>
