import React, { useState } from "react";

const VerificaUsuario = async (nomeDeUsuario) => {
  const usuarios = ["Samuel", "Felpo", "Rapha", "Tinoco"];
  return usuarios.includes(nomeDeUsuario);
};

function Ex7() {
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [erro, setErro] = useState(null);
  const [disponivel, setDisponivel] = useState(null);

  const handleChange = async (e) => {
    const valor = e.target.value;
    setNomeDeUsuario(valor);

    if (valor.trim() === "") {
      setErro("O nome de usuário não pode estar vazio.");
      setDisponivel(null);
      return;
    }

    const emUso = await VerificaUsuario(valor);
    if (emUso) {
      setErro("Este nome de usuário já está em uso.");
      setDisponivel(false);
    } else {
      setErro(null);
      setDisponivel(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disponivel) {
      alert(`Usuário ${nomeDeUsuario} registrado com sucesso!`);
      setNomeDeUsuario("");
      setDisponivel(null);
    }
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Nome de Usuário</label>
          <input
            type="text"
            value={nomeDeUsuario}
            onChange={handleChange}
          />
          {erro && <div className="error-message">{erro}</div>}
          {disponivel && !erro && (
            <div className="success-message">Nome de usuário disponível!</div>
          )}
        </div>

        <button
          type="submit"
          disabled={!disponivel}
          className={`submit-button ${disponivel ? "active" : "disabled"}`}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Ex7;
