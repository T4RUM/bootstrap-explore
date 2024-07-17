import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function NovaTarefa() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

  function salvarTarefa(data) {
    // Os dados do formulário são passados para a função de inserir
    // Quando foi concluido e inserido os dados no banco de dados ENTÃO (then) aparece o toast
    // catch = para mostrar um erro caso não de certo
    // Isso é uma função anonima que não precisa passar um nome só a arrow function
    // Novo campo do documento que associa o usuario e tarefa que ele criou
    data.idUsuario = usuario.uid;
    addTarefa(data)
      .then(() => {
        toast.success("Tarefa adicionada com sucesso");
        // Redirecionar o usário para /tarefas
        navigate("/tarefas");
      })
      .catch(() => toast.error("Um erro acconteceu ao adicionar tarefa!"));
  }

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <main>
        <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
          <h1>Adicionar Tarefa</h1>
          <hr />
          <div>
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              id="titulo"
              className="form-control"
              {...register("titulo", { required: true, maxLength: 200 })}
            />
            {errors.titulo && (
              <small className="invalid">O título é inválido</small>
            )}
          </div>
          <div>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              type="text"
              id="descricao"
              className="form-control"
              {...register("descricao", { required: true })}
            />
            {errors.descricao && (
              <small className="invalid">A Descrição é inválida</small>
            )}
          </div>
          <div>
            <label htmlFor="dataConclusao">Data</label>
            <input
              type="date"
              id="dataConclusao"
              className="form-control"
              {...register("dataConclusao")}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="concluido"
              className="form-check-input"
              {...register("concluido")}
            />
            <label htmlFor="concluido" className="form-check-label">
              Concluído?
            </label>
          </div>
          <div>
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              className="form-select"
              {...register("categoria")}
            >
              <option value="Trabalho">Trabalho</option>
              <option value="Estudo">Estudo</option>
              <option value="Projeto">Projeto</option>
              <option value="Lazer">Lazer</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div>
            <Button variant="dark" className="w-100 mt-1" type="submit">
              Salvar Tarefa
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default NovaTarefa;
