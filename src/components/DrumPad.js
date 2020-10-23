import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component {
  
    componentDidMount(){
      document.addEventListener("keydown", this.handleKeyDown)
      window.focus()
    }
    
    componentWillUnmount(){
      document.removeEventListener("keydown", this.handleKeyDown)
    }
    
    handleKeyDown = e => {
      if(e.keyCode === this.props.letter.charCodeAt()){
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    }
    
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
    
    render(){
      return(
        <div 
            className="drum-pad" 
            id={this.props.id} 
            onClick={this.handleClick}
            style={{backgroundColor:this.props.color}}
            >
            {this.props.letter}
            <audio
              ref={ref => this.audio = ref}
              className="clip"
              id={this.props.letter}
              src={this.props.src}>
            </audio>
        </div>    
      )
    }
}

export default DrumPad;