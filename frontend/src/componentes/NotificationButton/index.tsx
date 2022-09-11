import axios from 'axios';
import { toast } from 'react-toastify';
import icone from '../../assets/img/icone-notificacao.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
    saleId: number;

}

function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
       toast.info("SMS ENVIADO COM SUCESSO!!")
    })

}

function NotificationButton({saleId}: Props) {
    return (
        <>
            <div className="bkmeta-red-btn" onClick={() => handleClick(saleId)} >
                <img src={icone} alt="Notificar" />
            </div>
        </>
    )

}

export default NotificationButton