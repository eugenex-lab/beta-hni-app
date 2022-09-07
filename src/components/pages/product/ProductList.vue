<template >
<!--<body>-->
<section class="main">
  <div class="photoSlide">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="imgDiv">
        <img class="mySliderImage" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
<!--  <MarqueeText-->
<!--      :duration="45"-->
<!--      :repeat="3"-->
<!--      :paused="isPaused"-->
<!--      class="py-2 bg-dark text-black text-center"-->
<!--      @mouseenter="isPaused = !isPaused"-->
<!--      @mouseleave="isPaused = false"-->
<!--  >-->

<!--    <span  class="borderStock">TWITTER <img class="triangle-up" :src="triagleImageStockUp" > 0.30% </span>-->
<!--    <span class="borderStock">FACEBOOK<img class="triangle-down" :src="triagleImageStockDown" >  -0.16% </span>-->
<!--    <span class="borderStock"> TESLA <img class="triangle-up" :src="triagleImageStockUp"> 0.14%</span>-->
<!--    <span class="borderStock" >AMAZON <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>-->
<!--    <span class="borderStock" >APPLE  <img class="triangle-up" :src="triagleImageStockUp">0.12%</span>-->
<!--    <span class="borderStock">MICROSOFT  <img class="triangle-up" :src="triagleImageStockUp">0.13%</span>-->
<!--    <span  class="borderStock"> GOOGLE  <img class="triangle-up" :src="triagleImageStockUp">-0.19%</span>-->
<!--    <span class="borderStock"> NETFLIX  <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>-->
<!--    <span class="borderStock"> FACEBOOK  <img class="triangle-up" :src="triagleImageStockUp"> 0.19%</span>-->
<!--    <span class="borderStock"> TESLA  <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>-->
<!--    <span class="borderStock"> AMAZON  <img class="triangle-up" :src="triagleImageStockUp">0.19%</span>-->
<!--    <span class="borderStock"> APPLE  <img class="triangle-down" :src="triagleImageStockDown">-0.19%</span>-->
<!--    <span class="borderStock"> MICROSOFT  <img class="triangle-up" :src="triagleImageStockUp">0.19%</span>-->

<!--  </MarqueeText>-->






  <!--    <MarqueeText-->
  <!--        :duration="20"-->
  <!--        :paused="isPaused"-->
  <!--        reverse-->
  <!--        class="py-2 mt-2 bg-light"-->
  <!--    >-->
  <!--      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt-->
  <!--      ut labore et dolore magna aliquyam erat, sed diam voluptua.-->
  <!--    </MarqueeText>-->
  <!--    <MarqueeText-->
  <!--        :duration="45"-->
  <!--        :repeat="3"-->
  <!--        :paused="isPaused"-->
  <!--        class="py-2 bg-dark text-white"-->
  <!--    >-->
  <!--      <span class="badge badge-success ml-2">0,0000038%</span> ATX-->
  <!--      <span class="badge badge-danger ml-2">0,000016%</span> DAX-->
  <!--      <span class="badge badge-success ml-2">0,0000004%</span> TecDax-->
  <!--      <span class="badge badge-danger ml-2">0,0009%</span> MDAX-->
  <!--      <span class="badge badge-success ml-2">0,00000003%</span> ESTX50-->
  <!--      <span class="badge badge-info ml-2">0,0000%</span> NIKKEI-->
  <!--      <span class="badge badge-success ml-2">0,00003%</span> EUR/CHF-->
  <!--    </MarqueeText>-->




<!--  </TheBody>-->

<span class="broadLayoutStocks">
    <div class="stockPane">
      <section class="innerLayoutStock">
        <div class="buttonContainer">
          <span>
      <section class="layoutStock">

           <div>
          <img class="rectangleBlue">
              <div class="rectangleBlueText">Treasury Bill</div>
             <img class="blueBadgePosition" :src="treasuryBillPic">
        </div>

        <div>
          <img class="rectangleBlue">
              <div class="rectangleBlueText">Bonds</div>
             <img class="blueBadgePosition" :src="bondPic" id="resizeStock">
        </div>

        <div>
          <img class="rectangleBlue">
              <div class="rectangleBlueText">Stocks</div>
             <img class="blueBadgePosition" :src="stockPic">
        </div>

        <div>
          <img class="rectangleBlue">
              <div class="rectangleBlueText">Agriculture</div>
             <img class="blueBadgePosition" :src="agricPic">
        </div>

        <div>
          <img class="rectangleBlue">
              <div class="rectangleBlueText">Real Estate</div>
             <img class="blueBadgePosition" :src="realEstatePic">
        </div>

        <div>
          <img class="rectangleBlue">
              <div class="rectangleBlueText">Savings</div>
             <img class="blueBadgePosition" :src="savingsPic">
        </div>

      </section>
      </span>
        </div>

        <div class="stockContainer">2</div>
        <div class="picContainer">3</div>
        <div class="infoContainer">4</div>
      </section>
    </div>
    <div class="adPane">2</div>
</span>
</section>

<!--</body>-->
</template>

<script>


import { defineComponent, ref } from 'vue'; //
// import StockSlider from 'src/components/plugins/StockSlider.vue';
// import MarqueeText from 'vue-marquee-text-component'


export default defineComponent( {


  components:{
    // MarqueeText
  },
  setup() {
    return {
      isPaused: ref(false)
    }
  }
  ,
  name: "ProductList.vue",
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_960_720.jpg",
          "https://images.unsplash.com/photo-1642621741344-cddaecdafda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        require('../../../../public/images/Image slide.png')
        ,
      ],
      triagleImageStockUp:
      // from public folder
      require('../../../../public/images/iconmonstr-triangle-3-240.png'),
      triagleImageStockDown:
      // from public folder
      require('../../../../public/images/iconmonstr-triangle-3-240 (1).png'),

      treasuryBillPic:require('../../../../public/images/bond-cert-icon.svg'),
      bondPic:require('../../../../public/images/bondPic.png'),
      stockPic:require('../../../../public/images/stocksPic.png'),
      agricPic:require('../../../../public/images/tractor icon.png'),
      realEstatePic:require('../../../../public/images/building icon.svg'),
      savingsPic:require('../../../../public/images/piggybank icon.png'),
      


      timer: null,
      currentIndex: 0
    };

  }
  ,

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 30000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];  //
    }
  }

}
)
</script>

<style scoped>

/*@import 'bootstrap/dist/css/bootstrap.css';*/
/*@import 'bootstrap-vue/dist/bootstrap-vue.css';*/

.triangle-up {
  width: 15px;
  height: 14px;
  position: relative;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 0px;
}

main{
  position: absolute;
  height: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: 10px;
  background-color: green;
}

.innerLayoutStock {
  width: -webkit-fill-available;
  height: 268px;
  display: grid;
  grid:
        "photoSlide" 1fr
        "fxSlide" 1fr
        "." 1fr / 1fr;
  gap: 0px 4px;
  align-content: start;
}

.photoSlide { grid-area: photoSlide;
  width: auto;
  height: 474px;
}
.fxSlide { grid-area: fxSlide; }


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
  margin-top: -17px;
  margin-right: -10px;


}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
  margin-right: 90px;

}

img {
  height:450px;
  width:100%;
  margin-top: -2rem;
}


mySliderImage {
  /*height:450px;*/
  /*width:100%*/
}

.triangle-down{
  width: 15px;
  height: 14px;
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
  transform: rotate(180deg);

}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 19rem;
  width: auto;
  padding: 16px;
  color: #9c8f8f7d ;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

.imgDiv{
  background-color: #f3e019;
  width: 100%;
  height: auto;
  right: 0;



}

table code {
  white-space: nowrap;
}

.badge-success {
  background-color: #28a745;
}

.badge-danger {
  background-color: #dc3545;
}

.badge-info{
  background-color: #17a2b8;
  padding: 0.25rem 0.4rem;
}

.bg-dark {
  /*background-color: rgba(255, 255, 255, 0) !important;*/
    background-color: #515b53 !important;
  margin-top: -24px;
    background-image: url("https://i.pinimg.com/736x/16/07/07/1607070d4246505b1e15bd379db3daba.jpg");
}

.borderStock{

  /*border-radius: -30px;*/
  margin: 13px;
  padding: 23px;
  height: 17px;
  width: 121px;
  color: #020E1E;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  text-align: center;
  border-radius: 5px;
  padding: 0 6px;


}

.layoutStock{
  width: -webkit-fill-available;
  display: flex;
  gap: 40px;
  justify-content: space-between;
}

.stockPane{
  height: fit-content;
  width: 80%;
  /*background-color: #f3e019;*/
  margin-left: 70px;
}

.adPane{
  height: 100%;
  width: 24%;
  background-color: #063a79;



}

.buttonContainer{
  display: flex;
  justify-content: center;
  align-items: self-start;
  margin-top: 10px;
}

.stockContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.picContainer{
  display: flex;
  justify-content: space-around;
  align-items: inherit;
  margin-top: 10px;
}

.infoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.layoutStock {

  height: 168px;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 4%;
  margin-top: 2.5rem;
  margin-left: -1rem;

  grid-column-gap: 1rem;


}

.rectangleBlue {
  width: 9.5rem;
  height: 28%;
  background-color: #063a79;
  border-radius: 9px;
}

.broadLayoutStocks{

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.rectangleBlueText {
  width: 11rem;
  height: 14%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  margin-top: -2.1rem;
  margin-left: -2.3rem;
  color: #ffffff;
}

.blueBadgePosition{
  margin-top: -1.5rem;
  margin-left: 7rem;
  width: 1.5rem;
  height: 1.3rem;
  position: absolute;
}





.mainContainer{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: aqua;
}


body{
background-color: rgb(229 189 202 / 18%);
}

#resizeStock{
  width: 1.9rem;
  position: absolute;
  margin-top: -2em;
  height: 2.2rem;
}

.main{

  background-color: rgba(221, 237, 237, 0.72);

}



</style>
