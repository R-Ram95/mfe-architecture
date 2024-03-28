import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'shared-ui';
import { Sum } from 'util-module';
import Box from './Box';
import reactLogo from '/react.svg';
import { useState } from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>React Dashboard</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Box>
    <h1 className="text-3xl font-bold underline bg-blue-200">
      Hello world!
    </h1>
      </Box>
      <Box>
        <h3>From shared-ui</h3>
        <Button label="Click me" onClick={() => setCount(count + 1)} />
        <h4>Count is: {count}</h4>
      </Box>
      <Box>
        <h3>From util-module</h3>
        <h4>Using util-module.Sum() 10 + 20 = {Sum(10, 20)}</h4>
      </Box>
      <Box>
        <h3>Inter-MFE Routing</h3>
        <Link to={'/comments'}>to comments</Link>
        <br />
        <Link to={'/info'}>to info</Link>
      </Box>
      <Box>
        <h3>Intra-MFE Routing</h3>
        <br />
        <Link
          to={''}
          onClick={() => {
            window.navigateTo('/');
          }}
        >
          Navigate to /
        </Link>
        <br />
        <Link
          to={''}
          onClick={() => {
            window.navigateTo('/vue');
          }}
        >
          Navigate to /vue
        </Link>
        <br />
        <Link
          to={''}
          onClick={() => {
            window.navigateTo('/angular');
          }}
        >
          Navigate to /angular
        </Link>
      </Box>
    </>
  );
};
