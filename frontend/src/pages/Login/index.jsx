import md5 from 'md5';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getUserAxios, putUserStatus } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Image } from './styles';

export function Login() {
  const history = useHistory();

  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  async function verifyUser () {
    const user = await getUserAxios(cpf);
    await putUserStatus(cpf, 'on');

    if (cpf === user.cpf && md5(password) === user.password) {
      history.push('/chat');
    } else {
      alert('CPF ou senha incorretos.');
    }
  }

	return (
		<Container>
      <Form>
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

        <Button title="Entrar" onClick={verifyUser} />

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
