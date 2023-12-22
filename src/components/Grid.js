import Line from './Line';

/**
 * 
 * @param {object} param0
 * @param {number} param0.max 
 * @returns 
 */
function Grid({ max }) {
    const deciMeters = [...Array(max + 1).keys()];
    deciMeters.shift()
    return (
        <div className='poke-grid'>
            {
                deciMeters.map(i => {
                    const a = (
                        <Line key={i} state={ i % 10 === 0 ? 'meter' : '' } number={i} max={max} />
                    )
                    return a
                })
            }
            <Line state='ground' />
        </div>
    )
}

export default Grid