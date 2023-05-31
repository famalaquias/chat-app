import { useEffect, useState } from "react"

import { getUserAllAxios } from "../../services/api";

import { Container } from './styles';

export function UserOn() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getAllUser = async () => {
      const userAll = await getUserAllAxios();

      const newList = userAll.filter(({status}) => status === 'on' );

      setUsers(newList);
    }
    setTimeout(() => {
      getAllUser();
      
      setCounter(counter+1);
    }, 3000);
  }, [counter])

  return (
    <Container>
      <ul>
        {
          users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))
        }
      </ul>
    </Container>
  );
}
