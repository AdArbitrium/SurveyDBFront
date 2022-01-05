import * as React from "react"
import FormComponent from "../components/formComponent"
import Example from "../components/test1"


class IndexPage extends React.Component{




  render(){
    return(
      <div>
        
        <FormComponent />
        <Example></Example>
      </div>
    )
  }
}


export default IndexPage
