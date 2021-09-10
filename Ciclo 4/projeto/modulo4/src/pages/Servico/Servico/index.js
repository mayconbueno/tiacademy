import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {
    console.log(props.macth.params.id);

    const [data, setData] = useState([]);
    const [id] = useState(props.macth.params.id);

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    console.log(response.data.servico)
                    setData(response.data.servico)
                })
                .catch(() => {
                    console.log("Erro: não foi possível conectar a API")
                })
        }
        getServico();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-autop-2">
                        <h1> Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico"
                            className="btn btn-outline-primary btn-sm">Servicos</Link>
                        <Link to="/editarservico/"
                            className="btn btn-outline-warning btn-sm">Editar</Link>
                    </div>
                        <dl className="row">
                            <dt className="col-sm-3">Nome</dt>
                            <dd className="col-sm-9">{data.nome}</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-sm-3">Descrição</dt>
                            <dd className="col-sm-9">{data.descricao}</dd>
                        </dl>
                </div>
            </Container>
        </div>
    )
}