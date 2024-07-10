import {
  Container,
  Accordion,
  AccordionItem,
  Button,
  Alert,
} from "react-bootstrap";

function Ajuda() {
  return (
    <>
      <main className="mt-4">
        <Container>
          <h1 className="text-center">Ajuda</h1>
          <hr />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
              <Accordion.Body>
                MyTask é um sistema para gerenciamento de tarefas pessoais.
                Nesta aplicação você pode gerenciar todos os seus afazeres.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Sobre a empresa</Accordion.Header>
              <Accordion.Body>
                Esta empresa desenvolve soluções focadas em produtividade e
                bem-estar.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Como posso adicionar uma nova tarefa no MyTask?
              </Accordion.Header>
              <Accordion.Body>
                Para adicionar uma nova tarefa, clique no botão "Adicionar
                Tarefa" no painel principal. Preencha os detalhes da tarefa,
                incluindo título, descrição e data de vencimento, e clique em
                "Salvar".
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Posso organizar minhas tarefas em categorias diferentes?
              </Accordion.Header>
              <Accordion.Body>
                Sim, você pode organizar suas tarefas em diferentes categorias
                para melhor gerenciamento. No menu de tarefas, clique em "Criar
                Categoria" e adicione um nome para a nova categoria. Você pode
                então atribuir tarefas a estas categorias para manter tudo
                organizado.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Como posso receber lembretes para minhas tarefas?
              </Accordion.Header>
              <Accordion.Body>
                O MyTask permite que você configure lembretes para suas tarefas.
                Ao criar ou editar uma tarefa, há uma opção para configurar
                lembretes. Você pode escolher receber notificações por e-mail,
                SMS ou através de notificações no próprio aplicativo.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Container className="mt-5">
            <Button cclassName="mx-2">Entre em contato</Button>
            <Button className="mx-2">Enviar uma Pergunta</Button>
            <Button className="mx-2">Download de Manuais</Button>

            <Alert className="mt-5 p-4 text-center alert-warning" role="alert">
              Atenção: Estamos em manutenção.
            </Alert>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default Ajuda;
