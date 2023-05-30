import { useState, useEffect } from 'react';

import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

import { Input } from '../../components/Input';
// import { Button } from '../../components/Button';

import { Container, Form } from './styles';

const myId = uuidv4();
const socket = io('http://localhost:3333', { transports : ['websocket'] });
socket.on('connect', () => console.log('[IO] Connected to server'));

export function RealChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newMennsage = (message) => {
      setMessages([...messages, message]);
    }
    socket.on('chat.message', newMennsage);
    return () => {
      socket.off('chat.message', newMennsage);
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat.message', {
        id: myId,
        message,
      });
      setMessage('');
    }
  };

  return (
    <Container>
      <main>
      <ul className="list">
        {messages.map((m, i) => (
          <li key={ `${m.id}-${i}` } className={`list__item list__item--${m.id === myId ? 'mine' : 'other'}`}>
            <span className={`message message--${m.id === myId ? 'mine' : 'other'}`}>
              {m.message}
            </span>
          </li>
        ))}
      </ul>
      </main>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite uma mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* <Button title="Enviar" onClick={handleSubmit} /> */}
      </Form>
    </Container>    
  );
}
