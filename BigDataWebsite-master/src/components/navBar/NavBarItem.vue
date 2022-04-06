<template>
	<el-menu mode="horizontal" :theme="theme1" :default-active="activeName" :accordion="true" background-color="transparent" active-text-color="#00AAFF" :router="true">
		<el-menu-item key="1" :class="{'activ':!isShowMenu,'.ivu-menu-item-selected':!isShowMenu}" name="/home" index="/home">首页</el-menu-item>
		<el-menu-item name="/product" :class="{'activ':!isShowel-menu}" index="/product">
				产品中心
		</el-menu-item>
		<el-menu-item name="/requirement" :class="{'activ':!isShowMenu}"  index="/requirement">
		  需求发布
		</el-menu-item>

		<!-- <MenuItem key="7" :class="{'activ':!isShowMenu}" name="/about" to="/about">相关产品</MenuItem> -->
		<!-- <MenuItem key="5" :class="{'activ':!isShowMenu}" name="/about" to="/about">生态伙伴</MenuItem> -->
		<el-menu-item name="/about" :class="{'activ':!isShowMenu}" index="/about">
				关于我们
		</el-menu-item>
	</el-menu>
</template>

<script>

	export default {
		name: "",
		data() {
			return {
				loginFlag:false,
				theme1: 'light',
				dialogVisible:false,
				activeName: this.$route.path
			}
		},
		methods:{
			getMes(mes){
				this.loginFlag=mes;
				this.dialogVisible=false;
			},
			loadingForm(){
				this.dialogVisible=true
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
		props: {
			isShowMenu: {
				type: Boolean,
				default: true
			}
		},
		watch: {
			'$route'() {
				this.activeName = this.$route.path
			}
		}
	}
</script>

<style scoped>
.el-menu{
  border: none;
}
	/* .ivu-menu.ivu-menu-light.ivu-menu-horizontal {
		background-color: rgba(0, 0, 0, 0);
		font-size: 18px;
		color: #b5b5b5;
		border-bottom: none;
		margin-top: 20px;
		font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
	} */
	
	>>>.el-menu-item{
		min-width: 150px;
		text-align: center;
	}

	.el-menu-item {
		margin-top: 10px;
		font-size: 15px;
		color: #b5b5b5;
		border-bottom: none;
	}
	.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
		color: #333 !important;
	}

	.ivu-menu-horizontal.ivu-menu-light:after {
		background: none;
	} 

	/* .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active[data-v-3445dde2],
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item[data-v-3445dde2]:hover,
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active[data-v-3445dde2],
	.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu[data-v-3445dde2]:hover {
		border-bottom: none;
		color: #FFFFFF !important;
		background-color: #00AAFF !important;
	} */

	/* .ivu-menu-item:hover {
		color: #FFFFFF !important;
		background-color: #00AAFF !important;
	}

	.activ:hover {
		color: #FFFFFF !important;
		border-bottom: none !important;
		background-color: #00AAFF !important;
	}

	.ivu-menu.ivu-menu-light.ivu-menu-horizontal {
		margin-top: 0;
	}

	.ivu-menu-horizontal {
		height: 80px;
		line-height: 80px;
	}

	>>>.ivu-select-dropdown{
		margin: 0 !important;
		padding: 0 !important;
		border-radius: 0 !important;
		left: 0px !important;
	} */
</style>
