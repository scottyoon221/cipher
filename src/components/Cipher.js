import React from 'react';
function Cipher(props) {
  return (
    <div>
      <label>
        Cipher Text
        <input type="text" name="name" value={props.cipherText} disabled/>
      </label>
    </div>
  );
}

export default Cipher;
