import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
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
    </article>
  );
}

export default TeacherItem;
