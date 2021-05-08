import { useEffect } from "react";

function Component() {
  console.warn("render");
  // useEffect(() => {});
  return null;
}

function App() {
  return <Component />;
}

export default App;
