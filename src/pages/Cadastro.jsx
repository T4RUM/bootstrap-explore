import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function cadastrar(data) {
    cadastrarUsuario(data.nome, data.email, data.senha)
      .then(() => {
        toast.success(`Bem vindo (a)! ${data.nome}`);
        navigate("/tarefas");
      })
      .catch((error) => {
        toast.error("Um erro aconteceu!" + error.code);
      });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success("Bem vindo (a)!"); // Não da pra pegar o nome do usuario por conta do escopo da função
      navigate("/tarefas");
    });
  }

  return (
    <>
      <main>
        <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
          <h1>Cadastro</h1>
          <hr />
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite seu nome"
              {...register("nome", { required: true, maxLength: 150 })}
            />
            {errors.nome && (
              <small className="invalid">O nome é inválido!</small>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="invalid">O email é inválido!</small>
            )}
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              className="form-control"
              placeholder="Digite sua senha"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter acima de 6 caracteres",
                },
              })}
            />
            {errors.senha && (
              <small className="invalid">{errors.senha.message}</small>
            )}
          </div>
          <div className="mt-4">
            <Button variant="dark" className="mt-1 w-100" type="submit">
              Cadastrar
            </Button>
            <Button
              variant="danger"
              className="mt-1 w-100"
              type="button"
              onClick={handleEntrarGoogle}
            >
              Entrar com Google
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Cadastro;
