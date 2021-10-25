import './App.css';
// const { ClassCounter } = require('./components/ClassCounter')
// const { HookCounter } = require('./components/HookCounter')
// const { PrevCounter } = require('./components/PrevCounter')
// const { ObjectHook } = require('./components/ObjectHook')
// const { ArrayHook } = require('./components/ArrayHook')
const { EffectHook } = require('./components/EffectHook')

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <PrevCounter /> */}
      {/* <ObjectHook /> */}
      {/* <ArrayHook /> */}
      <EffectHook />
    </div>
  );
}

export default App;
