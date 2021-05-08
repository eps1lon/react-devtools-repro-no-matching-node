import { useEffect } from "react";

function Component() {
  console.warn("render");
  // useEffect(() => {
  //   console.error("effect");
  // });
  return null;
}

function App() {
  return <Component />;
}

export default App;
