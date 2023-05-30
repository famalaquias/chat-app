// import { Link } from "react-router-dom";
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { getUserAxios } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Image } from './styles';

export function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  async function verifyUser () {
    const user = await getUserAxios();

    if (cpf === user.cpf && password === user.password) {
      <p>Logado</p>
    } else {
      alert('CPF ou senha incorretos.');
    }
  }

	return (
		<Container>
      <Form onSubmit={verifyUser}>
        <h1>RealChat</h1>

        <h2>Faça login para conversar no chat</h2>

        <Input
          type="text"
          value={cpf}
          placeholder="CPF" 
          onChange={(e) => setCpf(e.target.value)}
        />

        <Input
          type="password" 
          value={password}
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" />
        {/* onClick={handleSignIn} */}

        <a href="/register">
          Criar conta
        </a>	

        {/* <Link to="#">
          Criar conta
        </Link> */}
      </Form>		

      <Image />
		</Container>
	);
}
