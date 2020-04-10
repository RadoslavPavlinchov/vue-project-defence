import * as firebase from 'firebase'

const state = {
    user: null
};

const getters = {
    user(state) {
        return state.user
    }
};

const actions = {
    addRecipeToFavs({commit, getters}, payload) {
        // commit('setLoading', true)
        const user = getters.user
        firebase.database().ref('/users/' + user.id).child('/favorites/').push(payload)
            .then(data => {
                // commit('setLoading', false)
                commit('addRecipeToFavorites', {id: payload, fireBaseKey: data.key})
            })
            .catch(error => {
                console.log(error);
                // commit('setLoading', false)
            })
    },
    removeRecipeFromFavs({commit, getters}, payload) {
        // commit('setLoading', true)
        const user = getters.user
        if (!user.fireBaseKeys) {
            return
        }
        const fireBaseKey = user.fireBaseKeys[payload]
        firebase.database().ref('/users/' + user.id + '/favorites/').child(fireBaseKey)
            .remove()
            .then(() => {
                // commit('setLoading', false)
                commit('removeRecipeFromFavorite', payload)
            })
            .catch(error => {
                console.log(error);
                // commit('setLoading', false)
            })
    },
    signUserUp({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.user.uid,
                    favoriteRecipes: [],
                    fireBaseKeys: {}
                }
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setLoading', true)
                commit('setError', error)
                console.log(error);
            })
    },
    signUserIn({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.uid,
                    createdRecipes: [],
                    fireBaseKeys: {}
                }
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setLoading', true)
                commit('setError', error)
                console.log(error);
            })
    },
    autoSignIn({ commit }, payload) {
        commit('setUser', { 
            id: payload.uid, 
            favoriteRecipes: [],
            fireBaseKeys: {} })
    },
    fetchUserData({commit, getters}) {
        commit('setLoading', true)
        firebase.database().ref('/users/' + getters.user.id + '/favorites/').once('value')
            .then(data => {
                const dataPairs = data.val()
                let favoriteRecipes = []
                let swappedPairs = {}
                for (let key in dataPairs) {
                    favoriteRecipes.push(dataPairs[key])
                    swappedPairs[dataPairs[key]] = key
                }
                const updatedUser = {
                    id: getters.user.id,
                    favoriteRecipes: favoriteRecipes,
                    fireBaseKeys: swappedPairs
                }
                // commit('setLoading', false)
                commit('setUser', updatedUser)
            })
            .catch(error => {
                console.log(error);
                // commit('setLoading', false)
            })
    },
    signUserOut({ commit }) {
        firebase.auth().signOut()
        commit('setUser', null)
    }
};

const mutations = {
    addRecipeToFavorites: (state, payload) => {
        const id = payload.id
        if (state.user.favoriteRecipes.findIndex(recipe => recipe.id === id) >= 0) {
            return
        }
        state.user.favoriteRecipes.push(id)
        state.user.fireBaseKeys[id] = payload.fireBaseKey
    },
    removeRecipeFromFavorite: (state, payload) => {
        const favoriteRecipes = state.user.favoriteRecipes
        favoriteRecipes.splice(favoriteRecipes.findIndex(recipe => recipe.id === payload), 1)
        Reflect.deleteProperty(state.user.fireBaseKeys, payload)
    },
    setUser: (state, payload) => state.user = payload
};

export default {
    state,
    getters,
    actions,
    mutations
}