import './App.css';
import 'semantic-ui-css/semantic.min.css';

import React from "react";
import { useDarkreader } from 'react-darkreader';
import styled from 'styled-components';
import { Button as SemanticButton, Input, Icon } from 'semantic-ui-react';

const QuickFilterButton = styled(SemanticButton)`
  flex: 1;

  @media (min-width: 600px) {
    flex: 0;
  }
`;

const StyledInput = styled(Input)`
  &&&& {
    height: 100%;
    font-family: ProximaNova;

    &:focus {
      outline: none;
    }
  }
`;


function App() {
  const [isDark, { toggle }] = useDarkreader(false);

  return (
    <div className="App">
      <h1>Bug reproduction:</h1>
      <p>
        This is a minimal bug reproduction for the semantic-ui
        and darkreader npm package. If you switch dark-light mode with a chrome extension, 
        it will work
      </p>
      <nav>
        <h2>
          Requirements:
        </h2>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/darkreader" rel="noreferrer" target="_blank">darkreader</a> /
            <a href="https://www.npmjs.com/package/react-darkreader" rel="noreferrer" target="_blank">react-darkreader</a>
          </li>
          <li><a href="https://www.npmjs.com/package/semantic-ui-react" rel="noreferrer" target="_blank">semantic-ui-react npm</a></li>
          <li><a href="https://www.npmjs.com/package/semantic-ui-css" rel="noreferrer" target="_blank">semantic-ui-css npm</a></li>
          <li><a href="https://darkreader.org/blog" rel="noreferrer" target="_blank">darkreader chrome extension</a></li>
        </ul>
      </nav>

      <h1>Input to show up the bug:</h1>
      
      <StyledInput
        fluid
        iconPosition="left"
        icon={
          <Icon
            link
            name='close'
          />
        }
        style={{ height: '100%' }}
        placeholder="semantic-input"
      />

      <h1>Switch to {isDark ? "light" : "dark"} mode:</h1>

      <SemanticButton onClick={toggle}>
        semantic-ui Button
      </SemanticButton >
      
      <QuickFilterButton onClick={toggle}>
        semantic-ui/styled Button
      </QuickFilterButton >
      
      <button onClick={toggle}>
        Switch to {isDark ? "light" : "dark"} mode
      </button>

    </div>
  );
}

export default App;
