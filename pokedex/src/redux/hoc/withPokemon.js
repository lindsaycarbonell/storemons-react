import { connect } from "react-redux";
import { addPokemon } from "../actions/pokemonActions";

export const withPokemon = ComposedComponent => {
    //DO I NEED MAP STATE TO PROPS???

    const mapDispatchToProps = dispatch => {
        return {
            addPokemon: dex_id => dispatch(addPokemon(dex_id))
        };
    };

    return connect (
        mapDispatchToProps
    )(ComposedComponent);
}