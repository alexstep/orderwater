# 
# install script for Archlinux 
# 
clear
echo '>> install python2 libpcap nodejs'
sleep 3
sudo pacman -S python2
sudo pacman -S nodejs
sudo pacman -S libpcap


clear
echo '>> update npm and node-gyp'
sleep 2
sudo npm install -g npm
sudo npm install -g node-gyp

clear
echo '>> install node_modules for this package "npm install" '
sleep 3
npm install 

clear
echo '>>'
echo '>> Install Complete! (Ctrl+C to exit)'
echo '>>'
echo ''
echo ' Change your buttons actions in buttons.js '
echo ' and run sudo node server.js '
echo ''

echo '>> Find button mac-address'
echo ''
sleep 1
sudo node node_modules/node-dash-button/bin/findbutton