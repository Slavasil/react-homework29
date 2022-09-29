import { useSelector } from 'react-redux';
import {FACTS} from './facts';

export default function FactList() {
  const factCount = useSelector(state => state);
  const actualFactCount = Math.min(factCount, FACTS.length);
  let facts = [];
  for (let i = 0; i < actualFactCount; ++i) {
    facts.push([i, FACTS[i]]);
  }
  return (
    <ol>
      {facts.map(f => <li key={f[0]}>{f[1]}</li>)}
    </ol>
  );
}
