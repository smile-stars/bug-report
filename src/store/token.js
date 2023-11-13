/* eslint-disable */
import { ChildVuex } from 'super-vuex'

// token为命名空间
const child = new ChildVuex('token')
export default child

child.setState({
    token: ''
})