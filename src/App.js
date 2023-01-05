import { Counter } from "./components/Counter";
import { Hover } from "./components/Hover";
import { Local } from "./components/Local";
import { ScriptComponent } from "./components/ScriptComponent";
import { Theme } from "./components/Theme";
import Toggle from "./components/Toggle";
import { useWindowWidth } from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();

  console.log(width);

  return (
    <div className=''>
      <Toggle />
      <Counter />
      <Hover />
      <ScriptComponent />
      <Local />
      <Theme />
    </div>
  );
}

export default App;
