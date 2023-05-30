import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function Input({ ...rest }) {
  return(
    <Container>
      <input {...rest} />
    </Container>
  );
}
