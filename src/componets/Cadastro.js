import React from 'react';
import './Cadastro.css'

const Cadastro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label><br />
        <input type="text" id="name" name="name" /><br />

        <label htmlFor="email">E-mail:</label><br />
        <input type="email" id="email" name="email" /><br />

        <label htmlFor="phone">Telefone:</label><br />
        <input type="tel" id="phone" name="phone" /><br />

        <label htmlFor="date">Data de Nascimento:</label><br />
        <input type="date" id="date" name="date" /><br />

        <label htmlFor="password">Senha:</label><br />
        <input type="password" id="senha" name="senha" /><br />
        
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Cadastro;
