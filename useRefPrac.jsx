import React, { useState } from "react"l 

const useRefPrac = (initialText) => {
  const [text, setText] = useState(initialText);
  const element = useRef();
  
  const onChange = (e) => {
    const {target:{value}} = e;
    setText(value);
  }

  const onReset = (e) => {
    e.preventDefault();
    setText('');
    element.current.focus();
  }

  return {text,element, onReset, onChange};
}

export default useRefPrac;