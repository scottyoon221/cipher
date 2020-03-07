import React, {useState} from 'react';
import Configuration from './Configuration.js';
import Encoding from './Encoding.js';
function App() {
  const [encodeObj, setEncode] = useState({keyword: "", sourceText: "", cipherText: "", currentCharIndex: 0, isValid: true});
  function isValid(keyword) {
    let valid = true;
    if(keyword.length < 3 || keyword.length > 8) {
      valid = false;
    } else {
      for(let letter of keyword) {
        if(letter !== letter.toUpperCase()) {
          valid = false;
          break;
        }
      }
    }
    if(valid) {
      setEncode({...encodeObj, keyword: keyword, isValid: valid});
    } else {
      setEncode({...encodeObj, keyword: "", isValid: valid});
    }
  }

  function handleUpdate (event, keyword) {
    event.preventDefault();
    if(isValid(keyword)) {
      setEncode({...encodeObj, currentCharIndex: 0, keyword: keyword, sourceText: "", cipherText: ""})
    }
  }

  function handleClearClick (event) {
    event.preventDefault();
    setEncode({...encodeObj, currentCharIndex: 0, sourceText: "", cipherText: ""})
  }

  function handleSourceCharClick(letter, cipherLetter) {
    setEncode({...encodeObj, currentCharIndex: encodeObj.currentCharIndex === encodeObj.keyword.length-1 ? 0 : encodeObj.currentCharIndex+1, sourceText: encodeObj.sourceText+letter, cipherText: encodeObj.cipherText+cipherLetter})
  }

  return (
    <div className="App">
      <Configuration keyword={encodeObj.keyword} currentCharIndex={encodeObj.currentCharIndex} handleUpdate={handleUpdate} isValid={encodeObj.isValid}/>
      <Encoding keyword={encodeObj.keyword} currentCharIndex={encodeObj.currentCharIndex} sourceText={encodeObj.sourceText} cipherText={encodeObj.cipherText} handleSourceCharClick={handleSourceCharClick} handleClearClick={handleClearClick}/>
    </div>
  );
}

export default App;
