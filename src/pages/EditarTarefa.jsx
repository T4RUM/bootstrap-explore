import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefas";
import { useEffect } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function EditarTarefa() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // Extratir o ID da rota dinâmica
  // Podemos ver ele pegando o id colocando um console.log(id);
  const { id } = useParams();

  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  // Pegue a tarefa do id informado e então faça...
  function carregarDado() {
    getTarefa(id).then((tarefa) => {
      if (tarefa) {
        // Se existir a tarefa
        reset(tarefa);
        // preencher o formulário
      } else {
        // Se não existir tarefas, volta para a página de listagem
        navigate("/tarefas");
      }
    });
  }

  function atualizarTarefa(data) {
    updateTarefa(id, data).then(() => {
      toast.success("Tarefa atualizada com sucesso!");
      navigate("/tarefas");
    });
  }

  useEffect(() => {
    carregarDado();
  }, []);

  if (usuario === null) {
    return <Navigate to="/login " />;
  }
  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
        <h1>Editar tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">O título é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
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
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Atualizar Tarefa
        </Button>
      </form>
    </main>
  );
}

export default EditarTarefa;