<template>
	<div class="Product">
		
		<!-- 页头 -->
		<page-header :isShowMenu="isShowMenu" :englishText="chineseText" :imgSrc="imgSrc"/>
		<div class="public-body" >
			<advantage-item class="active">
				<div slot="title-max" class="center">
					<el-input
						v-model="search"
						style="width: 55%;"
					>
						<el-button slot="append" icon="el-icon-search" id="search"></el-button>
					</el-input>
				</div>
				<div slot="text">
						<div class="api-list">
						  <ul class="api-list-header">
						    <li
						      v-for="(item, index) in apiStyle"
						      :key="index"
						      :class="{active: item.name === activeName}"
						      @click="handleChangeView(item.name)">
						      {{item.name}}
						    </li>
						  </ul>
						  <div class="api-content">
						    <content-list :contentList="data" path="song-list-album"></content-list>
						    <div class="pagination">
						      <el-pagination
						        @current-change="handleCurrentChange"
						        background
						        layout="total, prev, pager, next"
						        :current-page="currentPage"
						        :page-size="pageSize"
						        :total="albumDatas.length">
						      </el-pagination>
						    </div>
						  </div>
						</div>
				</div>
			</advantage-item>
		</div>
		<!-- 底部页脚 -->
		<page-footer></page-footer>
	</div>
</template>

<script>
	
	import PageHeader from 'components/pageHeader/PageHeader1.vue'
	import PageFooter from 'components/pageFooter/PageFooter.vue'
	import AdvantageItem from 'views/home/childComponents/AdvantageItem1.vue'
	import ContentList from'./ContentList.vue'
	
  export default{
    name:"Product",
		components:{
			PageHeader,
			PageFooter,
			AdvantageItem,
			ContentList
		},
		data() {
			return {
				scrollTop: 0,
				isShowMenu: true,
				imgSrc: "homepage-mall-solution-bg.jpg",
				search: "",
				tabPosition: 'left',
				chineseText: "产品中心，一站式数据集合",
				apiStyle:  [{name: '全部',type: 0},
										{name: '云上贵州数据资源',type: 1},
										{name: '智慧招商平台数据',type: 2},
										{name: '银联金融信用数据',type: 3},
										{name: '空间地理信息数据',type: 4},
										{name: '水电气等数据',type: 5},],
				activeName: '全部',
				pageSize: 15, // 页数
				currentPage: 1, // 当前页
				albumDatas: [] // 歌单
			}
		},
		computed: {
		  // 计算当前表格中的数据
		  data () {
		    return this.albumDatas.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
		  }
		},
		methods: {
			// 保存滚动值，这是兼容的写法
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				this.scrollTop >= 100 ? this.isShowMenu = false : this.isShowMenu = true
			},
			handleCurrentChange (val) {
			  this.currentPage = val
			},
			handleChangeView: function (name) {
			  this.activeName = name
			  this.albumDatas = []
			  if (name === '全部') {
			    this.albumDatas=[{name: '人脸对比',type: '1-1',img:'人脸1.png'},
										{name: '认证宝',type: '1-2',img:'公安1.png'},
										{name: '身份证OCR识别',type: '1-3',img:'公安2.png'},
										{name: '全网手机二要素验证',type: '2-1',img:'手机1.png'},
										{name: '全网手机三要素验证',type: '2-2',img:'手机2.png'},
										{name: '全网手机状态验证',type: '2-3',img:'运1.png'},
										{name: '银行二要素验证',type: '3-1',img:'银行1.png'},
										{name: '银行三要素验证',type: '3-2',img:'银行2.png'},
										{name: '银行四要素验证',type: '3-3',img:'银行3.png'},
										{name: '道路运输从业人员资格证核验V3',type: '4-1',img:'交通1.png'},
										{name: '道路运输许可证核验V2',type: '4-2',img:'交通2.png'},
										{name: '企业道路运输经营许可证核验V2',type: '4-3',img:'交通6.png'},
										{name: '车辆品牌型号查验全网手机状态验证V3',type: '4-4',img:'交通4.png'},
										{name: '全国车辆配置查验V2',type: '4-5',img:'交通5.png'},
										{name: '全国车辆上险查验V3',type: '4-6',img:'交通3.png'},
										{name: '高速货车月过路费评估',type: '4-7',img:'支付1.png'},
										{name: '高速车辆微信支付次数评估',type: '4-8',img:'支付3.png'},
										{name: '高速车辆支付宝支付次数评估',type: '4-9',img:'支付4.png'},
										{name: '企业四要素验证V2',type: '5-1',img:'企1.png'},
										{name: '企业四要素验证',type: '5-2',img:'企2.png'},
										{name: '企业三要素核验',type: '5-3',img:'企4.png'},
										{name: '企业失信被执行人失信详情查验',type: '5-4',img:'企3.png'},
										{name: '企业红黑名单核验',type: '5-5',img:'企13.png'},
										{name: '企业信息数量查验',type: '5-6',img:'企5.png'},
										{name: '企业信息综合评估',type: '5-7',img:'企6.png'},
										{name: '企业经营凭证核验',type: '5-8',img:'企11.png'},
										{name: '企业基础信息核验',type: '5-9',img:'企10.png'},]
			  } else if(name === '云上贵州数据资源'){
					this.albumDatas=[{name: '人脸对比',type: '1-1',img:'人脸1.png'},
													{name: '认证宝',type: '1-2',img:'公安1.png'},
													{name: '身份证OCR识别',type: '1-3',img:'公安2.png'},]
			  }else if(name === '水电气等数据'){
					this.albumDatas=[{name: '全网手机二要素验证',type: '2-1',img:'手机1.png'},
													{name: '全网手机三要素验证',type: '2-2',img:'手机2.png'},
													{name: '全网手机状态验证',type: '2-3',img:'运1.png'},]
			  }else if(name === '银联金融信用数据'){
					this.albumDatas=[{name: '银行二要素验证',type: '3-1',img:'银行1.png'},
													{name: '银行三要素验证',type: '3-2',img:'银行2.png'},
													{name: '银行四要素验证',type: '3-3',img:'银行3.png'},]
			  }else if(name === '空间地理信息数据'){
					this.albumDatas=[{name: '道路运输从业人员资格证核验V3',type: '4-1',img:'交通1.png'},
													{name: '道路运输许可证核验V2',type: '4-2',img:'交通2.png'},
													{name: '企业道路运输经营许可证核验V2',type: '4-3',img:'交通6.png'},
													{name: '车辆品牌型号查验全网手机状态验证V3',type: '4-4',img:'交通4.png'},
													{name: '全国车辆配置查验V2',type: '4-5',img:'交通5.png'},
													{name: '全国车辆上险查验V3',type: '4-6',img:'交通3.png'},
													{name: '高速货车月过路费评估',type: '4-7',img:'支付1.png'},
													{name: '高速车辆微信支付次数评估',type: '4-8',img:'支付3.png'},
													{name: '高速车辆支付宝支付次数评估',type: '4-9',img:'支付4.png'},]
			  }else{
					this.albumDatas=[{name: '企业四要素验证V2',type: '5-1',img:'企1.png'},
													{name: '企业四要素验证',type: '5-2',img:'企2.png'},
													{name: '企业三要素核验',type: '5-3',img:'企4.png'},
													{name: '企业失信被执行人失信详情查验',type: '5-4',img:'企3.png'},
													{name: '企业红黑名单核验',type: '5-5',img:'企13.png'},
													{name: '企业信息数量查验',type: '5-6',img:'企5.png'},
													{name: '企业信息综合评估',type: '5-7',img:'企6.png'},
													{name: '企业经营凭证核验',type: '5-8',img:'企11.png'},
													{name: '企业基础信息核验',type: '5-9',img:'企10.png'},]	
				}
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true)
			this.handleChangeView('全部')
		},
		destroyed() {
			// 离开该页面需要移除这个监听的事件，不然会报错
			window.removeEventListener('scroll', this.handleScroll)
		}
  }
</script>

<style scoped="scoped">
	.active{
		margin-bottom: 100px;
	}
	.center {
	  margin-top: 15px;
	/*  margin-left: 200px;
		margin-right: 200px; */
	}
	#search {
	  /* background-color: #0e56ff; */
	  border-radius: 0%;
	}
	.search-title {
	  color: #fffbfb;
	  font-size: 15px;
	  margin-bottom: 5px;
	}
	#search-box {
	  width: 555px;
	  height: 300px;
	  margin-top: 0px;
	  padding-bottom: 20px;
	}
</style>

<style lang="scss" scoped src='./css/api-list.scss'>
</style>
