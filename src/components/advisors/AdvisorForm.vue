<template>

  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstName">First Name</label>
      <input
          id="firstName"
          name="firstName"
          type="text"
          v-model.trim="firstName.value"
          class="formatIput"
          @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid"  class="validationAlert">first name cannot be empty</p>

    </div>

    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input
          id="lastName"
          name="lastName"
          type="text"
          v-model.trim="lastName.value"
          @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid" class="validationAlert">Last name cannot be empty</p>

    </div>


    <div class="form-control">
      <label for="email">Email</label>
      <input
          id="email"
          name="email"
          type="email"
          v-model.trim="email.value"
          @blur="clearValidity('email')"
      >
      <p v-if="!email.isValid" class="validationAlert">Email name cannot be empty</p>


    </div>

    <div class="form-control">
      <label for="phone">Phone</label>
      <input
          id="phone"
          name="phone"
          type="text"
          v-model.trim="phone.value"
          @blur="clearValidity('phone')"
      />
      <p v-if="!phone.isValid" class="validationAlert">phone number cannot be empty</p>

    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea
          id="description"
          name="description"
          type="text"
          rows="3"
          v-model.trim="description.value"
          @blur="clearValidity('description')"
      />
      <p v-if="!description.isValid" class="validationAlert">Description name cannot be empty</p>

    </div>
    <div class="form-control">
      <label for="productCategory">Area of Expertise</label>
      <div>
        <input type="checkbox" @change="setOptions" v-model="productCategory.value"

               id="TreasuryBill" name="productCategory" value="TreasuryBill"
        @blur="clearValidity('productCategory')"
        >
        <label for="TreasuryBill">Treasury Bill</label>
      </div>
      <div>
        <input type="checkbox" id="Bond" @change="setOptions" v-model="productCategory.value" name="productCategory"
               value="Bond"     @blur="clearValidity('productCategory')">
        <label for="Bond">Bond</label>

      </div>
      <div>
        <input type="checkbox" id="Savings" @change="setOptions" v-model="productCategory.value" name="productCategory"
               value="Savings"
               @blur="clearValidity('productCategory')"
        >
        <label for="Savings">Savings</label>
      </div>
      <div>
        <input type="checkbox" id="Agriculture" @change="setOptions" v-model="productCategory.value"
               name="productCategory"
               value="Agriculture"
               @blur="clearValidity('productCategory')"
        >
        <label for="Agriculture">Agriculture</label>
      </div>
      <div>
        <input type="checkbox" id="Stock" @change="setOptions" v-model="productCategory.value" name="productCategory"
               value="Stock"
               @blur="clearValidity('productCategory')"
        >
        <label for="Stock">Stock</label>
      </div>
      <div>
        <input type="checkbox" id="RealEstate" @change="setOptions" v-model="productCategory.value"
               name="productCategory"
               value="RealEstate"
               @blur="clearValidity('productCategory')"
        >
        <label for="RealEstate">Real Estate</label>
      </div>
      <!--      <base-badge> {{ productCategory }}</base-badge>-->
      <p v-if="!productCategory.isValid"  class="validationAlert">please tick at least three areas of expertise</p>

<!--      <p class="validationAlert"  v-if="!formIsValid"  >please fix the above errors and submit again</p>-->

    </div>

    <base-button>Register</base-button>


  </form>


</template>

<script>
// import BaseBadge from "@/components/layout/BaseBadge";
import BaseButton from "@/components/layout/BaseButton";

export default {
  name: "AdvisorForm",
  components: {BaseButton},
  emits: ['form-data'],
  data: () => ({
    formValues: {},
    firstName: {
      value: '',
      isValid: true,
    },
    lastName: {
      value: '',
      isValid: true
    },
    email: {
      value: '',
      isValid: true
    },
    phone: {
      value: '',
      isValid: true
    },
    description: {
      value: '',
      isValid: true
    },
    productCategory: {
      value: [],
      isValid: true
    },
    formIsValid: true,

  }),


  methods: {
    clearValidity(field) {
      this[field].isValid = true;
    },

    validateForm() {
      this.formIsValid = true;
      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.value === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.phone.value === '') {
        this.phone.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.productCategory.value.length < 1 || this.productCategory.value.length > 3) {
        this.productCategory.isValid = false;
        this.formIsValid = false;
      }

    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }


      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value,
        description: this.description.value,
        productCategory: this.productCategory.value,
      };
      console.log(formData);
      this.$emit("form-data", formData);
    },

    setOptions(e) {
      // only 3 boxes can be checked
      if (this.productCategory.value.length > 3) {
        e.target.checked = false;
        // disable the checkbox
        // e.target.disabled = true;

        // disallowing the user to check more than 3 boxes
        this.productCategory.value.pop();


      } else {
        this.productCategory.value = this.productCategory.value.filter((item, index) => { //
          return this.productCategory.value.indexOf(item) === index; //
        });
      }


    },


  },

}
</script>

<style scoped>

.validationAlert {
  color: red;
  font-size: 12px;
  margin-top: 1px;
  margin-left: 0.2rem;
}


.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

/*.invalid label {*/
/*  color: red;*/
/*}*/

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.button {
  margin-left: 29rem;
}

.form-control[data-v-6cc9ad38] {
  margin: 0.5rem 0;
  margin-left: 3rem;
  margin-right: 3rem;
}

button[data-v-7bc4a9a8], a[data-v-7bc4a9a8] {

  margin-left: 19rem;

}

</style>