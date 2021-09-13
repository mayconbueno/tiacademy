import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import { Cliente } from './pages/Cliente/Cliente';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import { Servico } from './pages/Servico/Servico';
import {VisualizarServico} from './pages/Servico/VisualizarServico';
import { Pedido } from './pages/Pedido';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido';
import { Menu } from './components/Menu';
import { Cadastrar } from "./pages/Servico/Cadastrar";
import { Editar } from "./pages/Servico/Editar";
import { CadastrarCliente } from './pages/Cliente/Cadastrar';
import { EditarCliente } from './pages/Cliente/Editar';
import { CadastrarPedido } from './pages/Pedido/cadastrar';
import { EditarPedido } from './pages/Pedido/Editar';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/cadastracliente" component={CadastrarCliente}/>
          <Route path="/editarcliente" component={EditarCliente}/>

          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/editar-servico" component={Editar}/>

          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="editarpedido" component={EditarPedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;