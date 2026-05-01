import { useState } from "react";
import PantallaInicio from "./PantallaInicio";
import Bloque1Extincion from "./Bloque1Extincion";
import Bloque2Mamiferos from "./Bloque2Mamiferos";
import Bloque3Primates from "./Bloque3Primates";
import Bloque4Bipedismo from "./Bloque4Bipedismo";
import Bloque5Rift from "./Bloque5Rift";
import Bloque6Australopithecus from "./Bloque6Australopithecus";
import Bloque7Encefalizacion from "./Bloque7Encefalizacion";
import Bloque7Habilis from "./Bloque7Habilis";
import Bloque8Erectus from "./Bloque8Erectus";
import Bloque9Neandertales from "./Bloque9Neandertales";
import Bloque10Sapiens from "./Bloque10Sapiens";
import Bloque12CierreColectivo from "./Bloque12CierreColectivo";

function App() {
  const [pantalla, setPantalla] = useState("inicio");

  return (
    <>
      {pantalla === "inicio" && (
        <PantallaInicio onStart={() => setPantalla("bloque1")} />
      )}

      {pantalla === "bloque1" && (
        <Bloque1Extincion onNext={() => setPantalla("bloque2")} />
      )}

      {pantalla === "bloque2" && (
        <Bloque2Mamiferos
          onBack={() => setPantalla("bloque1")}
          onNext={() => setPantalla("bloque3")}
        />
      )}

      {pantalla === "bloque3" && (
        <Bloque3Primates
          onBack={() => setPantalla("bloque2")}
          onNext={() => setPantalla("bloque4")}
        />
      )}

      {pantalla === "bloque4" && (
        <Bloque4Bipedismo
          onBack={() => setPantalla("bloque3")}
          onNext={() => setPantalla("bloque5")}
        />
      )}

      {pantalla === "bloque5" && (
        <Bloque5Rift
          onBack={() => setPantalla("bloque4")}
          onNext={() => setPantalla("bloque6")}
        />
      )}

      {pantalla === "bloque6" && (
        <Bloque6Australopithecus
          onBack={() => setPantalla("bloque5")}
          onNext={() => setPantalla("bloque7")}
        />
      )}

      {pantalla === "bloque7" && (
        <Bloque7Encefalizacion
          onBack={() => setPantalla("bloque6")}
          onNext={() => setPantalla("bloque8")}
        />
      )}

      {pantalla === "bloque8" && (
        <Bloque7Habilis
          onBack={() => setPantalla("bloque7")}
          onNext={() => setPantalla("bloque9")}
        />
      )}

      {pantalla === "bloque9" && (
        <Bloque8Erectus
          onBack={() => setPantalla("bloque8")}
          onNext={() => setPantalla("bloque10")}
        />
      )}

      {pantalla === "bloque10" && (
        <Bloque9Neandertales
          onBack={() => setPantalla("bloque9")}
          onNext={() => setPantalla("bloque11")}
        />
      )}

      {pantalla === "bloque11" && (
  <Bloque10Sapiens
    onBack={() => setPantalla("bloque10")}
    onNext={() => setPantalla("cierre")}
  />
)}

{pantalla === "cierre" && (
  <Bloque12CierreColectivo
    onBack={() => setPantalla("bloque11")}
    onRestart={() => setPantalla("inicio")}
  />
)}
    </>
  );
}

export default App;