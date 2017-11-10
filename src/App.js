import React from 'react'
import {connect} from 'react-redux'
import {add_GUN ,remove_GUN,add_GUNAsync} from './index.redux'


// @connect(mapStatetoProps,actionCreators)

class App extends React.Component{
    render(){
        const add_GUN = this.props.add_GUN
        const remove_GUN =this.props.remove_GUN
        const add_GUNAsync=this.props.add_GUNAsync
        const num = this.props.num
        return (<div>
                    <h1>现在有{num}个</h1>
                    <button onClick={add_GUN}>增加</button>
                    <button onClick={remove_GUN}>减少</button>
                    <button onClick={add_GUNAsync}>延迟2秒加</button>
                </div>)
    }
}

const mapStatetoProps = (state) =>{
    return {num:state}
}
const actionCreators = {add_GUN ,remove_GUN,add_GUNAsync}
App = connect(mapStatetoProps,actionCreators)(App)

export default App