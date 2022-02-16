import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../utils/NavigationService'

const initialState = {
    data: null,
    favorites: null,
    loading: false,
    refresh: 0,
}

export const slice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        propertiesReqInit: (state) => {
            state.loading = true
        },
        getItemsSuccess: (state, data) => {
            state.loading = false
            state.data = data.payload.properties
            console.log("addItemSuccess", data)
        },
        onAddFav: (state, data) => {
            state.loading = false
            console.log("addItemSuccess", data)
            state.refresh = state.refresh + 1
        },
        onGetFavorites: (state, data) => {
            state.loading = false
            state.favorites = data.payload.properties
        },
        addItemSuccess: (state, data) => {
            state.loading = false
            setTimeout(() => {
                reset('HomeSeller')
            }, 500);
        },
        propertiesReqError: (state, data) => {
            console.log(data.payload)
            state.loading = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { propertiesReqError, onAddFav, onGetFavorites, addItemSuccess, propertiesReqInit, getItemsSuccess } = slice.actions
export default slice.reducer