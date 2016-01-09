/*
 * Отслеживание нажатий на кнопки 
 * Amazon Dash Button
 * man: https://www.npmjs.com/package/node-dash-button
 * 
 */

// Основная либа для прослушивания wifi
sniffer	= require('node-dash-button');	

// Инициализируем БД а-ля localStorage
storage = require('node-persist');
storage.initSync();		

// Для удобной работы с временем
moment  = require('moment'); 			
moment.locale('ru');

// Для отправки http-запросов
request = require('request');	


require('./config.js');			// Общие настройки
require('./slack.js');			// Отправка сообщений в slack
require('./water-shop.js');		// api к магазину и функция заказа воды
require('./buttons.js');		// События для кнопок


console.log(' Слушаем Wi-fi...\n');

// Object.keys(buttons) - массив mac адресов кнопок
sniffer( Object.keys(buttons) ).on("detected", function (catched_mac){
	console.log('Пойман mac-адрес: '+catched_mac+'\n');

	// Вызываем событие этой кнопки
	buttons[catched_mac].action(); 
});
