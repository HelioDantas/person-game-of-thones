
import * as stateMachineDefinitions from "./stateMachineDefinitions";

const initialState = {
    characters: [],
    actualCharacter: 0,
    currentState: stateMachineDefinitions.IS_LOADING
};

export const CHARACTERS_LOADED = Symbol("CHARACTERS_LOADED");
export const CHANGE_ACTUAL_CHARACTER = Symbol("CHANGE_ACTUAL_CHARACTER");
export const ANIMATE_CHARACTER_IN = Symbol("ANIMATE_CHARACTER_IN");
export const CHARACTER_IS_VISIBLE = Symbol("CHARACTER_IS_VISIBLE");
export const ANIMATE_CHARACTER_OUT = Symbol("ANIMATE_CHARACTER_OUT");

function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CHARACTERS_LOADED:
            return {
                ...state,
                characters: action.payload
            };
        case CHANGE_ACTUAL_CHARACTER:
            return {
                ...state,
                actualCharacter: action.payload
            };
        case ANIMATE_CHARACTER_IN:
            return {
                ...state,
                currentState: stateMachineDefinitions.ENTERING_CARD
            };
        case CHARACTER_IS_VISIBLE:
            return {
                ...state,
                currentState: stateMachineDefinitions.CARD_VISIBLE
            };
        case ANIMATE_CHARACTER_OUT:
            return {
                ...state,
                currentState: stateMachineDefinitions.LEAVING_CARD
            };
        default:
            return state;
    }
}

export default reducer;