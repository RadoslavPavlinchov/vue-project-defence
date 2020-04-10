<template>
  <span>
    <span v-if="error">
    <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
    </span>
  <form @submit.prevent="onSignIn">
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
        <button :disabled="loading" :loading="loading">Sign In</button>
      </p>

      <p class="text-center">
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </fieldset>
  </form>
  </span>

</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

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
      required
    },
    password: {
      required
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      this.$error.dispatch('clearError')
    }
  }
};
</script>


<style scoped>
form {
  margin: auto auto;
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
  background-color: #66bb6a;
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