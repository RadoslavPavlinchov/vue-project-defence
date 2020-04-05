<template>
  <form @submit.prevent="submitHandler">
    <fieldset>
      <h1>Sign In</h1>

      <p class="field field-icon">
        <label for="username">
          <span>
            <i class="fas fa-user"></i>
          </span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          @blur="$v.email.$touch"
          placeholder="Email..."
        />
      </p>

      <template v-if="$v.email.$error">
        <p v-if="!$v.email.required" class="error">Email is required!</p>
      </template>

      <p class="field field-icon">
        <label for="password">
          <span>
            <i class="fas fa-lock"></i>
          </span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          @blur="$v.password.$touch"
          placeholder="******"
        />
      </p>

      <template v-if="$v.password.$error">
        <p v-if="!$v.password.required" class="error">Password is required!</p>
      </template>

      <p>
        <button>Sign In</button>
      </p>

      <p class="text-center">
        Don't have an account?
          <router-link to="/register">Register</router-link>
      </p>
    </fieldset>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
// import * as firebase from "firebase/app";
import "firebase/auth";

import authAxios from "../../axios/axios-auth";

export default {
  name: "AppSignIn",
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    }
  },
  methods: {
    // async submitHandler() {
    //   try {
    //     const data = firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    //     console.log(data);
    //     this.$router.replace({name: "profile"})
    //   } catch (error) {
    //     console.log(error);
    //   }

    // }

        submitHandler() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };
      // Project Settings -> Web API key
      authAxios
        .post(
          '/accounts:signInWithPassword',
          payload
        )
        .then(res => {
          const { idToken, localId } = res.data;
          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
</script>


<style scoped>

form {
  margin: auto auto;
  width: 40%;
}

fieldset {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

select {
  border-color: black;
}

button {
  background-color: #66BB6A;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 100%;
}

i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}

a {
  color: #007bff;
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form .field {
  display: flex;
}

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}
</style>