import { useRef } from 'react';

// LAB 3 (Slide 15): Input Focus with useRef
export default function Lab3InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <p className="hint">TODO를 완성하면 Focus / Clear 버튼이 동작합니다.</p>
      <label htmlFor="student-name" className="hint">Name</label>
      <input id="student-name" className="field" placeholder="Enter your name"
        ref={inputRef} />
      <div className="controls">
        <button onClick={focusInput}>Focus</button>
        <button className="secondary" onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
}
