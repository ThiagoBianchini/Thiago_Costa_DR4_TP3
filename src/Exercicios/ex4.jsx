import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Ex4() {
  const schema = Yup.object({
    email: Yup.string().email().required("E-mail obrigatório"),
    senha: Yup.string().min(6, "Senha mínima 6 caracteres").required("Senha obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(`Login realizado!\n${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        {["email", "senha"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "senha" ? "password" : "email"}
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Ex4;
