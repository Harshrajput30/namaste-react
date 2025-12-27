import React from 'react';
import ReactDOM from 'react-dom/client';


//React.createElement => React element(object)=> HTML(DOM)
const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement(
      'div',
      { id: 'child', key: 'child1' },
      [
        React.createElement('h1', { key: 'h1-1' }, 'I am h1 tag'),
        React.createElement('h2', { key: 'h2-1' }, 'I am h2 tag')
      ]
    ),
    React.createElement(
      'div',
      { id: 'child2', key: 'child2' },
      [
        React.createElement('h1', { key: 'h1-2' }, 'I am h1 tag'),
        React.createElement('h2', { key: 'h2-2' }, 'I am h2 tag')
      ]
    )
  ]
);

//Using JSX
// jsx => React.createElement => React element(object) => HTML(DOM)

const jsxheading = <h1>This is from the jsx Heading</h1>


// React functional component
const Title = () => {
  return <h1>This is from the Title Component</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>This is from the Functional Component</h1>
    </div>
  );
};

  




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);