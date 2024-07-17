import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteTarefa, getTarefasUsuario } from "../firebase/tarefas";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Tarefas() {
  // Colocamos como null por que  não tenhamos componentes para ser apresentados quando o usuario entrar na pagina
  // É impressendivel ter o estado pois ate que os dados venha do banco demora um tempo então precisamos usar o useState para que mude o (null) para o array quando os dados do banco chegar
  const [tarefas, setTarefas] = useState(null);
  // Recuperamos a informação do usuário (se está logado ou não)
  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function carrregarDados() {
    // O then devolve a lista de tarefas da coleção
    // colocamos o resultado em nosso useState com o setTarefas então envia o resultado para tarefas
    // Assim o estado (null) muda para um array
    if (usuario) {
      getTarefasUsuario(usuario.uid).then((resultados) => {
        setTarefas(resultados);
      });
    }
  }

  function deletarTarefa(id) {
    // true -> apagar tarefa, false -> não fazer nada
    const deletar = confirm("Tem certeza?");
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success("Tarefa removida com sucesso!");
        // Vai trazer a lista de tarefas atualizada
        carrregarDados();
      });
    }
  }

  // Executar uma função quando o componente é renderizado a primeira vez
  // Usamos o useEffect para não ficar renderizando a pagina e consumir nossas requests do firebase a todo momento
  // O array vazio é parte da sintaxe do useEffect
  useEffect(() => {
    carrregarDados();
  }, []);

  // Se o usuário não esta logado
  // Navigate redireciona para uma pagina useNavigate envia para um componente
  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <main>
        <Container className="mt-5">
          <h1>Suas Tarefas</h1>
          <hr />
          <Link className=" btn btn-dark" to="/tarefas/adicionar">
            Adicionar Tarefa
          </Link>
          {tarefas ? (
            <section className="mt-2">
              {tarefas.map((tarefa) => {
                return (
                  <Card key={tarefa.id}>
                    <Card.Body>
                      <Card.Title>{tarefa.titulo}</Card.Title>
                      <Card.Text>{tarefa.descricao}</Card.Text>
                      <div className="mb-2">
                        {tarefa.concluido ? (
                          <Badge bg="success">Concluído</Badge>
                        ) : (
                          <Badge bg="warning">Pendente</Badge>
                        )}
                        <Badge bg="dark">{tarefa.categoria}</Badge>
                        <Badge bg="dark">
                          {new Date(tarefa.dataConclusao).toLocaleDateString()}
                        </Badge>
                      </div>
                      <Button
                        variant="dark"
                        onClick={() => {
                          navigate(`/tarefas/editar/${tarefa.id}`);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deletarTarefa(tarefa.id)}
                      >
                        Excluir
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </section>
          ) : (
            <Loader />
          )}
        </Container>
      </main>
    </>
  );
}

export default Tarefas;
