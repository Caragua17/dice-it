import { ComponentChildren } from "preact";
import "./History.css";
import { IRoll } from "../../utils/IRoll";

export interface IHistoryProps {
  history: IRoll[];
}

export function History({ history }: IHistoryProps) {
  return (
    <div class="history">
      {history.map((roll) => (
        <div class="roll">
          <div class="dices">
            {roll.dices.map((dice) => (
              <div class="dice">{dice}</div>
            ))}
          </div>
          <span>({roll.dices.reduce((acc, value) => acc + value, 0)})</span>
        </div>
      ))}
    </div>
  );
}
