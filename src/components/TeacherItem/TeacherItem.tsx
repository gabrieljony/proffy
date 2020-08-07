import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/8727895?s=460&u=9e3866087ee42d3d4aa9a789225f028c4926e7e1&v=4"
          alt="Gabriel Jony"
        />
        <div>
          <strong>Gabriel Jony</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Aulas de Matemática bem estruturadas e expositiva.
        <br /> <br />
        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
        Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
        15 reais.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 15,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
