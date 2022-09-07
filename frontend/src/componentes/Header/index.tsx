import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (

        <header>
            <div className="logo-container">
                <img src={logo} alt="BkMeta"/>
                    <h1>BKMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.linkedin.com/in/beatriz-alencar-kuriki/">Beatriz Alencar Kuriki</a>
                    </p>
                    
                    </div>

                </header>
    )
  
  }

export default Header
