import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {
  // lista (array) de professores.
  // o valor inicial é um array vazio []
  const [professores, setProfessores] = useState([]);
  const adicionaProf = (prof) => {
    console.log(prof);
    const listaNova = professores.slice();
    listaNova.push(prof);
    setProfessores(listaNova);
  };

  const areas = [
    {
      nome: "Progr. Básica",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Progr. Web",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Banco de Dados",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Diversos",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
  ];

  const listaAreas = areas.map((area) => area.nome);

  return (
    <div>
      <Banner />
      <Formulario
        areas={listaAreas}
        aoProfCadastrado={(prof) => adicionaProf(prof)}
      />
      {areas.map((area) => (
        <Area
          key={area.nome}
          nome={area.nome}
          corPrimaria={area.corPrimaria}
          corSecundaria={area.corSecundaria}
          professores={professores.filter((prof) => prof.area === area.nome)}
        />
      ))}
    </div>
  );
}
export default App;
