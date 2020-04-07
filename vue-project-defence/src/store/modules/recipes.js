// import axios from "axios";
import axiosDb from "../../axios/axios-database";

const state = {
    recipes: [],
    users: {
        id: 'dsajdhkasjhdsadasd',
        createdRecipes: ['daskjdhasjhdikasjhd']
    }
};

const getters = {
    allRecipes: state => state.recipes,
};

const actions = {
    async fetchRecipes({ commit }) {
        const response = await axiosDb.get('recipes.json');
        let posts = [];
        const allPostsRes = response.data;
        for (const postId in allPostsRes) {
            posts.push({
                postId,
                ...allPostsRes[postId]
            });
        }
        commit('setRecipes', posts);
    },
    async createRecipe({ commit }, {recipe, img, description, ingredients}) {
        const response = await axiosDb.post('recipes.json', { 
            recipe,
            img,
            description,
            ingredients,
        });

        commit('createRecipe', response.data);
    },
    // async deleteRecipe({ commit }, id) {
    //     await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    //     commit('deleteRecipe', id);
    // },
    // async filterRecipes({ commit }, e) {
    //     const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    //     commit('setRecipes', response.data)
    // }

    // add update

};

const mutations = {
    setRecipes: (state, recipes) => state.recipes = recipes,
    createRecipe: (state, recipe) => state.recipes.unshift(recipe),
    deleteRecipe: (state, id) => state.recipes = state.recipes.filter(recipe => recipe.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}