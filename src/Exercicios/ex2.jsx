import React, { useState, useEffect } from "react";

function Ex2() {
  const [exibirMensagem, setExibirMensagem] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExibirMensagem(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {exibirMensagem && (
        <div>
          Boas vindas
        </div>
      )}
    </div>
  );
}

export default Ex2;
