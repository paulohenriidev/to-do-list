import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Trash,
  Background,
  Container,
  Input,
  Buttom,
  Item,
  Text,
  ListItem,
  Title,
  TopInput,
  CheckIcon,
  UncheckIcon,
  StatusContainer,
  StatusBox,
} from "../src/styles/styles";

function Home() {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("taskList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

  const changeEntry = (event) => setTask(event.target.value);

  const addEntry = () => {
    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      toast.error("Digite uma tarefa");
      return;
    }
    if (
      list.some((item) => item.task.toLowerCase() === trimmedTask.toLowerCase())
    ) {
      toast.warn("Tarefa já cadastrada");
      return;
    }
    if (trimmedTask.length > 30) {
      toast.error("Tarefa muito longa");
      return;
    }
    if (trimmedTask.length < 3) {
      toast.error("Tarefa muito curta");
      return;
    }

    const newTask = { id: uuid(), task: trimmedTask, finished: false };
    setList([newTask, ...list]);
    setTask("");
    toast.success("Tarefa adicionada com sucesso!");
  };

  const finishedTask = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(updatedList);
    toast.info("Tarefa atualizada!");
  };

  const deleteTask = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    toast.success("Tarefa excluída!");
  };

  const completed = list.filter((item) => item.finished).length;
  const pending = list.filter((item) => !item.finished).length;

  return (
    <Background>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
      />
      <Title>Lista de Tarefas</Title>
      <Container>
        <TopInput>
          <Input
            value={task}
            onChange={changeEntry}
            placeholder="O que tenho que fazer?"
          />
          <Buttom onClick={addEntry}>Adicionar</Buttom>
        </TopInput>

        <StatusContainer>
          <StatusBox>📋 {list.length} tarefas</StatusBox>
          <StatusBox className="done">✅ {completed} concluídas</StatusBox>
          <StatusBox className="pending">🕑 {pending} pendentes</StatusBox>
        </StatusContainer>

        <Item>
          {list.length === 0 && <Text>Não há tarefas cadastradas</Text>}
          {list.map((item) => (
            <ListItem $isFinished={item.finished} key={item.id}>
              {item.finished ? (
                <CheckIcon onClick={() => finishedTask(item.id)} />
              ) : (
                <UncheckIcon onClick={() => finishedTask(item.id)} />
              )}
              <Text>{item.task}</Text>
              <Trash onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))}
        </Item>
      </Container>
    </Background>
  );
}

export default Home;
