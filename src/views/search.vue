<template>
	<div class="contain">
		<van-sticky>
			<div class="header">
				<form action="">
					<van-search 
						ref="search" 
						autofocus 
						v-model="keyword" 
						shape="round" 
						placeholder="搜索到店美食" 
						show-action 
						>
						<van-icon slot="left" class="close" name="arrow-left" size="20" @click="goBack" />
					</van-search>
				</form>
			</div>
		</van-sticky>
		<ul>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
			<li>测试文本</li>
		</ul>
		<backTop />
	</div>
</template>
<script>
import { Sticky, Field, Search } from 'vant'
import backTop from '@/components/backTop'
export default {
	components: {
		[Sticky.name]: Sticky,
		[Field.name]: Field,
		[Search.name]: Search,
		backTop
	},
	data () {
		return {
		}
	}
}
</script>
<style lang="less" scoped>
.contain {
	.header {
		background: lightblue;
		.close {
			margin-right: 5px;
		}
	}
	.history {
		padding: 0 12px;
		height: calc(100vh - 46px);
		background: #fff;
		.record {
			padding: 10px 0;
			&-item {
				max-width: 100px;
				margin: 0 5px 5px;
				padding: 3px 8px;
				background: #eee;
				border-radius: 20px;
			}
		}
	}
}
</style>