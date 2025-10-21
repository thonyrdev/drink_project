import type{ StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType ={
    favorites: Recipe[]
    handleClickFavorite: (recipe:Recipe) => void
    favoriteExiste: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get,api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExiste(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        }else {
            set((state) => ({
                favorites : [...state.favorites,recipe]
            }))
        }
        createRecipeSlice(set,get,api).closeModal()
    },
    favoriteExiste: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    } 
})
