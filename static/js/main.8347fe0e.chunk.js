(this["webpackJsonpdrum-machine-app"]=this["webpackJsonpdrum-machine-app"]||[]).push([[0],[,,,,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),o=r(6),n=r.n(o),i=(r(12),r(1)),d=r(2),s=r(4),l=r(3),u=[{id:"Bongo",letter:"Q",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826897/Music/Drum%20Machine/Bongo_mfjleg.mp3",color:"#ff5733"},{id:"Heater",letter:"W",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826897/Music/Drum%20Machine/Heater_sfuput.mp3",color:"#ffbd33"},{id:"Clap",letter:"E",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826897/Music/Drum%20Machine/Clap_eqejyc.mp3",color:"#dbff33"},{id:"Caribean",letter:"A",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826897/Music/Drum%20Machine/Caribean_xbn75a.mp3",color:"#75ff33"},{id:"Mistic",letter:"S",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826897/Music/Drum%20Machine/Mistic_fzizt1.mp3",color:"#ff33ce"},{id:"crasshh",letter:"D",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826898/Music/Drum%20Machine/CRASSHH_c3eyae.mp3",color:"#33a8ff"},{id:"Tic",letter:"Z",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826898/Music/Drum%20Machine/Tic_skyeyb.mp3",color:"#8a33ff"},{id:"Strenger",letter:"X",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826898/Music/Drum%20Machine/Strenger_c2obns.mp3",color:"#fffc33"},{id:"bambooo",letter:"C",src:"https://res.cloudinary.com/drpcjt13x/video/upload/v1580826897/Music/Drum%20Machine/bamboo_mn73rh.mp3",color:"#ff3339"}],p=(r(13),function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){t.keyCode===e.props.letter.charCodeAt()&&(e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id))},e.handleClick=function(){e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id)},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick,style:{backgroundColor:this.props.color}},this.props.letter,a.a.createElement("audio",{ref:function(t){return e.audio=t},className:"clip",id:this.props.letter,src:this.props.src}))}}]),r}(a.a.Component)),m=(r(14),function(e){var t=e.soundName;return a.a.createElement("div",{className:"header"},a.a.createElement("div",{id:"display"},t))}),h=(r(15),function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(e){var c;return Object(i.a)(this,r),(c=t.call(this,e)).handleDisplay=function(e){return c.setState({display:e})},c.state={display:"Click or Press Key"},c}return Object(d.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"drum-machine"},a.a.createElement("div",{className:"title"},"DRUM MACHINE"),a.a.createElement(m,{soundName:this.state.display}),a.a.createElement("div",{id:"pad-wrapper"},u.map((function(t){return a.a.createElement(p,{id:t.id,letter:t.letter,src:t.src,color:t.color,handleDisplay:e.handleDisplay})}))))}}]),r}(a.a.Component));n.a.render(a.a.createElement(h,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.8347fe0e.chunk.js.map