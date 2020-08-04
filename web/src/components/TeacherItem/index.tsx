import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item"> 
    <header>
      <img src="https://avatars0.githubusercontent.com/u/48867230?s=460&u=d40aa41ab03fcd751e486af3b451328aa3b51d48&v=4" alt="Vinícius Alexsander"/>

      <div>
        <strong>Vinicius Alexsander</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 100,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;