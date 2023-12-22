import '../styles/Height.css'
import Silhouette from './Silhouette';
import Grid from './Grid';

/**
 * 
 * @param {object}                                          param0 
 * @param {number}                                          param0.heightMax
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
function Height({ active, heightMax }) {
    let max = Math.ceil(heightMax * 10) + 1;
    if (active.floatting && active.height && active.height >= 1.5) {
        max += 5;
    }
    return (
        <div className='poke-height'>
            <Grid max={max} />
            <Silhouette max={max} />
            {
                active.id && !active.snake ? (<Silhouette max={max} specie={active} silhouette={active.silhouette} />) : null
            }
        </div>
    )
}

export default Height