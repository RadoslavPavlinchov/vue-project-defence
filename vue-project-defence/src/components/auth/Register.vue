<template>
  <form @submit.prevent="onRegister">
    <fieldset>
      <h1>Register</h1>

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
          placeholder="Username..."
        />
      </p>

      <template v-if="$v.username.$error">
        <p v-if="!$v.username.required" class="error">Username is required!</p>
        <p v-if="!$v.username.alphanumeric" class="error">Invalid username!</p>
      </template>

      <p class="field field-icon">
        <label for="email">
          <span>
            <i class="fas fa-envelope"></i>
          </span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          @blur="$v.email.$touch"
          placeholder="example@example.com"
        />
      </p>

      <template v-if="$v.email.$error">
        <p v-if="!$v.email.required" class="error">Email is required!</p>
        <p v-if="!$v.email.email" class="error">Invalid email!</p>
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
        <p v-else-if="!$v.password.alphanumeric" class="error">Invalid password!</p>
        <p v-else-if="!$v.password.minLength" class="error">Password should be atleast 3 symbols!</p>
        <p
          v-else-if="!$v.password.maxLength"
          class="error"
        >Password should be no more than 16 symbols!</p>
      </template>

      <p class="field field-icon">
        <label for="re-password">
          <span>
            <i class="fas fa-lock"></i>
          </span>
        </label>
        <input
          type="password"
          name="re-password"
          id="re-password"
          v-model="rePassword"
          @blur="$v.rePassword.$touch"
          placeholder="******"
        />
      </p>

      <template v-if="$v.rePassword.$error">
        <p v-if="!$v.password.sameAs" class="error">Passwords do not match!</p>
      </template>

      <p>
        <button>Create Account</button>
      </p>

      <p class="text-center">
        Have an account?
        <router-link to="/signin">Sign In</router-link>
      </p>
    </fieldset>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  sameAs,
  minLength,
  maxLength,
  helpers
} from "vuelidate/lib/validators";

const alphanumeric = helpers.regex("alpha", /^[a-zA-Z0-9]*$/);

export default {
  name: "AppRegister",
  components: {},
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      email: "",
      password: "",
      rePassword: ""
    };
  },
  validations: {
    username: {
      required,
      alphanumeric
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(16),
      alphanumeric
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
  onRegister() {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
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