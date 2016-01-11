/* 
 * Типа API для сайта http://565600.ru/ 
 *
 * Процесс покупки
 *	1. Заходим на сайт получаем куки
 *
 *	2. Добавляем товар с id=1 2-штуки
 *		curl 'http://565600.ru/api/plugin/pc_shop/cart/add/1/2' -H 'Pragma: no-cache' -H 'Origin: http://565600.ru' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4' -H 'X-Compress: null' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: *' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID_5715782451d38b0e432061932337f3b1=197e8faaf52be6577cf03a0ce951f4af; TrackJS=c2ccbe86-b64e-4e93-8823-e76841fb459a; _ym_uid=1452304548241223967; _ym_isad=1; _ga=GA1.2.1776094155.1452304550; _gat=1; _ym_visorc_21513511=w' -H 'Connection: keep-alive' -H 'Referer: http://565600.ru/' --data 'attributes[6]=2' --compressed
 *
 *	3. Сохранем заказ
 *		curl 'http://565600.ru/api/plugin/pc_shop/order/save/' -H 'Pragma: no-cache' -H 'Origin: http://565600.ru' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4' -H 'X-Compress: null' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, *; q=0.01' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID_5715782451d38b0e432061932337f3b1=197e8faaf52be6577cf03a0ce951f4af; TrackJS=c2ccbe86-b64e-4e93-8823-e76841fb459a; _ym_uid=1452304548241223967; _ym_isad=1; _ga=GA1.2.1776094155.1452304550; _ym_visorc_21513511=w' -H 'Connection: keep-alive' -H 'Referer: http://565600.ru/' --data 'pc_shop_coupon=' --compressed
 *
 *	4. Отправляем заказ
 *		curl 'http://565600.ru/api/plugin/pc_shop/order/create/' -H 'Pragma: no-cache' -H 'Origin: http://565600.ru' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4' -H 'X-Compress: null' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, *; q=0.01' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: PHPSESSID_5715782451d38b0e432061932337f3b1=197e8faaf52be6577cf03a0ce951f4af; TrackJS=c2ccbe86-b64e-4e93-8823-e76841fb459a; _ym_uid=1452304548241223967; _ym_isad=1; _ga=GA1.2.1776094155.1452304550; _ym_visorc_21513511=w' -H 'Connection: keep-alive' -H 'Referer: http://565600.ru/' --data 'recipient=%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5&address=%D0%93%D0%BE%D1%80%D0%BE%D0%B4%3A+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D0%A3%D0%BB%3A+%D1%82%D0%B5%D1%81%D1%82%2C+%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81%3A+-%2C+%D0%94%D0%BE%D0%BC%3A+666%2C+%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%3A+13%2C+%D0%AD%D1%82%D0%B0%D0%B6%3A+2%2C+%D0%9A%D0%BE%D0%B4%3A+-&phone=8999999999&email=test%40test.com&comment=%D0%9F%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%82%D0%BE%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D1%84%D0%BE%D1%80%D0%BC%D1%8B+%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0&deliveryDateTime=09.01.2016+%D0%B2+%D1%82%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B4%D0%BD%D1%8F' --compressed
 */

waterShop = {
	site_url: 'http://iceberg-aqua.ru/',
	api_url: 'http://iceberg-aqua.ru/api/plugin/pc_shop/',

	// Отправка заказа
	makeOrder: function(item_id, cnt, callbackFunc){
		var _this = this;
		
		// Запрос к главной странице сайта чтобы получить куки
		// PHPSEESID нужна 
		request.get({ uri: this.site_url}, function(err, res, body) {
		
		// Сохраняем полученнные в ответ куки
		_this.saveCookies(res.headers['set-cookie']); 
		

		// Добавляем товар 
		_this.callMethod('cart/add/'+item_id+'/'+cnt, {}, function(add_item){

		// Сохранем заказ
		_this.callMethod('order/save/', {}, function(order){

		// Отправляем заказ
		_this.callMethod('order/create/', config.water.delivery, function(result){
			callbackFunc({ status: result.success, info: order });
		});

		}); }); });
	},


	// Обращение к api
	callMethod: function(method, params, callbackFunc){
		var _this = this;

		request.post({ 
			uri: _this.api_url+method,
			headers: {
 				Cookie: _this.getCookiesStr(),
			},
			form: params,
		}, function(err, res, body) {
			// Сохраняем полученнные в ответ куки
			_this.saveCookies(res.headers['set-cookie']); 
			
			// Возвращем ответ  
			callbackFunc( JSON.parse(body) );
		});
	},

	// Работа с cookie
	cookies: {},
	getCookiesStr: function(){
		var cookies_str = '';
		for(var key in  this.cookies){
			cookies_str += key+'='+this.cookies[key]+'; ';
		}
		return cookies_str;
	},
	saveCookies: function(cookies){
		for(var k in cookies){
			var с = cookies[k].split(';')[0].split('=');
			this.cookies[с[0]] = с[1];
		}
	},
};
