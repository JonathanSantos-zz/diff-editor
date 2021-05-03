import React from 'react';
import { DiffEditor } from '@monaco-editor/react';
import './styles.css';

export default function App() {
  const language = window.location.pathname?.replace('/', '') ?? 'plaintext';

  return (
    <div className="App">
      <DiffEditor
        height="calc(100vh - 20px)"
        width="calc(100vw - 4px)"
        theme="vs-dark"
        language={language}
        original={null}
        modified={null}
        options={{
          originalEditable: true,
          renderSideBySide: true
        }}
      />
    </div>
  );
}
