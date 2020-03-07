import React from 'react';
function Source(props) {
  const sourceStyles = {
     borderBottom: 'solid',
   };

   const columnStyles = {
     display: 'inline-block',
     borderStyle: 'solid',
     width: '18px',
     textAlign: 'center',
   }
  // When the table is fixed size, it maybe more performant to write out html instead of using map funciton.
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let offset = null;
  let counter = 0;
  if(props.keyword !== "") {
    offset = props.keyword[props.currentCharIndex].charCodeAt(0) - 'A'.charCodeAt(0);
  }

  function handleMouseOver(event) {
    event.target.style.background = 'aqua';
  }

  function handleMouseLeave(event) {
    event.target.style.background = 'white';
  }

  return (
    <div>
      <div>
        Source Text
      </div>
      <div>
      {
        offset !== null ?
          alphabet.map((letter) =>
              letter.charCodeAt(0) + offset > 90
              ?
                <div style={columnStyles} key={counter++}>
                  <div style={sourceStyles} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={() => props.handleSourceCharClick(letter, String.fromCharCode(letter.charCodeAt(0) + offset - 26))}>
                    {letter}
                  </div>
                  <div>
                     {String.fromCharCode(letter.charCodeAt(0) + offset - 26)}
                  </div>
                </div>
              :
                <div style={columnStyles} key={counter++}>
                  <div style={sourceStyles} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={() => props.handleSourceCharClick(letter, String.fromCharCode(letter.charCodeAt(0) + offset))}>
                    {letter}
                  </div>
                  <div>
                    {String.fromCharCode(letter.charCodeAt(0) + offset)}
                  </div>
                </div>
            )
          :
          null
      }
      </div>
      <form onSubmit={props.handleClearClick}>
        <label>
          Keyword
          <input type="text" name="name" value={props.sourceText} disabled/>
        </label>
        <input type="submit" value="Clear" />
      </form>
    </div>
  );
}


export default Source;