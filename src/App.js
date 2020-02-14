import React from 'react';
import * as MyLovelyChart from './my-lovely-chart';

function App() {
  return (
    <MyLovelyChart.Chart>
      <MyLovelyChart.Row name="lol?" value1="ok" value2="ok" />
      <MyLovelyChart.FancyRow name="lol?" value1="ok" value2="ok" />
      {/* <MyLovelyChart.VeryFancyRow name="lol?" value1="ok" value2="ok" /> */}
    </MyLovelyChart.Chart>
  );
}

export default App;
