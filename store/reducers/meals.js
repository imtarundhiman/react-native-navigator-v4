import {MEALS} from '../../data/dummy-data'

const initialData = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialData, action) => {
    return state
}

export default mealsReducer;