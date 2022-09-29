import { useDispatch } from 'react-redux';

import { setCount } from './reducer';
import {FACTS} from './facts';

export default function FactListControl() {
  const dispatch = useDispatch();
  const onInputChange = e => {
    let v = e.target.value !== '' ? parseInt(e.target.value) : 0;
    dispatch(setCount(v))
  };
  return <input type="number" min="0" max={FACTS.length} placeholder={"Число от 0 до "+FACTS.length} onChange={onInputChange}/>
}
