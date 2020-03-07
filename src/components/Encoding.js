import React from 'react';
import Source from './Source.js';
import Cipher from './Cipher.js';
function Encoding(props) {
  return (
    <div>
      Encoding
      <Source keyword={props.keyword} sourceText={props.sourceText} currentCharIndex={props.currentCharIndex} handleClearClick={props.handleClearClick} handleSourceCharClick={props.handleSourceCharClick}/>
      <Cipher cipherText={props.cipherText} />
    </div>
  );
}

export default Encoding;