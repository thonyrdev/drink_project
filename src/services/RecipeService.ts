import axios from "axios"
import { CategoriesAPIResonseSchema, DrinksAPIResponse } from "../utils/recipes-schema"
import type { SearchFilter } from "../types"

export async function getCategories(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data }= await axios(url)
    const result = CategoriesAPIResonseSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}

export async function getRecipes(filters : SearchFilter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingridient}`
    const { data }= await axios(url)
    const result = DrinksAPIResponse.safeParse(data)
    if(result.success){
        return result.data
    }

}