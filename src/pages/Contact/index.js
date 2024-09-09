import React from 'react';
import './Contact.css';
import Navigation from "../../componets/Navigation/index";

function Contact() {
  return (
    <div className="contact-page">
      <Navigation />
      <div className="contact-container">
        <h2 className="contact-header">Relatar um Problema com o Site</h2>
        <form className="contact-form">
          <select required defaultValue="">
            <option value="" disabled>Selecione o Tipo de Problema</option>
            <option value="erro">Erro no Site</option>
            <option value="funcionalidade">Problema de Funcionalidade</option>
            <option value="design">Problema de Design</option>
            <option value="compra">Problema com Minhas compras</option>
            <option value="pagamento">Problema com  pagamento</option>
            <option value="outra">Outro</option>
          </select>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Descrição do Problema" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
