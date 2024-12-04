import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Ex3() {
  const schema = Yup.object({
    nome: Yup.string().min(3).required("Nome obrigatório"),
    email: Yup.string().email().required("E-mail obrigatório"),
    idade: Yup.number()
      .min(18, "Idade mínima 18")
      .max(65, "Idade máxima 65")
      .required("Idade obrigatória"),
    senha: Yup.string().min(6).required("Senha obrigatória"),
    confirmacao: Yup.string()
      .oneOf([Yup.ref("senha"), null], "Senhas não coincidem")
      .required("Confirmação obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      idade: "",
      senha: "",
      confirmacao: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(`Cadastro: ${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={formik.handleSubmit}>
        {["nome", "email", "idade", "senha", "confirmacao"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field.includes("senha") ? "password" : field === "idade" ? "number" : "text"}
              name={field}
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched[field] && formik.errors[field] && (
              <div>{formik.errors[field]}</div>
            )}
          </div>
        ))}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Ex3;
