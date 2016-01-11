Скрипт обработки нажатия на amazon dash button и заказа воды для кулера с сайта iceberg-aqua.ru 


Прочитай ман по node-dash-button https://www.npmjs.com/package/node-dash-button

Обрати внимание что ему нужен libcap для "прослушки" wi-fi.
<code>
sudo apt-get install libpcap-dev
</code>

server.js нужно запускать с правами суперпользователя.


Если что-то пошло не так с npm install попробуй самостоятельно
<code>
npm install socketwatcher
npm install --save node-dash-button
</code>

Проблемы могут возникать с пакетом socketwatcher.



