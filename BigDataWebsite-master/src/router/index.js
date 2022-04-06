/*
 * @Author: he yan ying
 * @Date: 2022-01-10 11:28:13
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-01-17 16:22:48
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Introduction = () => import('views/introduction/Introduction')
const Product = () => import('views/product/Product')
const About = () => import('views/about/About')
const News = () => import('views/news/News')
const Join = () => import('views/join/Join')
const Requirement = () => import('views/requirement/Requirement')

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: "首页"
		}
	},
	{
		path: '/introduction',
		component: Introduction,
		meta: {
			title: "公司简介"
		}
	},
	{
		path: '/product',
		component: Product,
		meta: {
			title: "产品中心"
		},
	},
	{
		path: '/news',
		component: News,
		meta: {
			title: "新闻中心"
		},
	},
	{
		path: '/about',
		component: About,
		meta: {
			title: "关于我们"
		},
	},
	{
		path: '/join',
		component: Join,
		meta: {
			title: "加入我们"
		},
	},
  {
    path: '/requirement',
    component: Requirement,
    meta: {
      title: "需求发布"
    }
  },
]

const router = new VueRouter({
	routes,
	base:'/vue/',
	mode: 'hash'
})




export default router
