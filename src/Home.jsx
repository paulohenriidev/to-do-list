import { v4 as uuid } from "uuid";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FcCheckmark } from "react-icons/fc";
import {
  Background,
  Container,
  Input,
  Buttom,
  Item,
  Text,
  ListItem,
  Title,
  TopInput,
} from "../src/styles/styles";

function Home() {
  const [list, setList] = useState([
    { id: uuid(), task: "Adicione uma tarefa" },
  ]);
  const [task, setTask] = useState("");

  function changeEntry(event) {
    setTask(event.target.value);
  }

  function addEntry() {
    setList([{ id: uuid(), task }, ...list]);
  }

  return (
    <Background><Title>Lista de Tarefas</Title>
      <Container>
        
        <TopInput>
    
          <Input
            onChange={changeEntry}
            placeholder="O que tenho que fazer?"
          ></Input>
          <Buttom onClick={addEntry}>Adicionar</Buttom>
        </TopInput>
        <Item>
          {list.map((item) => (
            <ListItem key={item.id}>
              <FcCheckmark />
              <Text>{item.task}</Text>
              <TiDeleteOutline />
            </ListItem>
          ))}
        </Item>
      </Container>
    </Background>
  );
}

export default Home;

// Sempre que eu quiser adicionar ou alterar algo na lista, eu vou usar o useState
// useState é um hook do react que me permite criar variáveis de estado
