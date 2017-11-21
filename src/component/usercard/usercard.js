import React from 'react'
import PropTypes from 'prop-types'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'

class UserCard extends React.Component{
    static PropTypes = {
        userlist:PropTypes.array.isRequired
    }
    render(){
        return (
            <WingBlank>
                {this.props.userlist.map(v=>(
                    v.avatar?(<Card key={v._id}>
                        <Card.Header 
                        title={v.user} 
                        thumb={require(`../img/${v.avatar}.png`)}
                        extra={<span>{v.title}</span>}
                        > 
                        </Card.Header>
                        <Card.Body>
                            {v.type=='boss'?<div>{v.company}</div>:null}
                            {v.desc.split('\n').map(d=>(<div key={d}>{d}</div>))}
                            {v.type=='boss'?<div>{v.money}</div>:null}
                        </Card.Body>
                    </Card>):null
                ))}
            </WingBlank>
        )
    }
}

export default UserCard