import React from "react";

export default function NivelSeguridad({ password }) {

  const score = [
    password?.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password)
  ].filter(Boolean).length;


  let nivel = { txt: "Muy débil", col: "#ff4d4d" };
  
  if (score === 2) {
    nivel = { txt: "Débil", col: "#ff944d" }; 
  } else if (score === 3) {
    nivel = { txt: "Segura", col: "#ffa500" }; 
  } else if (score === 4) {
    nivel = { txt: "Muy segura", col: "#2ecc71" }; 
  }

  if (!password) return null;

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              height: "10px",
              width: "50px", 
              borderRadius: "5px",
              backgroundColor: i <= score ? nivel.col : "#eee", 
              transition: "0.3s"
            }}
          />
        ))}
      </div>

      <p style={{ color: nivel.col, fontWeight: "bold", marginTop: "10px", marginBottom: "5px" }}>
        {nivel.txt}
      </p>
      <p style={{ fontSize: "12px", color: "#666", fontStyle: "italic" }}>
        Para una seguridad máxima, combiná mayúsculas, números y símbolos.
      </p>
    </div>
  );
}