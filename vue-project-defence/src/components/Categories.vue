<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Categories</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img
              src="https://images.unsplash.com/photo-1452967712862-0cca1839ff27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">EVERY DAY MEALS</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>

          <v-card-text>
            <div>
              <h3 class="headline mb-0">Every day meals</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
            </div>
          </v-card-text>

          <v-card-actions v-if="['/categories'].includes($route.path)">
            <v-btn outlined block color="green" @click="showRecipes('normal')">Select This Plan</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img
              src="https://images.unsplash.com/photo-1558221693-89a565d7ecd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">VEGETERIAN</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Vegeterian</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['/categories'].includes($route.path)">
            <v-btn outlined block color="green" @click="showRecipes('vegeterian')">Select This Plan</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img
              src="https://images.unsplash.com/photo-1573730886197-8636f98b2de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">VEGAN</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Vegan</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
            </div>
          </v-card-text>

           <v-card-actions v-if="['/categories'].includes($route.path)">
            <v-btn outlined block color="green" @click="showRecipes('vegan')">Select This Plan</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AppCategories",
  methods: {
      showRecipes() {
          console.log('Hello');
      }
  }
};
</script>

<style scoped>
</style>