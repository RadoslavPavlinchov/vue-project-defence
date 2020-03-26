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
          name="username"
          id="username"
          v-model="username"
          @blur="$v.username.$touch"
          placeholder="MarkUlrich"
        />
      </p>

      <template v-if="$v.username.$error">
        <p v-if="!$v.username.required" class="error">Username is required!</p>
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
        <button @click="login()">Create Account</button>
      </p>

      <p class="text-center">
        Don't have an account?
        <a href>Register</a>
      </p>
    </fieldset>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AppSignIn",
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) { return; }
      console.log(this.username, this.password);
    },
    login() {
      this.$router.push('/')
    }
  }
};
</script>


<style scoped>
form {
  margin-top: 20px;
  width: 30%;
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