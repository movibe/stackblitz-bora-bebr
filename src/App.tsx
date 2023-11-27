import { FC } from 'react';

import './style.css';

function boraBeber(sim: boolean) {
  if (sim==true) {
    return 'Bora beber'
  } else {
    return 'Noite de filme'
  }
}

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Tem cabaré essa noite?</h1>
      <p>{boraBeber(false)}</p>
    </div>
  );
};
