import {create} from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, type RecipesSliceType } from './recipeSlice'
import {type FavoritesSliceType, createFavoritesSlice} from './favoritesSlice'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))