import { ChildVuex } from 'super-vuex'

const address = new ChildVuex('address')
export default address

address.setState({
	addressInfo: {}
})
