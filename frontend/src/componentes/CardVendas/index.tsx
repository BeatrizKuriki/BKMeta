import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import BotaoNotificacao from '../BotaoNotificacao'
import './style.css'

function CardVendas() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);


    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        console.log(dmin);



        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content);
            });
    }, [minDate, maxDate]);


    return (
        <div className="bkmeta-card">
            <h2 className="bkmeta-vendas-titulo">Vendas</h2>
            <div>
                <div className="bkmeta-form-controle-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="bkmeta-form-controle"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="bkmeta-form-controle-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
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
                        {sales.map(sale => {
                            return (<tr key={sale.id}>
                                <td className="responsividade992">{sale.id}</td>
                                <td className="responsividade">{new Date (sale.date).toLocaleDateString()}</td>
                                <td>{sale.sellerName}</td>
                                <th className="responsividade992">{sale.visited}</th>
                                <th className="responsividade992">{sale.deals}</th>
                                <td>R$ {sale.amount.toFixed(2)}</td>
                                <td>
                                    <div className="bkmeta-red-btn-container">
                                        <BotaoNotificacao />
                                    </div>
                                </td>
                            </tr>

                            )
                        })}
                    </tbody>
                </table>

            </div>


        </div>
    )

}

export default CardVendas