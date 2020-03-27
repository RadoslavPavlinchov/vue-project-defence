<template>
  <div class="recipes">
    <h1>Recipes Page</h1>
    <div class="recipe-container">
      <div v-for="recipe in recipes" :key="recipe.name">
        <div class="recipe-box">
          <img :src="recipe.thumbnail" />
          <div>
            <h3>{{recipe.name}}</h3>
            {{recipe.ingredients}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRecipes",

  components: {},
  data() {
    return {
      recipes: [
        {
          name: "Musaka0",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        },
        {
          name: "Musaka1",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        },
        {
          name: "Musaka2",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        },
        {
          name: "Musaka3",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        },
        {
          name: "Musaka4",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        },
        {
          name: "Musaka5",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        },
        {
          name: "Musaka6",
          ingredients:
            "potatoes, yogurt, mince, mince, potatoes, yogurt, mince",
          thumbnail:
            "https://images.unsplash.com/photo-1584844600340-15e83072127e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80",
          categoty: "Vegeterian"
        }
      ]
    };
  }
};
</script>


<style scoped lang=scss>
.recipe-container {
  .recipe-box {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    text-align: left;

    display: flex;
    justify-content: flex-start;

    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>