import React, { useState } from 'react';

const Form = () => {
  const [inputData, setInputData] = useState('');

  const handleOnChange = event => setInputData(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    const comment = {
      id: Date.now(),
      comment: inputData,
    };

    console.log(comment);

    setInputData('');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Wpisz komentarz:
        <input
          onChange={handleOnChange}
          type="text"
          value={inputData}
        />
      </label>
    </form>
  );
};

export default Form;
