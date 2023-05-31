import styled from 'styled-components';

export const Container = styled.div`
.container {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  height: 100vh;
  justify-content: space-between;
  width: 85vw;
}

.form {
  background: #434758;
  padding: 1rem;
}

.form__field {
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  color: #333;
  font-size: 1.2rem;
  padding: .5rem 1rem;
  width: 100%;
}

.form__field:focus {
  border-color: #a3f7ff;
  box-shadow: 0 0 7px #a3f7ff;
  outline: none;
}

.list {
  margin: 0;
  padding: 1rem;
}

.list__item {
  list-style: none;
}

.list__item.list__item--mine {
  text-align: right;
}

.message {
  border: 1px solid transparent;
  border-radius: 5px;
  display: inline-block;
  list-style: none;
  margin-bottom: 1rem;
  padding: .5rem 1rem;
}

.message.message--mine {
  background: #c3e88d;
  border-color: #82be27;
  text-align: right;
}

.message.message--other {
  background: #89ddff;
  border-color: #1abeff;
}
`;