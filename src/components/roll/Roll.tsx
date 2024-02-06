import { useState } from "preact/hooks";
import { IRoll } from "../../utils/IRoll";
import "./Roll.css";

export interface IRollProps {
  onRoll: (roll: IRoll) => void;
}

export function Roll({ onRoll }: IRollProps) {
  const [dices, setDices] = useState<number[]>([]);
  const [max, setMax] = useState(6);
  const [count, setCount] = useState(1);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };

  return (
    <div class="current-roll">
      <div class="form">
        <input
          type="number"
          value={count}
          max={10}
          onInput={(e) => setCount(parseInt(e.currentTarget.value))}
        />
        <span>dés à</span>
        <input
          type="number"
          value={max}
          onInput={(e) => setMax(parseInt(e.currentTarget.value))}
        />
        <span>faces</span>
        <button
          type="button"
          onClick={() => {
            const newDices = [];
            for (let i = 0; i < count; i++) {
              newDices.push(getRandomInt(max));
            }
            console.log(newDices);
            setDices(newDices);
            onRoll({ dices: newDices, max });
          }}
        >
          Lancer
        </button>
      </div>
      <div class="dices">
        {dices?.map((dice, i) => (
          <div class="dice" key={`dice-${i}-${dice}`}>
            {dice}
          </div>
        ))}
      </div>
      {dices.length > 0 && (
        <div class="utils">
          <div class="total">
            Total: {dices?.reduce((acc, dice) => acc + dice, 0)}
          </div>
          <button type="button">+</button>
        </div>
      )}
    </div>
  );
}
