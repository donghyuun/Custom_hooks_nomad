const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => { setValue(value); }
  return { value, onChange }; 
}
