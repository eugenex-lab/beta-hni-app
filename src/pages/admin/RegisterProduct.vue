<template>
  <form @submit.prevent="submitForms">
    <div class="form-control">
      <label for="product-name">Product Name</label>
      <input id="product-name" name="product-name" type="text" placeholder='product Name' v-model="form.productName" required/>
    </div>
    <div class="form-control">
      <label for="product-initials">Product Initials To Display</label>
      <input id="product-initials" name="product-initials" type="text"  placeholder='Product Abbr' v-model="form.productInitials" required/>
    </div>
    <div class="form-control">
      <label for="unit-price">Unit Price for Product</label>
      <span class="putCurrencyPriceFormSameLine">
          <select class="currencyForm" id="currency" name="currency" v-model="form.currencyInput">
        <option value="$">$ Dollars</option>
        <option value="₦">₦ Naira</option>
      </select>
              <input class="priceForm" id="unit-price" name="unit-price" type='number' step='0.01'  placeholder='0.00' v-model="form.unitPrice"/>
      </span>

    </div>


    <div class="form-control">
      <label for="product-rate">Interest Rate </label>
      <input id="product-rate" name="product-rate" type='number' step='0.01'  placeholder='0.00' v-model="form.productRate"/>
    </div>


    <div class="form-control">
      <label for="product-duration">Product Maturity Duration</label>
      <select id="product-duration" name="product-duration" v-model="form.productDuration">
        <option value=" ">None</option>
        <option value="p.a">Per Annum</option>
        <option value="p.m">Per Month</option>
        <option value="2 years"> 2 years</option>
      </select>
    </div>

    <div class="form-control">
      <h2>Product Category</h2>

      <span class="arrangeRadio">
         <div>

        <div>
          <input id="saving-radio" name="how" type="radio"/>
          <label for="saving-radio" style="color: white">Savings</label>
        </div>
        <div>
          <input id="treasury-radio" name="how" type="radio"/>
          <label for="treasury-radio" style="color: white">Treasury Bill</label>
        </div>
        <div>
          <input id="bond-radio" name="how" type="radio"/>
          <label for="bond-radio" style="color: white">Bond</label>
        </div>

      </div>

      <div>
        <div>
          <input id="stock-radio" name="how" type="radio"/>
          <label for="stock-radio" style="color: white">Stock</label>
        </div>
        <div>
          <input id="agriculture-radio" name="how" type="radio"/>
          <label for="agriculture-radio" style="color: white">Agriculture</label>
        </div>
        <div>
          <input id="real-estate-radio" name="how" type="radio"/>
          <label for="real-estate-radio" style="color: white">Real Estate</label>
        </div>
      </div>

      </span>


      <div>
        <button
            @submit="submitForm"
        >Save Data
        </button>
      </div>
    </div>

  </form>
</template>

<script>

import { createWealthProduct } from "@/firebase.js"

import {reactive} from "vue";

export default {
  setup() {
    const form = reactive({
      productName: "",
      productInitials: "",
      unitPrice: "",
      productRate: "",
      productDuration: "",
      currencyInput: "",
      logo:"",
    })

    // const submitForm = async () => {
    //   console.log(form)
    //   // createUser(form)
    //   await createWealthProduct({...form})
    //   form.productName = ""
    //   form.productInitials = ""
    //   form.unitPrice = ""
    //   form.productRate = ""
    //   form.productDuration = ""
    //   form.currencyInput = ""
    //
    //   // redirect to another page called productlist
    //   this.$router.push({ name: 'products' })
    //
    // }
    return {
      form,
      // submitForm
    }
  },
  methods: {
    submitForms() {
      console.log(this.form)
      // createUser(form)
      createWealthProduct({...this.form})
      this.form.productName = ""
      this.form.productInitials = ""
      this.form.unitPrice = ""
      this.form.productRate = ""
      this.form.productDuration = ""
      this.form.currencyInput = ""
      this.form.logo = ""

      this.$router.push({ name: 'products' })

    }
  }
}
</script>

<style scoped>

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #063a79
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  color: #a69b0a;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: bold;

  color: #a69b0a;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #F2BF00;
  color: #102e79;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 1rem;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}


.putCurrencyPriceFormSameLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

}

#product-rate {
  width: 30%;
}

.arrangeRadio {
  display: flex;
  flex-direction: row;
  justify-content: unset;
  gap: 1rem;
}
</style>
