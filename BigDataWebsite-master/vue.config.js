/*
 * @Author: he yan ying
 * @Date: 2022-01-10 11:28:13
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-03-15 14:40:03
 * @Description: 
 */
module.exports = {
	productionSourceMap: false,
	configureWebpack: {
		resolve: {
			alias: {
				'src':'@',
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	},
	 publicPath: "./",
	 /*
	devServer: {
		host: "47.102.101.45",
		port: 80,
		https: false,
		open: true,
		proxy: {
			
		},
	} */
	
}