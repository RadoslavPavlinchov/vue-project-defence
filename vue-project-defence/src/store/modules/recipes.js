import * as firebase from 'firebase'

const state = {
    loadedRecipes: [],
};

const getters = {
    loadedRecipes(state) {
        return state.loadedRecipes.sort((a, b) => {
            return a.date > b.date
        })
    },
    loadedRecipe(state) {
        return (recipeId) => {
            return state.loadedRecipes.find(recipe => {
                return recipe.id === recipeId
            })
        }
    }
};

const actions = {
    loadRecipes({ commit }) {
        firebase.database().ref('recipes').once('value')
            .then(data => {
                const recipes = []
                const obj = data.val()
                for (let key in obj) {
                    recipes.push({
                        id: key,
                        title: obj[key].title,
                        description: obj[key].description,
                        imageUrl: obj[key].imageUrl,
                        date: obj[key].date,
                        creatorId: obj[key].creatorId
                    })
                }
                commit('setLoadedRecipes', recipes)
            })
            .catch(error => {
                console.log(error);
            })
    },
    createRecipe({ commit, getters }, payload) {
        const recipe = {
            title: payload.title,
            description: payload.description,
            creatorId: getters.user.id,
            ingredients: payload.ingredients,
            date: payload.date.toISOString()
        }
        let imageUrl
        let key
        let ext

        firebase.database().ref('recipes').push(recipe)
            .then(data => {
                key = data.key
                return key
            })
            .then(key => {
                const filename = payload.image.name
                ext = filename.slice(filename.lastIndexOf('.'))
                return firebase.storage().ref('recipes/' + key + '.' + ext).put(payload.image)
            })
            .then(() => {
                return firebase.storage().ref('recipes/' + key + '.' + ext).getDownloadURL()
            })
            .then(url => {
                imageUrl = url
                return firebase.database().ref('recipes').child(key).update({ imageUrl: imageUrl })
            })
            .then(() => {
                commit('createRecipe', {
                    ...recipe,
                    imageUrl: imageUrl,
                    id: key
                })
            })
            .catch(error => {
                console.log(error);
            })
    },
    updateRecipe({commit}, payload) {
        const updateObj = {}
        if (payload.title) {
            updateObj.title = payload.title
        }
        if (payload.description) {
            updateObj.description = payload.description
        }
        if (payload.ingredients) {
            updateObj.ingredients = payload.ingredients
        }
        firebase.database().ref('recipes').child(payload.id).update(updateObj)
            .then(() => {
                commit('updateRecipe', payload)
            })
            .catch(error => {
                console.log(error);
            })
    },
    deleteRecipe({ commit }, payload) {
        // firebase.database().ref('recipes').child(payload.id).remove()
        firebase.database().ref('recipes').child(payload.id).remove()
            .then(() => {
                // commit('setLoading', false)
                commit('deleteRecipe', payload)
            })
            .catch(error => {
                console.log(error);
                // commit('setLoading', false)
            })
    },
};

const mutations = {
    deleteRecipe: (state, payload) => {
        state.loadedRecipes.splice(state.loadedRecipes.indexOf(payload.id), 1)
    },
    setLoadedRecipes: (state, payload) => state.loadedRecipes = payload,
    createRecipe: (state, payload) => state.loadedRecipes.push(payload),
    updateRecipe: (state, payload) => {
        const recipe = state.loadedRecipes.find(recipe => {
            return recipe.id === payload.id
        })
        if (payload.title) {
            recipe.title = payload.title
        }
        if (payload.title) {
            recipe.description = payload.description
        }
        if (payload.date) {
            recipe.date = payload.date
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}