// O objetivo deste arquivo é ter todas funções relaciondas a autenticação
// Criar usuario com email/senha/nome
// Entrar com google
// Entrar com email/senha
// Logout
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
  // Indicamos o serviço de autenticação e o email e senha do novo usuario
  // 'user' é um objeto com informações do usuário autenticado
  const { user } = await createUserWithEmailAndPassword(auth, email, senha);
  // Define o nome de exibição como o nome vindo do formulario de cadastro
  await updateProfile(user, { displayName: nome });
}

export async function entrarGoogle() {
  // Indicar qual o provedor de login será usado
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
  await signInWithEmailAndPassword(auth, email, senha);
}

// Desconectar o usuário atualmente logado na aplicação
export async function logout() {
  await signOut(auth);
}
