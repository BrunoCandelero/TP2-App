import React from "react";

function ListaRequisitos({ password }) {
  const requisitos = [
    {
      label: "◉ Mínimo 8 caracteres",
      cumple: password.length >= 8,
    },
    {
      label: "◉ Incluye una mayúscula",
      cumple: /[A-ZÁÉÍÓÚÜÑ]/.test(password),
    },
    {
      label: "◉ Incluye un número",
      cumple: /[0-9]/.test(password),
    },
    {
      label: "◉ Incluye un símbolo",
      cumple: /[^A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ]/.test(password),
    },
  ];

  return (
    <div className="checklist-card">
      <h3>Requisitos</h3>
      <ul>
        {requisitos.map((req, index) => (
          <li key={index} className={req.cumple ? "ok" : "fail"}>
            {req.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaRequisitos;