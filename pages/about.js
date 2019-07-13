import React from "react";

class About extends React.Component {

  static async getInitialProps() {
    const data = {
      title: "About Page",
      content: "Welcome to the about page, hope you like it!",
      author: "Cat-Yawn"
    }

    return data;
  }

  constructor(props) {
    super(props);
    /* anything we want to change has to be in the state!
    the STATE is LOCAL to the component
    you can pass the STATE to CHILD components (aka the components you return
      in the render function)

    if you want to have a global persistent state, consider the library Redux for 
    state management. Because after a while, you start realizing that you have to
    keep passing state down through child components' props and it just becomes tedious.
    Redux helps remove this tedium and allows for so much more!
      -> beware, redux is A LOT to think about
      -> like it takes some time to learn
      -> a lot of time
    
    you can change the state with this.setState(aFunctionThatTakesTwoArguments(
      thePreviousState, theComponentProps)
    ) )

    If you want to just update one property of the STATE, do:
    this.setState({myProperty: myValue}) and the state will be updated
    
    If you want to access the old state, YOU MUST use the two argument function version
    of the this.setState function
    
    */
    this.state = { counter: 12, name: "YOLO" };
  }




  render() {
    const { title, content, author } = this.props;
    const titleStyle = { color: "red", fontSize: this.state.counter };

    console.log(this.state.counter);

    return (
      <div>
        <h1 style={titleStyle}
          onClick={() => {

            //this.setState({counter: 100});

            this.setState(({ counter }, props) => (
              { counter: counter + 34 }
            ))

          }}>
          {title}
        </h1>

        <h3>By {author}</h3>
        <p>{content}</p>

      </div>
    )
  }
}
export default About;
