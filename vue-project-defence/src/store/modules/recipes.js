import axios from "axios";

const state = {
    recipes: []
};

const getters = {
    allRecipes: state => state.recipes,
};

const actions = {
    async fetchRecipes({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        commit('setRecipes', response.data);
    },
    async createRecipe({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title });

        commit('createRecipe', response.data);
    },
    async deleteRecipe({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        commit('deleteRecipe', id);
    },
    async filterRecipes({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

        commit('setRecipes', response.data)
    }
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