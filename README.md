
Скрипт обработки нажатия на amazon dash button и заказа воды для кулера с сайта 565600.ru 


Прочитай ман по node-dash-button https://www.npmjs.com/package/node-dash-button
Обрати внимание что ему нужен libcap для "прослушки" wi-fi.
<code>
# debian ubuntu
sudo apt-get install libpcap-dev

# archlinux
yaourt libpcap #dev или devel там нет, просто libpcap
</code>

Если что-то пошло не так с npm install попробуй самостоятельно
<code>
npm install socketwatcher
npm install --save node-dash-button
</code>

Проблемы могут возникать с пакетом socketwatcher

