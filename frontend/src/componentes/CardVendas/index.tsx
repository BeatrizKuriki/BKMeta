import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BotaoNotificacao from '../BotaoNotificacao'
import './style.css'

function CardVendas() {
    return (
        <div className="bkmeta-card">
            <h2 className="bkmeta-vendas-titulo">Vendas</h2>
            <div>
                <div className="bkmeta-form-controle-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="bkmeta-form-controle"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="bkmeta-form-controle-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="bkmeta-form-controle"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="bkmeta-vendas-table">
                    <thead>
                        <tr>
                            <th className="responsividade992">ID</th>
                            <th className="responsividade">Data</th>

                            <th>Vendedor</th>
                            <th className="responsividade992">Visitas</th>
                            <th className="responsividade992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="responsividade992">#341</td>
                            <td className="responsividade">06/09/2022</td>
                            <td>Joaquim</td>
                            <th className="responsividade992">15</th>
                            <th className="responsividade992">11</th>
                            <td>R$ 66.000</td>
                            <td>
                                <div className="bkmeta-red-btn-container">
                                    <BotaoNotificacao />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="responsividade992">#341</td>
                            <td className="responsividade">06/09/2022</td>
                            <td>Joaquim</td>
                            <th className="responsividade992">15</th>
                            <th className="responsividade992">11</th>
                            <td>R$ 66.000</td>
                            <td>
                                <div className="bkmeta-red-btn-container">
                                    <BotaoNotificacao />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="responsividade992">#341</td>
                            <td className="responsividade">06/09/2022</td>
                            <td>Joaquim</td>
                            <th className="responsividade992">15</th>
                            <th className="responsividade992">11</th>
                            <td>R$ 66.000</td>
                            <td>
                                <div className="bkmeta-red-btn-container">
                                    <BotaoNotificacao />

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    )

}

export default CardVendas