import { useState } from 'react';

import { postUserAxios } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Image } from './styles';

export function CreateUser() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userConfirm,  setUserConfirm] = useState(false);

  const createUser = async () => {
    console.log('entrei nafunção');

    if (password !== passwordConfirm) {
      alert('Verifique o campo senha')
    } else {
      await postUserAxios({
        cpf, password, name, lastname, status: 'off'
      });
      setUserConfirm(true);
    }
  }

  if (userConfirm) {
    alert('Usuário cadastrado com sucesso!');
  }

	return (
		<Container>
      <Form>
        <h1>RealChat</h1>

        <h2>Crie sua conta de usuário</h2>

        <Input
          type="text"
          value={name}
          placeholder="Nome" 
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="text"
          value={lastname}
          placeholder="Sobrenome" 
          onChange={(e) => setLastName(e.target.value)}
        />

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

        <Input
          type="password" 
          value={passwordConfirm}
          placeholder="Confirme sua Senha" 
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <Button title="Cadastrar" onClick={createUser} />

        <a href="/">
          Voltar para o login
        </a>
      </Form>		

      <Image />
		</Container>
	);
}
