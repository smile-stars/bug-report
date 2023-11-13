import { ChildVuex } from 'super-vuex'

const goods = new ChildVuex('goods')
export default goods

goods.setState({
	goodsList: []
})
