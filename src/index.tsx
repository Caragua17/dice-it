import { render } from "preact";

import preactLogo from "./assets/preact.svg";
import "./style.css";
import { IRollProps, Roll } from "./components/roll/Roll";
import { History } from "./components/history/History";
import { useState } from "preact/hooks";
import { IRoll } from "./utils/IRoll";

export function App() {
  const [history, setHistory] = useState<IRoll[]>([
    { dices: [24, 89, 2, 56, 6, 90], max: 100 },
    { dices: [35, 68], max: 100 },
  ]);

  return (
    <div>
      <Roll onRoll={(roll) => setHistory((prev) => [roll, ...prev])}></Roll>
      <History history={history} />
    </div>
  );
}

render(<App />, document.getElementById("app"));
