import React from 'react';
import { CounterComponent } from '../entities/ui/counter/counter-component';
import { EasyCounterComponent } from '../entities/ui/easy-counter/easy-counter-component';
import { HardCounterComponent } from '../entities/ui/hard-counter/hard-counter-component';

function App() {
  return (
    <div className="App">
      <CounterComponent />
      <hr/>
      <EasyCounterComponent />
      <hr/>
      <HardCounterComponent />
    </div>
  );
}

export default App;
