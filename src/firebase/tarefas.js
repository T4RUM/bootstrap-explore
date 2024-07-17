// O propósito deste arquivo é ter todas as funções
// necessárias para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
// - Adicionar uma nova tarefa (Create)
// - Listar as tarefas (Read)
// - Atualizar uma tarefa (Update)
// - Remover uma tarefa (Delete)

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = que o resultado dela não é obtido de imediato
// Haverá uma "espera"
export async function addTarefa(data) {
  // Essa função se comunica com o firestore, envia os dados (data) e salva na coleção indicada
  await addDoc(tarefasCol, data);
  // await é uma instrução para esperar o resultado de addDoc
}

// export async function getTarefas() {
//   // Snapshot é o resultado da busca na coleção de tarefas
//   const snapshot = await getDocs(tarefasCol);
//   const tarefas = [];

//   // Percorremos cada documento da coleção e inserimos no array de tarefas
//   // id: é uma convenção do firebase por isso precisamos fazer dessa maneira para pegar o ID
//   snapshot.forEach((doc) => {
//     tarefas.push({ ...doc.data(), id: doc.id });
//   });
//   // O return faz com que a minha função apresente esse array tarefas
//   return tarefas;
// }

export async function deleteTarefa(id) {
  // Cria uma referência para um documento da coleção
  const tarefaDoc = doc(tarefasCol, id);
  // Deletar o documento da coleçãop de acordo com o ID
  // Agora estamos trabalhando com a aba documento e não coleção
  await deleteDoc(tarefaDoc);
}

export async function getTarefa(id) {
  // Criar uma referência para um documento específico da coleção
  const tarefaDoc = doc(tarefasCol, id);
  // Trazer as informações do documento
  const snapshot = await getDoc(tarefaDoc);

  // Retorna os dados dentro do documento
  // {titulo: '', descricao: '', ...}
  return snapshot.data();
}

export async function getTarefasUsuario(idUsuario) {
  // Filtrar as tarefas da coleção de acordo com o id do usuário
  const filtro = query(tarefasCol, where("idUsuario", "==", idUsuario));
  const snapshot = await getDocs(filtro);

  const tarefas = [];

  snapshot.forEach((doc) => {
    tarefas.push({ ...doc.data(), id: doc.id });
  });
  return tarefas;
}

export async function updateTarefa(id, data) {
  const tarefaDoc = doc(tarefasCol, id);
  await updateDoc(tarefaDoc, data);
}
