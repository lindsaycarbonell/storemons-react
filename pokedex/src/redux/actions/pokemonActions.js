export const TYPES = {
    ADD: "POKEMON:ADD"
}

export const addPokemon = dex_id => {
    return {
        TYPE: TYPES.ADD,
        payload: dex_id
    }
}