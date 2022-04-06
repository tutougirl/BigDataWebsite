<!--
 * @Author: he yan ying
 * @Date: 2021-11-23 16:19:47
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-03-18 14:06:32
 * @Description: 
-->
<template>
	<div class="navbar" >
<!-- 		<div class="navbar-logo">
			<img src="~assets/img/logo.png" />
		</div> -->
		<div class="navbar-cell"></div>
		<div class="navbar-el-nav">
			<nav-bar-item :isShowMenu="isShowMenu"/>
		</div>
		<div style="margin-left: 20%;" @click="loadingForm" class="login-tips" v-if="!loginFlag">登录</div>
		<!-- <a style="margin-left: 20%;" class="login-tips" v-if="!loginFlag">注册</a>	 -->
		<div style="margin-left: 20%;" v-if="loginFlag" @click="logout" class="login-tips">退出</div>
				 <el-card
				 	class="login-card"
					v-show="loginCardVisible"
					width="30%">
		<!--      绑定script中data数据model="submitForm"-->
					<login @son="getMes" :loginVis.sync="loginCardVisible"></login>
		  </el-card>
	</div>
</template>

<script>
	import NavBarItem from './NavBarItem.vue'
	import Login from '../login/Login.vue'
  export default{
    name:"",
		components:{
			NavBarItem,
			Login
		},
		props:{
			isShowMenu:{
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				loginFlag:false,
				theme1: 'light',
				loginCardVisible:false,
				activeName: this.$route.path
			}
		},
		methods:{
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
			 handleClose(done) {
		    this.$confirm('确认关闭？')
		      .then(_ => {
		        done();
		      })
		      .catch(_ => {});
		  }
		},
  }
</script>

<style >
	.navbar{
		width: 100%;
		height: 80px;
		display: flex;
		z-index: 999;
		background-color: #313645;
		
	}
	.navbar-logo{
		width: 20%;
		margin: auto;
	}
	.navbar-cell{
		margin-right: 10%;
	}
	.navbar-el-nav{
		width: 75%;
	}
	.navbar-logo img{
		width: 80px;
		height: 60px;
	}
	.login-tips{
		width: 120px;
		height: 80px;
		margin-left: 20px;
		padding: 28px 20px;
		font-size: 15px;
		color: #b5b5b5;
	}
	.login-card{
		width: 400px;
		height: 470px;
		position: absolute;
		top: 90%;
		left: 35%;
		border: 2px solid #313645;
  	border-radius: 20px;
	}
	
</style>
