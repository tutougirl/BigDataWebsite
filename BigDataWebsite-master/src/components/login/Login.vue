<!--
 * @Author: he yan ying
 * @Date: 2021-12-30 10:20:04
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-03-18 13:37:18
 * @Description: 
-->
<template> 
  <div class="login-box">
<!--      绑定script中data数据model="submitForm"-->
  <h1 style="text-align: right" @click="closeLogin">X</h1>
  <h1 class="title">登陆</h1>
    <el-form :model="submitForm"  ref="ruleForm" class="loginForm">
      <el-form-item prop="username">
        <!--  v-model  绑定data中数据"-->
        <el-input placeholder="用户名：" prefix-icon="el-icon-user" v-model="submitForm.username"></el-input>
        <!-- <el-input v-model="submitForm.username" prefix-icon="iconfont icon-user"></el-input> -->
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" placeholder="密码：" v-model="submitForm.password" prefix-icon="el-icon-lock" show-password></el-input>
      </el-form-item>
      <el-row class="bot">
        <el-button  @click="loadRegist" class="btn">注册</el-button>
        <el-button  type="primary" @click="login" class="btn">登录</el-button>
      </el-row>
      <el-row class="bot">
        <a class="text" style="float:left">忘记密码</a>
      </el-row>
    </el-form>
     <el-card
        v-show="registCardVisible"
        width="30%"
        class="regist-card"
        >
    <regist @sonRegist="getMes" :regVisible.sync="registCardVisible"></regist>
     </el-card>
  </div>
</template>

<script>
	import Regist from '../regist/Regist.vue'
  export default {
  components:{
    Regist
  },
  name:"Login",
  props:'loginVis',
    data() {
      return {
        registCardVisible:false,
        userToken:"",
        // 登录表单的数据绑定对象
        submitForm: {
          username: '',
          password: ''
        },
        // rules: {
        //   username: [
        //     { required: true, message: '请输入用户名', trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        //     {
        //       required: true,
        //       pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
        //       message: '姓名不支持特殊字符',
        //       trigger: 'blur'
        //     }
        //   ],
        //   password: [
        //     { required: true, message: '请输入密码', trigger: 'change' },
        //     {
        //       pattern: /([a-zA-Z0-9][!@#$%^&()*])|([!@#$%^&()*][a-zA-Z0-9])+/,
        //       message: '密码必须由字母、数字、特殊符号组成，区分大小写',
        //       trigger: 'blur'
        //     }
        //   ]
        // }
      };
    },
    methods:{
      login(){
        // if(this.submitForm.username==='admin'&&this.submitForm.password==='admin'){
          this.$message({
          message: '登录成功！',
          duration:'1000',
          type: 'success'
        });
        this.loginFlag=true
        //向父组件NavBarItem.vue传递登录成功消息
        this.$emit('son',this.loginFlag)
        this.$emit('update:loginVis',false)
        // }else{
        //   this.$message({
        //     message: '登录失败！',
        //     duration:'1000',
        //     type: 'error'
        // });
        // }
      },
      getMes(mes){
				this.registVisible=false;
			},
      loadRegist(){
        this.registCardVisible=true
      },
      closeLogin(){
        this.$emit('update:loginVis',false)
      }
    }
}
</script>

<style>
.title{
  text-align: center;
  margin-top: 30px;
}
.loginForm{
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 60px;
}
.bot{
  margin-top: 50px;
  display: flex;
}
.btn{
  width: 200px;
}
.text{
  margin-top: 10px;
}
.regist-card{
		width: 410px;
		height: 600px;
		position: absolute;
		top: -5px;
		left: -5px;
		border: 2px solid #313645;
  	border-radius: 20px;
	}
</style>
