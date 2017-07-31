import React from 'react'
import {
    View,
    Text,
    Platform
} from 'react-native';
import {connect} from 'react-redux'
import {actionCreators} from './../../reducers/app.js'

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text
                    onPress = {()=>this.props.changeRoot('after-login')}
                >Login</Text>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        changeRoot : (root)=> dispatch(actionCreators.changeRoot(root))
    }
}

export default connect(undefined,mapDispatchToProps)(Login);
