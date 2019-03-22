import { TYPES } from "../actions/pokemonActions";
import { types } from "util";

const initialState = {
    myTeam: [] 
}

export const pokemonReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.ADD:
            return {
                ...state,
                myTeam: [...payload]
            }
        default:
            return state;
    }
};