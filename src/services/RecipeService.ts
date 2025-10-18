import axios from "axios"
import { CategoriesAPIResonseSchema } from "../utils/recipes-schema"

export async function getCategories(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data }= await axios(url)
    console.log(data)
}