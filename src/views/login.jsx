import React, { Component } from "react";
import Card from '../component/card'
import FormGroup from "../component/form-group";

class Login extends Component {

state = {
    email: '',
    senha: ''
}

entrar = () => {
    console.log("Email: " + this.state.email);
        console.log("Senha: " + this.state.senha);
}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email" 
                                    value ={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                                    value={this.state.senha} onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>
                                <button type="button" className="btn btn-success mt-3 mx-1" onClick={this.entrar}>Entrar</button>
                                <button type="button" className="btn btn-danger mt-3 ">Cadastrar</button>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login