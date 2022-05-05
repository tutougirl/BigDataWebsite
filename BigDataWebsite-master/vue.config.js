/*
 * @Author: he yan ying
 * @Date: 2022-01-10 11:28:13
 * @LastEditors: he yan ying
 * @LastEditTime: 2022-01-17 21:26:01
 * @Description: 
 */
module.exports = {
	productionSourceMap: false,
	configureWebpack: {
		resolve: {
			alias: {
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