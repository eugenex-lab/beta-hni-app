<template>

  <li>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <img :src="selectedImage" alt="rover" />
        </div>
        <div class="card-body">
<div class="productAlign">
  <base-badge
      class="tag tag-teal"
      v-for="prod in productCategory" :key="prod.id" :type="prod" :title="prod" >

<!--    {{prod}}-->
  </base-badge>

</div>

<div  class="productAlignInfo">
          <h4 class="advisorNamePosition">
            {{fullName}}
          </h4>
</div>


          <img class="positionProfileImg" :src="selectedAvater" alt="user" />

<!--          <p class="descriptionPosition">-->
<!--            {{description}}-->
<!--          </p>-->
<!--          <div class="user">-->
            <div class="user-info">
<!--              <h5>July Dec</h5>-->




              <a href="mailto:{{email}}" >
              <img class="sendMailPosition" src="/images/iconsMail.png" alt=" " > </a>


<!--                  href="mailto:{{email}}"-->
                <router-link :to="advisorContactLink">
                  <img class="sendMessagePosition" src="/images/iconMessages.png" alt=" " >
                </router-link>


              <base-button  link :to="advisorDetailsLink"  class="myButton">View Details</base-button >
            </div>
<!--          </div>-->
        </div>
      </div>
    </div>
  </li>

</template>

<script>

import BaseBadge from "@/components/layout/BaseBadge";
export default {
  components: {BaseBadge},
  data(){
return{
      imageHeader: [
          "https://img.freepik.com/free-photo/tractor-agricultural-machine-cultivating-field_342744-896.jpg?w=740&t=st=1663932404~exp=1663933004~hmac=0a112f4af6deef1b2e615665a7aa5997ef8ff53cf51dedbb1ec7d63c10fd286a",
          "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=740&t=st=1663933101~exp=1663933701~hmac=9667d3b6aeda59b2470d953726fd09e604497baf5498e86bae2b80e757300b09",
          "https://img.freepik.com/free-photo/glass-jar-full-money-front-decreasing-stacked-coins-against-white-background_23-2147919228.jpg?w=740&t=st=1663933148~exp=1663933748~hmac=ee433e928a0838c8e00058df748ed8408c532a8c55f13984b9baf20d12e29b9b",
          "https://img.freepik.com/free-vector/young-investors-working-profit-dividend-revenue_74855-6143.jpg?w=740&t=st=1663933188~exp=1663933788~hmac=fe59b0f2f2afcd44b3e87c73e08bb0337ae28e1f1c6107f791b47f3d3fa90ae7",
          "https://img.freepik.com/free-photo/modern-country-houses-construction_1385-14.jpg?w=740&t=st=1663933218~exp=1663933818~hmac=e9ed1d905d1420f2d39e22dd21da1fd60c1789cd22634e08399a83a21c0f063f",

      ],
  avaterImages: [
      "https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png",
      "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png",
      "https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_960_720.png",
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

      ],
    }
  },

  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.imageHeader)
    this.selectedAvater = this.randomItem(this.avaterImages)
  },

  props:['id','firstName', 'lastName','description','email','productCategory'],
  computed:{
    fullName(){
      return this.firstName + ' ' + this.lastName;
    },
    advisorContactLink(){
      return this.$route.path + '/' + this.id + '/contact'
    },

    advisorDetailsLink(){
      return   this.$route.path + '/' + this.id; // /coaches/c1
      // return this.$route.path + '/' + this.id;  //
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.sendMailPosition{
  /* margin-top: 1rem; */
  /* margin-left: 1rem; */
  /* color: #0d6efd; */
  /* font-size: 1.2rem; */
  /* font-weight: 600; */
  /* cursor: pointer; */

  height: 2.4rem;
  width: 3.1rem;
  bottom: 0.5rem;
  margin-left: 6.6rem;
  position: absolute;

}

.productAlignInfo{
  position: relative;
  margin-left: 1rem;
  margin-top: 1rem;
}


.descriptionPosition{
  margin-top: -1.2rem;
}

.productAlign{
  margin-top: -1rem;
  position: absolute;
  margin-bottom: 1rem;
  display: inherit;}

.advisorNamePosition{
  position: inherit;
  /* margin-top: 0.5rem; */
  right: 5rem;
  bottom: -1.5rem;
  margin-left: 8rem;
  width: 7rem;
  text-align: left;
}

.myButton {
  box-shadow: 3px 4px 0px 0px #57b5c5;
  background: linear-gradient(to bottom, #b5b5b5 5%, #b8c1c3 100%);
  background-color: #6e797c;
  border-radius: 5px;
  /* border: 1px solid #29668f; */
  display: inline-block;
  /* right: 4rem; */
  position: absolute;
  right: 3rem;
  top: 4.5rem;
  margin-top: 1rem;
  cursor: pointer;
  color: #1b397c;
  font-family: 'Inter';
  font-size: 9px;
  font-weight: bold;
  padding: 6px 8px;
  text-decoration: none;
}
.myButton:hover {
  background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
  background-color:#408c99;
}


* {
  box-sizing: border-box;

}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
}
.container {

  display: flex;
  width: 19rem;
  justify-content: center;
  flex-wrap: wrap;


}
.card {
margin: 10px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
/*overflow: hidden;*/
  /*width: 300px;*/
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  height: 129px;
  position: relative;

}

.tag {
  border-radius: 50px;
  background: #cccccc;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 800;
  margin: 0.1rem;
  color: #fff;
  padding: 5px 7px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;

}
.tag-teal {
  background-color: #051372;
  color: #ffc903;}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  /*margin: 0 0 40px;*/
}
.user {
  display: flex;
  margin-top: auto;
}

.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}

li {
  margin: 1rem 0;
  border-radius: 12px;
  padding: 1rem;
}

.positionProfileImg{
  margin-top: -1.5rem;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  /* margin-right: 6px; */
  position: absolute;
  bottom: 0.5rem;
  box-shadow: 0 9px 27px #8f761c;
}

.sendMessagePosition{
  margin-top: -1.5rem;
  border-radius: 50%;
  width: 53px;
  height: 41px;
  left: 77px;
  bottom: 0.49rem;
  position: absolute;
}


</style>