import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
    return (
        <div className='poke-title'>
            <h1>PokéHeight</h1>
            <img src={logo} alt="PokéHeight logo" id='poke-logo' />
        </div>
    )
}

export default Header