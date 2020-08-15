import React, { useEffect, useState } from "react"
import {TimelineMax,Power2,Power4} from "gsap"

import $ from "jquery"


class Navbar extends React.Component{

constructor(s){
super(s)
this.state={hidden:true}

}

componentDidMount(){

  const GSAP = require("gsap/CSSPlugin");
      const { CSSPlugin } = GSAP;
     
const C = CSSPlugin;

    var openTrigger = $(".menu-trigger");

    var openTriggerTop = openTrigger.find(".menu-trigger-bar.top");
    var openTriggerMiddle = openTrigger.find(".menu-trigger-bar.middle");
    var openTriggerBottom = openTrigger.find(".menu-trigger-bar.bottom");

//CLOSE TRIGGER
var closeTrigger = $(".close-trigger");
var closeTriggerLeft = closeTrigger.find(".close-trigger-bar.left");
var closeTriggerRight = closeTrigger.find(".close-trigger-bar.right");

//LOGO
var logo = $(".logo");

//MENU

var menu = $(".menu");
var menuTop = $(".menu-bg.top");
var menuMiddle = $(".menu-bg.middle");
var menuBottom = $(".menu-bg.bottom");

//TL
var tlOpen = new TimelineMax({ paused: true });
var tlClose = new TimelineMax({ paused: true });

//OPEN TIMELINE
tlOpen
  .add("preOpen")
  .to(
    logo,
    0.4,
    {
      scale: 0.8,
      opacity: 0,
      ease: Power2.easeOut
    },
    "preOpen"
  )
  .to(
    openTriggerTop,
    0.4,
    {
      x: "+80px",
      y: "-80px",
      delay: 0.1,
      ease: Power4.easeIn,
      onComplete: function () {
        closeTrigger.css("z-index", "25");
      }
    },
    "preOpen"
  )
  .to(
    openTriggerMiddle,
    0.4,
    {
      x: "+=80px",
      y: "-=80px",
      ease: Power4.easeIn,
      onComplete: function () {
        openTrigger.css("visibility", "hidden");
      }
    },
    "preOpen"
  )
  .to(
    openTriggerBottom,
    0.4,
    {
      x: "+=80px",
      y: "-=80px",
      delay: 0.2,
      ease: Power4.easeIn
    },
    "preOpen"
  )
  .add("open", "-=0.4")
  .to(
    menuTop,
    0.8,
    {
      y: "13%",
      ease: Power4.easeInOut
    },
    "open"
  )
  .to(
    menuMiddle,
    0.8,
    {
      scaleY: 1,
      ease: Power4.easeInOut
    },
    "open"
  )
  .to(
    menuBottom,
    0.8,
    {
      y: "-114%",
      ease: Power4.easeInOut
    },
    "open"
  )
  .fromTo(
    menu,
    0.6,
    {
      y: 30,
      opacity: 0,
      visibility: "hidden"
    },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      ease: Power4.easeOut
    },
    "-=0.2"
  )
  .add("preClose", "-=0.8")
  .to(
    closeTriggerLeft,
    0.8,
    {
      x: "-=100px",
      y: "+=100px",
      ease: Power4.easeOut
    },
    "preClose"
  )
  .to(
    closeTriggerRight,
    0.8,
    {
      x: "+=100px",
      y: "+=100px",
      delay: 0.2,
      ease: Power4.easeOut
    },
    "preClose"
  );

//CLOSE TIMELINE
tlClose
  .add("close")
  .to(
    menuTop,
    0.2,
    {
      backgroundColor: "#6295ca",
      ease: Power4.easeInOut,
      onComplete: function () {
        logo.css("z-index", "26");
        closeTrigger.css("z-index", "5");
        openTrigger.css("visibility", "visible");
      }
    },
    "close"
  )
  .to(
    menuMiddle,
    0.2,
    {
      backgroundColor: "#6295ca",
      ease: Power4.easeInOut
    },
    "close"
  )
  .to(
    menuBottom,
    0.2,
    {
      backgroundColor: "#6295ca",
      ease: Power4.easeInOut
    },
    "close"
  )
  .to(
    menu,
    0.6,
    {
      y: 20,
      opacity: 0,
      ease: Power4.easeOut,
      onComplete: function () {
        menu.css("visibility", "hidden");
      }
    },
    "close"
  )
  .to(
    logo,
    0.8,
    {
      scale: 1,
      opacity: 1,
      ease: Power4.easeInOut
    },
    "close",
    "+=0.2"
  )
  .to(
    menuTop,
    0.8,
    {
      y: "-113%",
      ease: Power4.easeInOut
    },
    "close",
    "+=0.2"
  )
  .to(
    menuMiddle,
    0.8,
    {
      scaleY: 0,
      ease: Power4.easeInOut
    },
    "close",
    "+=0.2"
  )
  .to(
    menuBottom,
    0.8,
    {
      y: "23%",
      ease: Power4.easeInOut,
      onComplete: function () {
        menuTop.css("background-color", "#ffffff");
        menuMiddle.css("background-color", "#ffffff");
        menuBottom.css("background-color", "#ffffff");
      }
    },
    "close",
    "+=0.2"
  )
  .to(
    closeTriggerLeft,
    0.2,
    {
      x: "+=100px",
      y: "-=100px",
      ease: Power4.easeIn
    },
    "close"
  )
  .to(
    closeTriggerRight,
    0.2,
    {
      x: "-=100px",
      y: "-=100px",
      delay: 0.1,
      ease: Power4.easeIn
    },
    "close"
  )
  .to(
    openTriggerTop,
    1,
    {
      x: "-=80px",
      y: "+=80px",
      delay: 0.2,
      ease: Power4.easeOut
    },
    "close"
  )
  .to(
    openTriggerMiddle,
    1,
    {
      x: "-=80px",
      y: "+=80px",
      ease: Power4.easeOut
    },
    "close"
  )
  .to(
    openTriggerBottom,
    1,
    {
      x: "-=80px",
      y: "+=80px",
      delay: 0.1,
      ease: Power4.easeOut
    },
    "close"
  );

//EVENTS


this.setState({open:tlOpen,close:tlClose})

}


open=()=>{

    this.setState({hidden:false})
    console.log(this.state.open)
    if (this.state.open.progress() < 1) {
        this.state.open.play();
      } else {
        this.state.open.restart();
      }

}


close=()=>{
this.setState({hidden:true})
    if (this.state.close.progress() < 1) {
        this.state.close.play();
      } else {
        this.state.close.restart();
      }

}
 






render(){
return(

[

<div className="navbarContainer ">
<div className="leftLink">
<h4 className="r4">
16-inch model


</h4>
<h6 className="r6">MacBook Pro
</h6>

</div>

<div className="rightLink">
<span class="menu-trigger" onClick={this.open}>
    <i class="menu-trigger-bar top"></i>
    <i class="menu-trigger-bar middle"></i>
    <i class="menu-trigger-bar bottom"></i>
  </span>





</div>
</div>,






<div class="container-s" hidden={this.state.hidden}>
 
  <span class="close-trigger" onClick={this.close}>
    <i class="close-trigger-bar left"></i>
    <i class="close-trigger-bar right"></i>
  </span>
  <span class="logo">
  
 
  </span>
  <div class="inner-container">
      <i class="menu-bg top"></i>
      <i class="menu-bg middle"></i>
      <i class="menu-bg bottom"></i>
    <div class="menu-container">
      <ul class="menu">
      
        <li>
        <div className="but">Buy</div>
        </li>
       
      </ul>
    </div>
  </div>
  
</div>
]
)
}
}



export default Navbar