Скрипт обработки нажатия на amazon dash button и заказа воды для кулера с сайта iceberg-aqua.ru 

###Подробности в статье: http://geektimes.ru/post/269008/


Обратите внимание что модулю <a href="https://www.npmjs.com/package/node-dash-button">node-dash-button</a> нужен libcap для "прослушки" wi-fi.

<code>
sudo apt-get install libpcap-dev
</code>

server.js нужно запускать с правами суперпользователя.



Если что-то пошло не так с npm install попробуй самостоятельно

<code>
npm install socketwatcher && npm install --save node-dash-button
</code>

Проблемы могут возникать с пакетом socketwatcher.



Так же стоит обновить npm и node-gyp

<code>
sudo npm install -g npm && sudo npm install -g node-gyp
</code>

