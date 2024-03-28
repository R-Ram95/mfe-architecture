import { ReactNode } from 'react';
import './box.css';

const Box = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dotted-box">
      <div className="dotted-box-content">{children}</div>
    </div>
  );
};

export default Box;
