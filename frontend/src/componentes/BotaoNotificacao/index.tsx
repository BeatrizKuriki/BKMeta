import icone from '../../assets/img/icone-notificacao.svg'
import './style.css'

function BotaoNotificacao() {
    return (
        <>
            <div className="bkmeta-red-btn">
                <img src={icone} alt="Notificar"/>
            </div>
        </>
    )

}

export default BotaoNotificacao