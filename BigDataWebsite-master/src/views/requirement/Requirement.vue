<!--
 * @Author: he yan ying
 * @Date: 2022-01-05 11:25:33
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-03-18 14:01:40
 * @Description: 
-->
<template>
	<div class="introduction">
		
		<!-- 页头 -->
		<page-header :isShowMenu="isShowMenu" :englishText="chineseText" 
			 :imgSrc="imgSrc"/>
		<div class="public-body" >
			<div class="perference">
			<h1 class="perference-title">{{title}}</h1>
			<p class="perference-info">{{info}}</p>
			<div class="perference-content">
				<ul>
					<li v-for="(item,index) of content" :key="index">
						<div
							class="perference-bg"
							:style="{backgroundImage:'url('+item.imgUrl+')'}"
							:class="{ 'perference-bg-enter':  currentEnter===index ,'perference-bg-leave': currentLeave===index}"
						></div>
						<p class="perference-bg-caption">{{item.caption}}</p>
					</li>
				</ul>
			</div>
			</div>
			<div class="subform-bg">
				 <el-form :model="subForm" status-icon :rules="rules" ref="subForm" label-width="100px" class="subForm">
					<el-form-item label="公司" prop="company" class="label">
						<el-input v-model="subForm.company" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="姓名" prop="name" class="label">
						<el-input type="phoneword" v-model="subForm.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="联系方式" prop="phone" class="label">
						<el-input v-model.number="subForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email" class="label">
						<el-input v-model="subForm.email"></el-input>
					</el-form-item>
					<el-form-item label="需求描述" prop="require" class="label">
						<el-input type="textarea" v-model.number="subForm.require"></el-input>
					</el-form-item>
				</el-form>
				<div class="btn">
					<el-button type="primary" @click="submitForm">提交申请</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import PageHeader from 'components/pageHeader/PageHeader.vue'
	
  export default{
    name:"Introduction",
		components:{
			PageHeader,
		},
		data() {
			var validateEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入邮箱'));
        }else{
					 if (this.subForm.email!== '') {
					 var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
					if(!reg.test(this.subForm.email)){
					 callback(new Error('请输入正确的邮箱地址'))
					}
					}
				}
      };
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入联系方式'));
        } else {
           if (this.subForm.phone!== '') {
						 var myreg = /^[1][3,5,7,8][0-9]{9}$/;
						 if(!myreg.test(this.subForm.phone)){
							callback(new Error('请输入正确的手机号'))
					 }
				}
					callback();
        }
      };
			return {
				scrollTop: 0,
				isShowMenu: true,
				englishText: "requirement",
				chineseText: "需求发布，特色定制服务",
				imgSrc: "homepage-mall-video-bg.jpg",

				currentEnter: null,
				currentLeave: null,
				title: "定制流程",
				info: "",
				content: [
					{
						imgUrl: require("../../assets/img/tep1.png"),
						caption: "需求提交"
					},
					{
						imgUrl: require("../../assets/img/n1-n.png"),
					},
					{
						imgUrl: require("../../assets/img/tep2.png"),
						caption: "需求评估"
					},
						{
						imgUrl: require("../../assets/img/n1-n.png"),
					},
					{
						imgUrl: require("../../assets/img/tep3.png"),
						caption: "数据采集"
					},
						{
						imgUrl: require("../../assets/img/n1-n.png"),
					},
					{
						imgUrl: require("../../assets/img/tep4.png"),
						caption: "数据交付"
					}
				],
				subForm: {
					company:'',
					name:'',
          phone: '',
          email: '',
        },
				rules: {
					company:[
						{ required: true, message: '请输入公司名称', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
					],
					name:[
						{ required: true, message: '请输入联系人姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
					],
          phone: [
						{ required: true, message: '请输入联系方式', trigger: 'blur' },
            { validator: validatePhone, trigger: 'blur' }
          ],
          email: [
						{ required: true, message: '请输入邮箱', trigger: 'blur' },
            { validator: validateEmail, trigger: 'blur' }
          ],
					require:[
						{ required: true, message: '请概述需求', trigger: 'blur' },
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
					]
        }
			}
		},
		methods: {
			// 保存滚动值，这是兼容的写法
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				this.scrollTop >= 100 ? this.isShowMenu = false : this.isShowMenu = true
			},
			submitForm(){
			 this.$refs.subForm.validate((valid) => {
				 if(valid){
					 alert()
				 }else{
					  return false;
				 }
			 })
		},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true)
		},
		destroyed() {
			// 离开该页面需要移除这个监听的事件，不然会报错
			window.removeEventListener('scroll', this.handleScroll)
		}
  }
</script>

<style scoped="scoped">
	.active{
		margin: 20px auto;
	}
	.public-body{
		padding: 0;
	}
	
	.perference {
  text-align: center;
  margin-top: 50px;
}
h1 {
  margin-top: 0.58438rem;
		font-size: 1.925rem;
		line-height: 1.2;
		font-weight: 700;
		color: #42495b;
		text-align: center;
}
.perference-bg {
  width: 140px;
  height: 140px;
  display: block;
  margin: auto;
  background-size: cover;
  background-position: 0 140px;
}
.perference-bg-enter {
  animation: enter 400ms steps(25) both;
}
.perference-bg-leave {
  animation: leave 400ms steps(25) both;
}
/* .perference-content {
  overflow:hidden;
} */
.perference-content::after {
  content: "";
  clear: both;
  display: block;
}
.perference-content ul {
  margin: 20px auto;
  width: 1200px;
}
.perference-content ul li {
  float: left;
  width: 160px;
	list-style-type: none;
}
.perference-content ul li:hover {
  font-weight: 700;
}
.perference-bg-caption {
  position: relative;
  display: inline-block;
  font-size: 18px;
  color: #383e63;
  line-height: 25px;
  margin-top: 10px;
  margin-bottom: 40px;
}
@keyframes enter {
  0% {
    background-position: 0 140px;
  }
  90% {
    background-position: 0 3640px;
  }
  100% {
    background-position: 0 3640px;
  }
}
@keyframes leave {
  0% {
    background-position: 0 3640px;
  }
  90% {
    background-position: 0 140px;
  }
  100% {
    background-position: 0 140px;
  }
}
.subform-bg{
		position: relative;
		width: 100%;
		min-height:500px;
		overflow: hidden;
		background-color: #e9eff4;
		/* background-image: url(../../assets/img/home/homepage-mall-video-bg.jpg);
		background-size:cover; */
}

.subForm{
	width: 600px;
	margin: 80px auto;
	opacity: 0.7;
}
/deep/ .label .el-form-item__label{
	
	color: rgb(7, 7, 7);
}
.btn{
	margin-bottom: 80px;
	margin-left: 50%;
}
</style>
