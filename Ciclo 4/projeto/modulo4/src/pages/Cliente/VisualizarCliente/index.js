import axios from "axios";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { api } from "../../../config";

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + '/listaclientes')
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Error: Não foi possível conectar a API.'
                });
            });
    }
    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.erro === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <Table striped hover >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id}
                                        className='btn btn-outline-primary btn-sm'>Consultar</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}