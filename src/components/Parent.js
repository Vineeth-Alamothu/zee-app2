import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(props){
        super(props)
        
        this.state  = {
            isLoggedIn: true,
            count : 0
        }
        this.helloParent = this.helloParent.bind(this)
    }
    helloParent(d){
        alert("who the hell are you "+d)
    }
    changeState(){
        alert("hello changeState")
        // this.setState({count : this.state.count+1})
    }
  render() {
    // if(this.state.isLoggedIn){
    //     return(
    //         <div><h1>Welcome vineeth</h1>
    //         {/* <h1>the count is {this.count.state}</h1> */}
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Welcome User</h1>
    //         </div>
    //     )
    // }
    return (
      <div>Parent
        <h1>the count is {this.state.count}</h1>
        <Child helloParent = {this.helloParent} changeState = {this.changeState}>
        </Child>
        
        {/* <Child changeState = {this.changeState}></Child> */}
      </div>
    )
  }
}
