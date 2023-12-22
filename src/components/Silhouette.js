import '../styles/Silhouette.css'
import louka from '../assets/silhouettes/Louka.png'

/**
 * 
 * @param {object}                                          param0
 * @param {number}                                          param0.max
 * @param {string}                                          param0.src
 * 
 * @param {object}                                          param0.specie 
 * @param {string}                                          param0.specie.id 
 * @param {string}                                          param0.specie.name 
 * @param {string}                                          param0.specie.form 
 * @param {number}                                          param0.specie.height 
 * @param {number}                                          param0.specie.space 
 * @param {number}                                          param0.specie.topSpace 
 * @param {boolean}                                         param0.specie.floatting 
 * @param {boolean}                                         param0.specie.snake 
 * @param {number}                                          param0.specie.orientation 
 * @param {string}                                          param0.specie.miniature 
 * @param {string}                                          param0.specie.silhouette 
 * @returns 
 */
function Silhouette({ max, specie={name:'Louka', height: 1.6, space:200, topSpace:0, floatting:false}, silhouette=louka}) {
    const classes = ['poke-silhouette'];
    if (specie.name === 'Louka') {
        classes.push('poke-silhouette-louka');
    } else {
        classes.push('poke-silhouette-pokemon');
    }
    if (specie.floatting) {
        classes.push('poke-silhouette-floatting');

        if (specie.height > 1.5) {
            classes.push('poke-silhouette-floatting-over');
        }
    }
    return (
        <img alt={`${specie.name} silhouette`} src={silhouette} className={classes.join(' ')} style={{
                '--max': max,
                '--height': specie.height,
                '--space': specie.space,
                '--topSpace': specie.topSpace
            }} />
    )
}

export default Silhouette