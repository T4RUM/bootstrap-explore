import React from "react";
import { Container } from "react-bootstrap";

function Politica() {
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center mb-5">Política de Privacidade</h2>
        <p className="mb-5">
          Bem-vindo à Política de Privacidade do MyTask. Esta página descreve
          como coletamos, usamos e protegemos as informações que você nos
          fornece ao usar nosso site.
        </p>
        <p className="mb-5">
          <strong>Informações que Coletamos:</strong> Quando você utiliza o
          MyTask, podemos coletar seu nome, endereço de e-mail e outras
          informações de contato, além de dados de uso do site.
        </p>
        <p className="mb-5">
          <strong>Uso das Informações:</strong> Utilizamos suas informações para
          personalizar sua experiência no MyTask, melhorar nosso site e
          serviços, e enviar comunicações relevantes.
        </p>
        <p className="mb-5">
          <strong>Compartilhamento de Informações:</strong> Não compartilhamos
          suas informações pessoais com terceiros, exceto quando necessário para
          operar nosso site ou cumprir obrigações legais.
        </p>
        <p className="mb-5">
          <strong>Segurança das Informações:</strong> Implementamos medidas de
          segurança para proteger suas informações contra acesso não autorizado
          ou uso indevido.
        </p>
        <p className="mb-5">
          <strong>Seus Direitos:</strong> Você tem o direito de acessar,
          corrigir ou excluir suas informações pessoais. Entre em contato
          conosco se tiver dúvidas ou precisar de assistência.
        </p>
        <p className="mb-5">
          Esta política pode ser atualizada periodicamente. Consulte esta página
          regularmente para ficar informado sobre nossas práticas de
          privacidade.
        </p>
        <p className="mb-5">
          Se tiver dúvidas sobre nossa Política de Privacidade, entre em contato
          conosco em: [Inserir informações de contato]
        </p>
      </Container>
    </>
  );
}

export default Politica;
