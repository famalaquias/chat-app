import { useState } from 'react';

import { getUserAxios, postUserAxios } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Image } from './styles';

export function CreateUser() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userConfirm,  setUserConfirm] = useState("");

  async function createUser () {
    const user = await getUserAxios(cpf);

    if (cpf === user.cpf) {
      alert('Esse CPF já está em uso.');
    }

    if (password === passwordConfirm) {
      const newUser = { name, lastName, cpf, password, status: 'off' };

      setUserConfirm(await postUserAxios(newUser));
    }
  }

  if (userConfirm.length > 3) {
    alert('Usuário cadastrado com sucesso!');
  }

	return (
		<Container>
      <Form onSubmit={createUser}>
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
          value={lastName}
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

        <Button title="Cadastrar" />
        {/* onClick={handleSignUp} */}

        <a href="/">
          Voltar para o login
        </a>
      </Form>		

      <Image />
		</Container>
	);
}
