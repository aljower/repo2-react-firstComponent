import * as React from 'react';
import './style.css';

function MyComp() {
  const [isVis, setVisable] = React.useState(false);
  const ButtonClick1 = () => {
    setVisable(!isVis);
  };
  return (
    <div>
      <button type="button" onClick={ButtonClick1}>
        Open{' '}
      </button>
      {isVis && (
        <div>
          <h1>Hello User</h1>
          <p>Start editing to see some magic happen :), This is a Widget</p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyComp />
    </div>
  );
}


{/* https://www.youtube.com/watch?v=CXa0f4-dWi4  for next project*/}