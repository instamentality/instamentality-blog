import React from "react";
import Layout from "../components/Layout.js";
import ReactMarkdown from 'react-markdown';

class Politics extends React.Component{
    static async getInitialProps( { req }){
    	const content = await require('../data/politics.md');
    	return { content };
    }

    render(){
      console.log(this.props.content);
   	  return ( 
   		  <Layout>
        	  <ReactMarkdown source={this.props.content.default} />
    	  </Layout>
    	);
    }
}

export default Politics;