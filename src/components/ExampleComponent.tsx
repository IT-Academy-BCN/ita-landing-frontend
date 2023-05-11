import { useEffect, useState } from "react";

const ExampleComponent = () => {
  const [name, setName] = useState("initial Luis");

  useEffect(() => {
    // Lógica que se ejecuta
    setName("nueva variable cambiada en el useEffect")
  }, []);

  return <h1>🔥 Hoola: {name} 🔥</h1>;
};

export default ExampleComponent;