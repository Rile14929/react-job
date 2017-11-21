import React from 'react'
import {NavBar,TextareaItem,InputItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avator-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {updata} from '../../redux/user.redux'

@connect(state=>state.user,{updata})
class GeniusInfo extends React.Component{
    constructor(props){
        super(props)
        
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        const path=this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
        <div>
            {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
            <NavBar mode="dark">牛人完善信息页面</NavBar>
            <AvatarSelector selectAvatar={(imgname)=>{
                this.setState({
                    avatar:imgname
                })
            }}></AvatarSelector>
            <InputItem onChange={(v)=>this.onChange('title',v)}>求职岗位</InputItem>
            <TextareaItem rows={3} title='个人简介' autoHeight onChange={(v)=>this.onChange('desc',v)}></TextareaItem>
            <Button type="primary" onClick={()=>this.props.updata(this.state)}>保存</Button>    
        </div>
        )
    }
}
export default GeniusInfo