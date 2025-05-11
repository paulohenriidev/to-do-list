import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import {
  Background,
  Container,
  Input,
  Buttom,
  List,
  Item,
  Text,
  Title,
} from "../src/styles/styles";

function Home() {
  const [list, setList] = useState()
  
function changeEntry() {
  setList.push({id: uuid(), task: "Estudar React"});

}
function addEntry() {
  
}
  return (
    <Background>
      <Title>Lista de Tarefas</Title>
      <Container>
        <Input onChange={changeEntry} placeholder="O que tenho que fazer?"></Input>
        <Buttom onClick={addEntry}>Adicionar</Buttom>

        <List>
          <Item>
          {list.map((item) => (
            <Text key={item.id}>{item.task}</Text>
          ))} 
          </Item>
        </List>
      </Container>
    </Background>
  );
}

export default Home;


// Sempre que eu quiser adicionar ou alterar algo na lista, eu vou usar o useState
// useState é um hook do react que me permite criar variáveis de estado