import { useState } from "react";
import "./index.css";

function Register() {
  //Criar as listas com array
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://api.sheetmonkey.io/form/uM1Q7XZyF85NbpeU6wSwFB",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log(response);

    if (response.ok) {
      // Handle success (optional)
      console.log("Form submitted successfully!");
    } else {
      // Handle error
      console.error("Form submission failed:", response.status);
    }
  };

  const handlePurchase = () => {
    alert(
      `Cadastro realizado com sucesso, estraremos em contato em 24h
      `
    );
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Digite seu nome"
      />

      <input
        className="input"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Digite seu e-mail"
      />

      <input
        className="input"
        type="tel"
        id="phone"
        name="phone"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Digite seu número de telefone (com DDD)"
      />

      <input className="buttonRegister" type="submit" value="Enviar" onClick={handlePurchase} />
    </form>
    </div>    
  );
}

export default Register;
