<!--
 * @Author: he yan ying
 * @Date: 2022-01-12 10:29:47
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-05-05 10:51:31
 * @Description: 
-->
<template>
  <div class="regist-box">
<!--      绑定script中data数据model="submitForm"-->
<span style="float:right" @click="closeRegist">X</span>
<span class="title">注册</span>
  <el-form :model="registForm"  ref="ruleForm" class="registForm">
      <el-form-item  prop="username">
        <!--  v-model  绑定data中数据"-->
        <el-input placeholder="用户名：" v-model="registForm.username" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" placeholder="密码：" v-model="registForm.password" prefix-icon="el-icon-lock" show-password></el-input>
      </el-form-item>
      <el-form-item  prop="checkPass">
        <el-input type="password" placeholder="确认密码：" v-model="registForm.checkPass" prefix-icon="el-icon-lock" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-row class="bot">
        <el-button style="display:block;margin:0 auto" type="primary" @click="regist" class="btn">注册</el-button>
      </el-row>
  </el-form>
  </div>
</template>

<script>
export default {
 name:"Regist",
 props:'regVisible',
    data() {
      return {
        registFlag:false,
        userToken:"",
        // 登录表单的数据绑定对象
        registForm: {
          username: '',
          password: '',
          checkPass:''
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
      regist(){
          this.$message({
          message: '注册成功！',
          duration:'1000',
          type: 'success'
        });
        this.registFlag=true
        //向父组件NavBarItem.vue传递登录成功消息
        this.$emit('sonRegist',this.registFlag)
        this.$emit('update:regVisible',false)

      },
      closeRegist(){
        this.$emit('update:regVisible',false)
      }
    }
}
</script>

<style>
.title{
   margin-top: 30px;
  font-size: 2rem;
  text-align: center;
  display: block;
}
.registForm{
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 20px;
}
@media screen and (max-width:1000px) {
  .title{
    font-size: 1.5rem;
  }
  .regist-box{
    width: 260px;
  }
}
</style>