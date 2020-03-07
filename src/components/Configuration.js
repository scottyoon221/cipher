import React, {useState} from 'react';
function Configuration(props) {
  const currentIndexStyles = {
    backgroundColor: "aqua",
  }

  const columnStyles = {
    display: 'inline-block',
    borderStyle: 'solid',
    width: '18px',
    textAlign: 'center',
  }

  const keywordStyle = {
    borderBottom: 'solid',
  }

  const warningStyles = {
    color: 'red',
  }

  const [keyword, setKeyword] = useState("");
  let counter = 0;

  return (
    <div>
      <b>Configuration</b>
      <form onSubmit={(event) => props.handleUpdate(event,keyword)}>
        <label>
          Keyword
          <input type="text" name="name" onChange={event => setKeyword(event.target.value)}/>
        </label>
        <input type="submit" value="Update" />
      </form>
      {
        !props.isValid ?
            <div style={warningStyles}>
              Input must be uppercase letter and between 3 and 8 characters long.
            </div>
          :
            null
      }
      <div>
        {
          props.keyword.split("").map((letter, index) =>
            props.currentCharIndex === index
            ?
            <div style={{...currentIndexStyles, ...columnStyles}} key={counter++}>
              <div style={keywordStyle}>
                {letter}
              </div>
              <div>
                {letter.charCodeAt(0) - 'A'.charCodeAt(0)}
              </div>
            </div>
            :
            <div style={columnStyles} key={counter++}>
              <div style={keywordStyle}>
                {letter}
              </div>
              <div>
                {letter.charCodeAt(0) - 'A'.charCodeAt(0)}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Configuration;