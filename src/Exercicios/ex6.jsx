import React, { useState, useEffect } from "react";

function Ex6() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>Contador Automático</h1>
      <p>{contador}</p>
    </div>
  );
}

export default Ex6;
