import * as React from 'react';
import { useState } from 'react';

interface InfoProps {}

export const Info: React.FC<InfoProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Info</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};
