import { Container } from 'reactstrap';

export const Home = () => {
    
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-autop-2">
                        <h1> Página Inicial</h1>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarcliente" className="btn btn-outline-warning btn-sm">Cliente</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarservico" className="btn btn-outline-warning btn-sm">Serviço</a>
                    </div>
                    <div className="p-2">
                            <a href="/visualizarpedido" className="btn btn-outline-warning btn-sm">Pedido</a>
                        </div>
                    
                </div>
            </Container>
        </div>
    )
}