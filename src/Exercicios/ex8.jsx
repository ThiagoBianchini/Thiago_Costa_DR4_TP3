import React, {useState, useLayoutEffect} from "react";

function Ex8() {
  const [valor, setValor] = useState("");

  useLayoutEffect(() => {
    document.title = valor ? `Valor Atual: ${valor}` : "Digite algo...";
  }, [valor]);

  const handleClick = () => alert(valor);

  return (
    <div>
      <h2>App de Entrada</h2>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Digite algo..."
      />
      <button onClick={handleClick}>Exibir Alerta</button>
    </div>
  );
}

export default Ex8;
