import "../styles/PokéList.css"
import speciesList from "../datas/speciesList"
import { useState } from "react"
import PokeButton from "./PokéButton"

/**
 * 
 * @param {object}                                          param0 
 * @param {React.Dispatch<React.SetStateAction<{}>>}        param0.setActive 
 * @param {React.Dispatch<React.SetStateAction<number>>}    param0.setHeight 
 * 
 * @param {object}                                          param0.active 
 * @param {string}                                          param0.active.id 
 * @param {string}                                          param0.active.name 
 * @param {string}                                          param0.active.form 
 * @param {number}                                          param0.active.height 
 * @param {number}                                          param0.active.space 
 * @param {number}                                          param0.active.topSpace 
 * @param {boolean}                                         param0.active.floatting 
 * @param {boolean}                                         param0.active.snake 
 * @param {number}                                          param0.active.orientation 
 * @param {string}                                          param0.active.miniature 
 * @param {string}                                          param0.active.silhouette 
 * @returns 
 */
function PokeList({ active, setActive, setHeight }) {
    const [ search, setSearch ] = useState('');
    return (
        <div className='poke-list'>
            <h2>Liste des Pokémon</h2>
            <input placeholder='Recherche' onChange={e => setSearch(e.target.value)} />
            
            {speciesList.map(values =>
                values.name.toLowerCase().includes(search.toLowerCase()) ? (<PokeButton values={values} active={active} setActive={setActive} setHeight={setHeight} />) : null
            )}
        </div>
    )
}

export default PokeList