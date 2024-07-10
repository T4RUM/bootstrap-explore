import React from "react";
import { Button, Card } from "react-bootstrap";
import Cicle from "../../public/cicle.png";
import taskFriend from "../../public/taskFriend.png";
import taskRobot from "../../public/taskRobot.png";
import toDo from "../../public/toDo.png";

const myTaskCards = [
  {
    cod: 1,
    titulo: "Planejamento Semanal",
    descricao: "Organize suas tarefas semanais de forma eficiente.",
    botao: "Saiba mais",
    imagem: Cicle,
  },
  {
    cod: 2,
    titulo: "Gerenciamento de Projetos",
    descricao:
      "Ferramentas avançadas para gerenciar seus projetos com facilidade.",
    botao: "Saiba mais",
    imagem: taskFriend,
  },
  {
    cod: 3,
    titulo: "Monitoramento de Progresso",
    descricao:
      "Acompanhe o progresso de suas tarefas e projetos em tempo real.",
    botao: "Saiba mais",
    imagem: taskRobot,
  },
  {
    cod: 4,
    titulo: "Notificações Automatizadas",
    descricao:
      "Receba notificações automáticas sobre prazos e atualizações importantes.",
    botao: "Saiba mais",
    imagem: toDo,
  },
];

function Cards() {
  return (
    <>
      {myTaskCards.map((card) => (
        <Card key={card.cod} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card.imagem} />
          <Card.Body>
            <Card.Title>{card.titulo}</Card.Title>
            <Card.Text>{card.descricao}</Card.Text>
            <Button variant="primary">{card.botao}</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Cards;
