import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT='ADD_INGREDIENT'
export const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10),
      ]
}
export function ShoppingListReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: [...state.ingredients]
            }
    }
    return state;
}