import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function MovieSearchForm() {
  const [input, setInput] = setState('');

  let navigate = useNavigate();
  let location = useLocation();

  const onInput = e => {
    const query = e.target.value;
    setInput(query)
  }

  const submitForm = e => {
    e.preventDefault();
    navigate({ ...location, search: `query=${input}` })
    setInput('')
  }

  return (
    <form onSubmit={submitForm}>
      <input type='text' name='query' onCange={onInput} value={input}></input>
      <button className="btn" type='submit'>Search movie</button>
    </form>
  )
}

