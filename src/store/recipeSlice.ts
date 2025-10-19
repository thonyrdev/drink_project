import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"


export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (serchFilter : SearchFilter) => Promise<void>

}
export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks :{
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
           categories 
        })
    },
    searchRecipes: async(filters) => {
        const drinks  = await getRecipes(filters)
        console.log(drinks)
        set({
            drinks
        })
    }
})