<template>
	<div class="news">
		<advantage-item class="animate__animated" :class="{'animate__swing ' : scrollTop > 1700 }">
			<!-- <div slot="header-title">Latest News</div> -->
			<div slot="title-max">新闻动态</div>
			<!-- <div slot="text">
				测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
			</div> -->
		</advantage-item>

		<div class="transparent animate__animated" :class="{'animate__fadeInUp ' : scrollTop > 1800 }">
			<!-- 轮播 -->
			<div class="news-media">
				<el-carousel class="news-media-carousel">
					<el-carousel-item>
						<img src="~assets/img/image-01.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="~assets/img/image-02.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="~assets/img/image-03.jpg" />
					</el-carousel-item>
					<el-carousel-item>
						<img src="~assets/img/image-04.jpg" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<!-- 列表 -->
			<div class="news-list">
				<span class="news-list-title">最新动态</span>
				<!-- 列表组件 -->
				<div class="news-list-item">
					<news-item v-for=" (item,index) of news" :key="index">
						<div slot="date">
							<i class="el-icon-alarm-clock" /> {{item.date}}
						</div>
						<!-- <div slot="message">
							<i class="el-icon-chat-line-round"></i> 3条评论
						</div> -->
						<div slot="title">
							<a :href="item.link">{{item.title}}</a></div>
						<div slot="text">
							{{item.des}}
						</div>
					</news-item>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import AdvantageItem from './AdvantageItem.vue'
	import NewsItem from './NewsItem.vue'

	export default {
		name: "News",
		components: {
			AdvantageItem,
			NewsItem
		},
		data() {
			return {
				news: [
					{id:1,title:"全省大数据战略行动推进大会召开",date:"2021/12/30",des:"全省大数据战略行动推进大会在贵阳召开，省大数据发展管理局对近年来全省大数据战略行动推进情况做了通报",link:'https://baijiahao.baidu.com/s?id=1720540260657090387&wfr=spider&for=pc'},
					{id:2,title:"'大数据'助力疫情防控",date:"2021/12/30",des:"大数据分析在全国各地的疫情防控中发挥了重要作用",link:'https://baijiahao.baidu.com/s?id=1720556872428102438&wfr=spider&for=pc'},
					{id:3,title:"打造贵阳大数据科创城成为全省大数据产业发展的核心载体",date:"2021/12/30",des:"以“坚持数字活市 奋力在实施数字经济战略上抢新机”为主题的新闻发布会在贵阳召开",link:'https://www.163.com/dy/article/GSHPP9KK0511A72B.html'},
					{id:4,title:"“坚持数字活市 奋力在实施数字经济战略上抢新机”新闻发布会在筑召开",date:"2021/12/30",des:"贵阳市“强省会”系列主题新闻发布会——“坚持数字活市 奋力在实施数字经济战略上抢新机”数字经济主题新闻发布会在市政府新闻发布厅召开",link:'https://www.163.com/dy/article/GSHPPB0K0511A72B.html'},
					{id:5,title:"向大数据要战斗力",date:"2021/12/29",des:"'数据革命'赋能法律监督更高层次发展",link:'https://www.thepaper.cn/newsDetail_forward_16063016'},
				],
			}
		},
		props: {
			scrollTop: {
				type: Number,
				default: 0
			},
		}
	}
</script>

<style scoped="scoped">
	
	@media screen and (max-width:1000px) {
		.news-media{
			width: 100%;
			max-height: 150px;
			padding-top: 30px;
			padding-bottom: 15px;
		}
		.news-media-carousel{
			overflow: hidden ;
			border-radius: 30px !important;
			height: 220px;
		}
		.news-list {
			padding-top: 125px;
		}
	}
	
	@media screen and (min-width:1000px) {
		.transparent {
			display: flex;
		}
		.news-media {
			width: 50%;
			max-height: 600px;
			padding-top: 30px;
			flex: 3;
		}
		.news-media-carousel {
			border-radius: 30px !important;
			overflow: hidden;
		}
		.news-list {
			padding-top: 30px;
		}
	}

	.news {
		width: 90%;
		padding: 50px 0px;
		max-width: 1920px;
		margin: auto;
		min-height: 500px;
	}

	.news-media-carousel img {
		min-width: 100%;
		min-height: 100%;
	}

	.news-list {
		padding-left: 15px;
		flex: 7;
	}

	.news-list-item {
		max-height: 280px;
		overflow: hidden;
		overflow: scroll;
		overflow-x: hidden;
	}
	.news-list-item::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		background-color: var(--color-background);
	}
	.news-list-item::-webkit-scrollbar {
		width: 8px;
	}

	.news-list-title {
		color: var(--color-background) !important;
		text-align: center;
		font-weight: 600;
		font-size: 1.05rem;
		line-height: 1.35;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}
</style>
