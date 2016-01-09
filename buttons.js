/* 
 * Кнопки и их действия
 *	
 *	Ключ - mac-адрес кнопки 
 *		чтобы узать запускаем sudo node node_modules/node-dash-button/bin/findbutton 
 *		и жмём на кнопку
 *		ну или можно просто в списке девайсов подключенных wi-fi на роутере посмотреть 
 *
 *	action - функция которая будет вызвана при нажатии	
 */

buttons = {
	
	// "Заказ воды", amazon elements 
	'74:75:48:09:6d:8c': {
		action: function(){
			console.log('Нажата кнопка "Купить воды"');

			// Проверяем время последнего нажатия
			if ( this.allreadyOrdered() ) {
				slack.message('Воду заказали '+moment(storage.getItem('last_push_time')).fromNow());
				return false;
			}
		
			// Отправляем заказ
			// см. water-shop.js
			waterShop.makeOrder(config.water.item.id, config.water.item.cnt, function(order){
				if (!order.status) {
					storage.setItem('last_push_time', 0);
					
					slack.message('Не получилось заказать воду...');
				
				} else {
					var msg = 'Купил попить '+
					'\n> <http://565600.ru/'+order.info.items['1'].link+'|'+order.info.items['1'].original_name+'>'+
					' '+order.info.items['1'].basket_quantity+' шт. по '+order.info.items['1'].price+' руб. '+
					'\n'+
					' :moneybag: *'+order.info.order_full_price+' руб.*'+
					'\n';
					
					slack.message(config.slack.channel, 'Кулер', msg);
				}
			});
		},

		// Проверка задержки с момента последнего нажатия
		allreadyOrdered: function(){
			var cur_time = new Date().getTime();
			var last_push_time = storage.getItem('last_push_time');
			
			if (typeof last_push_time === 'undefined') {
				last_push_time = 0;
			}

			if (cur_time-last_push_time < config.water.idle_time ) {
				return true;
			}

			storage.setItem('last_push_time', cur_time);
			
			return false;
		},
	},

	/* 
	 Другие кнопки

	'74:75:48:09:6d:81': {
		action: function(){
			
		}
	}
	...

	*/ 
};



