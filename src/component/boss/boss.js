import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'
@connect(state=>state.chatuser,{getUserList})
class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        this.props.getUserList('genius')
    }
    render(){
        console.log(this.props)

        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}
export default Boss