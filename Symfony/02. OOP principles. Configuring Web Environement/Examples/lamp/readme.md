# start docker
docker-compose run -p 8070:80 ubuntu

# update packages
sudo apt-get update

# install apache
sudo apt-get install apache2
yes|sudo apt-get install apache2
sudo apt-get install apache2 -y

# start apache
sudo service apache2 start

# install php and apache module
sudo apt-get install php libapache2-mod-php
php -v
php -r 'echo "\n\nYour PHP installation is working fine.\n\n\n";'

# restart apache
sudo service apache2 restart

# install mysql server
sudo apt-get install mysql-server

# start mysql
sudo service mysql start
sudo mysql -u root -p


