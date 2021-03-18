<template>
	<div class="successbox">
		<img src="../../assets/pay.jpg" />
		<!-- <p id="success">支付成功</p> -->
		<p id="tips">你可能需要进行下列操作</p>
		<el-button type="info" plain @click="toorder">查看订单</el-button>
		<el-button type="info" plain @click="toindex">返回首页</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			toorder() {
				this.$router.push("/personal")
			},
			toindex() {
				this.$router.push("/Home")
			}
		}
	}
</script>

<style>
	.successbox {
		height: 500px;
		margin: 40px auto  !important;
		background-color: #fff;
		text-align: center;
	}

	.successbox img {
		width: 350px;
		height: 185px;
		margin-top: 100px;
		margin-left: 20px;
	}

	.successbox #success {
		color: #292929;
		font-size: 22px;
		margin-top: 20px;
	
	
		font-weight: bold;
	}

	.successbox #tips {
		color: #A9A9A9;
		font-size: 16px;
		margin-top: 10px;
	}

	.successbox button {
		display: inline-block;
		margin: 20px 20px;
	}
</style>
