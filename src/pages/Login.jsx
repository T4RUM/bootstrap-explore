import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function entrar(data) {
    // data é um objeto com os dados do formulário
    console.log(data);
  }

  return (
    <>
      <main>
        <form className="form-section" onSubmit={handleSubmit(entrar)}>
          <h1>Login</h1>
          <hr />
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="invalid">O Email é inválido!</small>
            )}
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              className="form-control"
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
          <div>
            <Button variant="dark" className="mt-1 w-100" type="submit">
              Entrar
            </Button>
            <Button variant="danger" className="mt-1 w-100" type="button">
              Entrar com o Google
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
