import React from 'react';
import { data } from './data/data';
import DrumPad from './DrumPad';
import './DrumMachineApp.css';


class DrumMachineApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: "Click or Press Key"
    }
  }

  handleDisplay = display => this.setState({ display })
  
  render() {
    return (
      <div id="drum-machine">
        <div className="title">DRUM MACHINE</div>
        <div className="header">
          <div id="display">{this.state.display}</div>
        </div>  
        <div id="pad-wrapper">
          {data.map(d => (
            <DrumPad 
              id={d.id}
              letter={d.letter}
              src={d.src}
              color={d.color}
              handleDisplay={this.handleDisplay}
            />
           ))}
        </div>
      </div>
    );
  }
}

export default DrumMachineApp;
