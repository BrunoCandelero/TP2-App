import React, { useState } from "react";
function EntradaPassword({ password, setPassword }) {
    const [show, setShow] = useState(false);

    return (
        <div className="input-container">
            <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresá tu contraseña..."
                style={{ padding: "10px", width: "250px" }}
            />
            <button
                onClick={() => setShow(!show)}
                style={{ padding: "10px", marginLeft: "10px", cursor: "pointer" }}
            >
                {show ? "Ocultar" : "Mostrar"}
            </button>
        </div>
    );
}

export default EntradaPassword;