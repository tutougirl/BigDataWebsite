<template>
	<div class="nav-move">
		<div class="move-icon" @click="drawer = true">
			<i class="el-icon-s-operation"></i>
		</div>
		<!-- <div class="move-logo">
			<img src="~assets/img/logo.png" />
		</div> -->
		<div class="move-icon"></div>
		<el-drawer :custom-class="eldrawer" :show-close="false" :z-index="-1" :visible.sync="drawer" 
			:direction="direction" :before-close="handleClose" :modal="false">
			<div @click="home">首页</div>
<!-- 			<div @click="introduction">公司简介</div>
			<div @click="news">新闻中心</div> -->
			<div @click="product">产品中心</div>
			<div @click="requirement">需求发布</div>
			<div @click="about">关于我们</div>
			<div @click="loadingForm" v-if="!loginFlag">登录</div>
			<div @click="logout" v-if="loginFlag" >退出</div>
		</el-drawer>
		 <el-card
				class="login-card"
				v-show="loginCardVisible"
			>
		<!--      绑定script中data数据model="submitForm"-->
				<login @son="getMes" :loginVis.sync="loginCardVisible"></login>
		  </el-card>
	</div>

</template>

<script>
	import Login from '@/components/login/Login.vue'
	export default {
		name: "",
		components:{
			Login
		},
		data() {
			return {
				drawer: false,
				direction: 'ttb',
				eldrawer: 'eldrawer',
				loginFlag:false,
				loginCardVisible:false,
			}
		},
		methods: {
			handleClose(done) {
				done()
			},
			home() {
				this.$router.replace("/home")
			},
			news() {
				this.$router.replace("/news")
			},
			introduction() {
				this.$router.replace("/introduction")
			},
			product() {
				this.$router.replace("/product")
			},
			requirement() {
				this.$router.replace("/requirement")
			},
			about() {
				this.$router.replace("/about")
			},
			getMes(mes){
				this.loginFlag=mes;
				this.dialogVisible=false;
			},
			loadingForm(){
				this.loginCardVisible=true
			},
			logout(){
				 this.$message({
		      message: '退出登录成功！',
		      type: 'success',
					duration:'1000'
		    });
				this.loginFlag=false
			},
		}
	}
</script>

<style>
	.nav-move {
		display: flex;
		background-color: var(--color-background);
		flex: 1;
		width: 100%;
		height: 44px;
		line-height: 44px;
		font-size: 30px;
		color: #fff;
		text-align: center;
	}

	.move-icon {
		width: 20%;
		height: 44px;
	}

	.move-logo {
		width: 60%;
		display: table-cell;
		vertical-align: middle;
		text-align: center;
	}

	.move-logo img {
		width: 120px;
		height: 30px;
		margin-top: 7px;
	}
	.el-drawer{
		background-color: #343434;
		font-size: 13px;
		font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
	}
	.el-drawer__header{
		margin-bottom: 0;
	}
	.eldrawer{
		background-color: var(--color-background);
		min-height: 300px;
		padding-top: 35px;
		text-align: center;
	}
	@media screen and (max-width:1000px) {
			.login-card{
				width: 300px;
				height: 450px;
				position: absolute;
				top: 200px;
				left: 50%;
				margin-left: -150px;
				border: 2px solid #313645;
				border-radius: 20px;
			}
	}
</style>
