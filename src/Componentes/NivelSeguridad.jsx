import React from "react";

function NivelSeguridad({ password }) {
  if (!password || password.length === 0) {
    return (
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "gray" }}>Esperando contraseña...</h2>
        <div style={{ background: "#eee", height: "10px", width: "100%", borderRadius: "5px" }}></div>
      </div>
    );
  }

  let score = 0;
  const tieneLongitud = password.length >= 8;
  const tieneMayuscula = /[A-ZÁÉÍÓÚÜÑ]/.test(password);
  const tieneNumero = /[0-9]/.test(password);
  const tieneSimbolo = /[^A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ]/.test(password);

  if (tieneLongitud) score++;
  if (tieneMayuscula) score++;
  if (tieneNumero) score++;
  if (tieneSimbolo) score++;

  const niveles = [
    { label: "Muy débil", color: "red" },
    { label: "Débil", color: "#d9534f" },
    { label: "Poco segura", color: "#e7ca12" },
    { label: "Segura", color: "orange" },
    { label: "Muy segura", color: "green" },
  ];

  const { label: nivel, color } = niveles[Math.min(score, niveles.length - 1)];
  const porcentaje = (score / 4) * 100;

  return (
    <div style={{ marginTop: "20px", padding: "10px" }}>
      <h2 style={{ color: color, transition: "0.3s" }}>
        Fortaleza: {nivel}
      </h2>
      
      <div style={{ background: "#eee", height: "10px", width: "100%", borderRadius: "5px", overflow: "hidden" }}>
        <div style={{ 
          background: color, 
          height: "100%", 
          width: `${porcentaje}%`,
          transition: "0.5s ease" 
        }}></div>
      </div>
      <p style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}>
        Usa mayúsculas, números y símbolos para mayor seguridad.
      </p>
    </div>
  );
}

export default NivelSeguridad;