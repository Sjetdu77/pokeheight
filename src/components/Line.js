import '../styles/Line.css'

/**
 * 
 * @param {object} param0
 * @param {string} param0.state 
 * @param {number} param0.number
 * @param {number} param0.max
 * @returns 
 */
function Line({ state, number, max }) {
    const classes = [];
    if (state === 'ground') {
        classes.push('poke-ground')
    } else {
        classes.push('poke-line')
        if (state === 'meter') {
            classes.push('poke-meter')
        }
    }
    return (
        <div style={{ "--num": number, '--max': max }} className={ classes.join(' ') }></div>
    )
}

export default Line;