import '../styles/PokéButton.css'

/**
 * 
 * @param {object}                                          values 
 * @param {string}                                          values.id 
 * @param {string}                                          values.name 
 * @param {string}                                          values.form 
 * @param {number}                                          values.height 
 * @param {number}                                          values.space 
 * @param {number}                                          values.topSpace 
 * @param {boolean}                                         values.floatting 
 * @param {boolean}                                         values.snake 
 * @param {number}                                          values.orientation 
 * @param {string}                                          values.miniature 
 * @param {string}                                          values.silhouette 
 * 
 * @param {object}                                          active 
 * @param {string}                                          active.id 
 * @param {string}                                          active.name 
 * @param {string}                                          active.form 
 * @param {number}                                          active.height 
 * @param {number}                                          active.space 
 * @param {number}                                          active.topSpace 
 * @param {boolean}                                         active.floatting 
 * @param {boolean}                                         active.snake 
 * @param {number}                                          active.orientation 
 * @param {string}                                          active.miniature 
 * @param {string}                                          active.silhouette 
 * 
 * @param {React.Dispatch<React.SetStateAction<Array>>}     setActive 
 * @param {React.Dispatch<React.SetStateAction<number>>}    setHeight 
 */
function onClick(values, active, setActive, setHeight) {
    const lastButton = document.getElementById(`n${active.id}_button`);
    if (lastButton) {
        lastButton.classList.remove('poke-list-button-active')
    }
    
    let height = 1.6;
    if (values.id === active.id) {
        setActive({})
    } else {
        const button = document.getElementById(`n${values.id}_button`);
        button.classList.add('poke-list-button-active')
        setActive(values);

        if (values.height > height && !values.snake) {
            height = values.height;
        }
    }

    setHeight(height);
}

/**
 * 
 * @param {object}                                          param0 
 * @param {React.Dispatch<React.SetStateAction<{}>>}        param0.setActive 
 * @param {React.Dispatch<React.SetStateAction<number>>}    param0.setHeight 
 * 
 * @param {object}                                          param0.values 
 * @param {string}                                          param0.values.id 
 * @param {string}                                          param0.values.name 
 * @param {string}                                          param0.values.form 
 * @param {number}                                          param0.values.height 
 * @param {number}                                          param0.values.space 
 * @param {number}                                          param0.values.topSpace 
 * @param {boolean}                                         param0.values.floatting 
 * @param {boolean}                                         param0.values.snake 
 * @param {number}                                          param0.values.orientation 
 * @param {string}                                          param0.values.miniature 
 * @param {string}                                          param0.values.silhouette 
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
function PokeButton({ values, active, setActive, setHeight }) {
    const classes = ['poke-list-button']
    if (values.id === active.id) {
        classes.push('poke-list-button-active');
    }
    return (
        <button key={values.id} id={`n${values.id}_button`} onClick={() => {onClick(values, active, setActive, setHeight)}} className={classes.join(' ')}>
            <table>
                <tbody>
                    <tr>
                        <td width={50}><img alt={`${values.id} Miniature`} width={50} height={50} src={values.miniature} title={`${values.id} - ${values.name}`} /></td>
                        <td>{values.name}{values.form ? (<span className="poke-form"> - {values.form}</span>) : ''}</td>
                    </tr>
                </tbody>
            </table>
        </button>
    )
}

export default PokeButton