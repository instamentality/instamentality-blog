import React from "react";

class About extends React.Component{
  render(){
    const data = {text: "this is the about page"};

    return (
    <div>
	    <h1>{ data.text }</h1>
    </div>
    )
  }
}
export default About;
