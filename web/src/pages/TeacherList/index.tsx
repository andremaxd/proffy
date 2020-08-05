import React from "react";

import "./style.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
// import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
      {/* <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/53883432?s=460&u=016de779c99c360e3c0f466ace58957344257bce&v=4"
            alt="André Max Dorneles"
          />
          <div>
            <strong>André Max</strong>
            <span>Química</span>
          </div>
        </header>

        <p>
          ashauhsuahsuahs
          <br />
          <br />
          aiushdiuahsduihasuidhiuashduiashduihasiudhsaihduiashduihasuidhasuihdiuashduiashduihasiudhasuidh
        </p>

        <footer>
          <p>
            preco/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp" />
            Entrar em contato
          </button>
        </footer>
      </article> */}
    </div>
  );
}

export default TeacherList;
