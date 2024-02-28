import React from 'react';

class App extends React.Component {
  handleClick = () => {
    window.location.href = 'https://twiliosms.streamlit.app/';
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>/</button>
      </div>
    );
  }
}

export default App;
