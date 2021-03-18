/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1600658168227_3352';

	// add your middleware config here
	config.middleware = [];

	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true,
		}
	}


	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	//数据库
	config.mysql = {
		client: {
			host: "localhost", //主机名地址
			user: "root", //用户名
			password: "root", //密码
			port: 3306, //端口号
			database: "yunstore" //使用的数据库
		}
	}

	//跨域
	config.cors = {
		origin: 'http://127.0.0.1:8080',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
		credentials: true //后端会给去前端返回缓存数据包  告诉浏览器  去做缓存
	}
	//安全问题
	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true,
		}
	}
	//文件传输
	config.multipart = {
		mode: 'file',
	};
	//缓存
	config.session = {
		key: 'YUNCHENG',
		maxAge: 1000 * 3600 * 24,
		httpOnly: true,
		encrypt: true
	}

	return {
		...config,
		...userConfig,
	};
};
