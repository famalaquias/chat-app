import { Chat } from '../../components/Chat';
import { UserOn } from '../../components/UserOn';

import { Container } from './styles';

export function RealChat() {
  return (
    <Container>
      <UserOn />
      <Chat />
    </Container>
  );
}
