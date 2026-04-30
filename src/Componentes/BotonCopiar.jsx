import React, { useState, useEffect } from "react";

function BotonCopiar({ password }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div style={{ marginTop: "15px" }}>
      <button
        onClick={handleCopy}
        disabled={!password}
        style={{
          padding: "10px",
          cursor: password ? "pointer" : "not-allowed",
          opacity: password ? 1 : 0.5
        }}
      >
        Copiar contraseña
      </button>

      {copied && (
        <p style={{ color: "green", fontSize: "14px" }}>
          ✅ Copiado al portapapeles
        </p>
      )}
    </div>
  );
}

export default BotonCopiar;