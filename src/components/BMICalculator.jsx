import React, { useState } from "react";
import './BMICalculator.css';

function BMICalculator() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [actividad, setActividad] = useState("");
  const [imc, setImc] = useState(null);
  const [clasificacion, setClasificacion] = useState("");

  const calcularIMC = () => {
    if (!altura || !peso) return;

    const alturaEnMetros = altura / 100;
    const imcCalculado = (peso / (alturaEnMetros ** 2)).toFixed(1);
    setImc(imcCalculado);
    setClasificacion(obtenerClasificacion(imcCalculado));
  };

  const obtenerClasificacion = (imc) => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Peso saludable";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  return (
    <div className="bmi-container">
      <div className="bmi-chart">
        <h2>Tabla de Clasificación del IMC</h2>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Menos de 18.5</td><td>Bajo peso</td></tr>
            <tr><td>18.5 - 24.9</td><td>Peso saludable</td></tr>
            <tr><td>25.0 - 29.9</td><td>Sobrepeso</td></tr>
            <tr><td>30.0 o más</td><td>Obesidad</td></tr>
          </tbody>
        </table>
      </div>
      <div className="bmi-form">
        <h2>Calculadora de Índice de Masa Corporal (IMC)</h2>
        <p>
          Ingresa la información a continuación para calcular tu IMC.
        </p>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <select value={actividad} onChange={(e) => setActividad(e.target.value)}>
          <option value="">Nivel de actividad física</option>
          <option value="1.2">Poca o ninguna actividad</option>
          <option value="1.375">Ejercicio ligero (1-3 días/semana)</option>
          <option value="1.55">Ejercicio moderado (3-5 días/semana)</option>
          <option value="1.725">Ejercicio intenso (6-7 días/semana)</option>
          <option value="1.9">Ejercicio muy intenso (dos veces al día)</option>
        </select>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc && (
          <div className="bmi-result">
            <p>Tu índice de masa corporal es: <strong>{imc}</strong></p>
            <p>Clasificación: <strong>{clasificacion}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
