<template>
  <!--<body>-->
  <section class="main">
    <div class="photoSlide">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i" class="imgDiv">
          <img class="mySliderImage" :src="currentImg"/>
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094; Previous</a>
      <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>


    <MarqueeSlides>

    </MarqueeSlides>


    <span class="broadLayoutStocks">
    <div class="stockPane">
      <section class="innerLayoutStock">
        <div class="buttonContainer">
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

                                <p class="textForRecommended">Recommended for You</p>


 <div class="stockContainer">
          <VueCarosel
              class="cardSlide"></VueCarosel>
        </div>




          <div class="adPane">
            <p class="textRecommendedStocks">Ad goes here Bitches </p>
          </div>
        </div>


        <div class="picContainer">
          <img class="olaSection" :src="olaSection">

        </div>
        <div class="infoContainer">
                 <div class="rectangleBelow">

                   <div class="why-invest-on-wealth-ng">Why invest on Wealth.ng?</div>


                   <div>
                                                             <img :src="laptopShield" class="laptopShield">
                     <a class="laptopShieldHeader">It's Secure</a>
                     <a class="laptopShieldBody">Maecenas sodales justo
odio, sit amet </a>

                   </div>
                   <img :src="sittingCoin" class="sittingCoin">
                   <img :src="stampedCertified" class="stampedCertified">
                   <img :src="protectionBlue" class="protectionBlue">
                   <img :src="cashBack" class="cashBack">

    </div>

        </div>


      </section>

    </div>




</span>


  </section>


  <!--</body>-->
</template>

<script>


import {defineComponent, ref} from 'vue';
import MarqueeSlides from "@/components/cards/MarqueeSlides"; //
import VueCarosel from "@/components/plugins/VueCarosel";
// optional style for arrows & dots

export default defineComponent({


      components: {
        // eslint-disable-next-line vue/no-unused-components
        MarqueeSlides, VueCarosel
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
            require('../../../public/images/Image slide.png')
            ,
          ],
          triagleImageStockUp:
          // from public folder
              require('../../../public/images/iconmonstr-triangle-3-240.png'),
          triagleImageStockDown:
          // from public folder
              require('../../../public/images/iconmonstr-triangle-3-240 (1).png'),

          treasuryBillPic: require('../../../public/images/bond-cert-icon.svg'),
          bondPic: require('../../../public/images/bondPic.png'),
          stockPic: require('../../../public/images/stocksPic.png'),
          agricPic: require('../../../public/images/tractor icon.png'),
          realEstatePic: require('../../../public/images/building icon.svg'),
          savingsPic: require('../../../public/images/piggybank icon.png'),
          olaSection: require('../../../public/images/olaSection.png'),
          laptopShield: require('../../../public/images/laptopShield.png'),
          sittingCoin: require('../../../public/images/boyLaptop.png'),
          stampedCertified: require('../../../public/images/stampIcon.png'),
          protectionBlue: require('../../../public/images/shieldIcon.png'),
          cashBack: require('../../../public/images/walletArrow.png'),


          timer: null,
          currentIndex: 0

          ,

          slides: Array(5)
              .fill() //
              .map((_, i) => ({
                // title: `title ${i}`,
                // content: `content ${i}`,
                image: `https://picsum.photos/id/${i + 1}/400/300`
              }))
        }

      }
      ,

      mounted: function () {
        this.startSlide();
      },

      methods: {
        startSlide: function () {
          this.timer = setInterval(this.next, 30000);
        },

        next: function () {
          this.currentIndex += 1;
        },
        prev: function () {
          this.currentIndex -= 1;
        }
      },

      computed: {
        currentImg: function () {
          return this.images[Math.abs(this.currentIndex) % this.images.length];  //
        }
      }

    }
)
</script>

<style scoped>

.laptopShield {
  position: absolute;
  height: 65px;
  width: 61px;
  left: 100px;
  top: 119px;
}

.laptopShieldHeader {
  position: absolute;
  opacity: 0.87;
  color: #000000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  left: 90px;
  top: 197px;
}

.laptopShieldBody {
  position: absolute;
  left: 49px;
  top: 223px;
  height: 34px;
  width: 163px;
  opacity: 0.69;
  color: #000000;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
  text-align: center;
}


.sittingCoin {
  position: absolute;
  height: 65px;
  width: 61px;
  left: 276px;
  top: 118px;
}

.stampedCertified {
  position: absolute;
  height: 65px;
  width: 61px;
  left: 466px;
  top: 121px;
}

.protectionBlue {
  position: absolute;
  height: 65px;
  width: 61px;
  right: 309px;
  top: 120px;
}


.cashBack {
  position: absolute;
  height: 65px;
  width: 61px;
  right: 135px;
  top: 119px;

}


.olaSection {
  width: 99.5%;
  height: 35rem;
  position: absolute;
  top: 1rem;
  left: -1.2rem;
  background-color: #0BA50D;
  border-radius: 0.4rem;
}

/*@import 'bootstrap/dist/css/bootstrap.css';*/
/*@import 'bootstrap-vue/dist/bootstrap-vue.css';*/

.carousel__item__content__title {
  background-color: white;
  position: relative;
  width: 8.5rem;
  height: 11.5rem;
}

.triangle-up {
  width: 15px;
  height: 14px;
  position: relative;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 0px;
}

main {
  position: absolute;
  height: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: 10px;
  background-color: green;
}

.layoutStock {
  position: absolute;
  height: 168px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 4%;
  /* margin-top: 2.5rem; */
  /* margin-left: -1rem; */
  grid-column-gap: 1rem;
  left: 55.9rem;
}

.photoSlide {
  grid-area: photoSlide;
  width: auto;
  height: 425px;
}

.fxSlide {
  grid-area: fxSlide;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
  margin-top: -17px;
  margin-right: -10px;


}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
  margin-right: 90px;

}


.mySliderImage {
  height: 450px;
  width: 100%;
  margin-top: -2rem;
}

.triangle-down {
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
  top: 16rem;
  width: auto;
  padding: 16px;
  color: #9c8f8f7d;
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
  background-color: rgba(0, 0, 0, 0.9);
}

.imgDiv {
  /*background-color: #f3e019;*/
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

.badge-info {
  /*background-color: #17a2b8;*/
  padding: 0.25rem 0.4rem;
}

.bg-dark {
  /*background-color: rgba(255, 255, 255, 0) !important;*/
  background-color: #515b53 !important;
  margin-top: -24px;
  background-image: url("https://i.pinimg.com/736x/16/07/07/1607070d4246505b1e15bd379db3daba.jpg");
}

.borderStock {

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


}

.layoutStock[data-v-59057b99][data-v-59057b99] {
  position: absolute;
  height: 168px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 4%;
  /* margin-top: 2.5rem; */
  /* margin-left: -1rem; */
  grid-column-gap: 1rem;
  left: 0.8rem;
}


.adPane[data-v-59057b99][data-v-59057b99] {
  height: 42rem;
  width: 6.3rem;
  background-color: #d6d6d6;
  /* padding-left: 12rem; */
  position: absolute;
  right: -7rem;
  top: -26rem;
  z-index: 0;
}

.buttonContainer[data-v-59057b99] {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: self-start; */
  /* margin-top: 10px; */
  display: flex;
  justify-content: flex-start;
  align-items: self-start;
  margin-top: 10px;
  position: relative;
}

.stockContainer[data-v-59057b99][data-v-59057b99][data-v-59057b99] {
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -2.7rem;
  top: 0rem;
}

.picContainer {
  display: flex;
  justify-content: space-around;
  align-items: inherit;
  margin-top: 2px;
  position: relative;
}

.infoContainer[data-v-59057b99] {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
  position: relative;
  /*background-color: pink;*/
  height: 30rem;
  top: 38rem;
}

.layoutStock[data-v-59057b99][data-v-59057b99][data-v-59057b99] {
  position: absolute;
  height: 168px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 4%;

  grid-column-gap: 1rem;
  left: -1.2rem;
}

.rectangleBlue {
  width: 9.5rem;
  height: 28%;
  background-color: #063a79;
  border-radius: 9px;
}

.broadLayoutStocks {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /* margin-left: -4rem; */
  background-color: #efefef;
  padding-bottom: 80rem;
  position: relative;
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

.blueBadgePosition {
  margin-top: -1.5rem;
  margin-left: 7rem;
  width: 1.5rem;
  height: 1.3rem;
  position: absolute;
}


.mainContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /*background-color: aqua;*/
}


body {
  background-color: rgb(229 189 202 / 18%);
}

#resizeStock {
  width: 1.9rem;
  position: absolute;
  margin-top: -2em;
  height: 2.2rem;
}

.main {

  background-color: #e1e1e1;

}

MarqueeSlides {
  z-index: 1;
  position: absolute;
  margin-top: -2.5rem;
  height: 10rem;

}

.textForRecommended[data-v-59057b99] {
  color: #020E1E;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  position: absolute;
  top: 2.6rem;
  left: -1.1rem;
  z-index: 1;
}

.vueperslide {

  height: 13em;
  width: 290em;

}


.no-shadow {
  width: 56rem;
}


.cardSlide {


  /*cardSlide  width: 60rem;*/
  /*  height: initial;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  background-color: aqua;*/
  /*  margin-top: 6rem;*/


  /* display: flex; */
  /* align-items: center; */
  /* background-color: aqua; */
  /* margin-top: 6rem; */


  width: 63em;
  height: initial;
  /*display: flex;*/
  align-items: center;
  /*background-color: aqua;*/
  margin-top: 6rem;
  position: relative;
  position: relative;
  right: -1.3em;


}


.rectangleBelow {
  height: 27.5rem;
  width: 62.9rem;
  border-radius: 6px;
  background-color: #FFFF;
  z-index: 1;
  position: absolute;
  /* top: 38rem; */
  left: -1.5rem;
}

.why-invest-on-wealth-ng {
  color: #000000;
  font-family: Inter;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0;
  position: absolute;
  top: 5%;
  left: 19%;
  transform: translate(50%, 50%);
}

</style>
