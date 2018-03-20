FROM php:7-fpm

RUN apt-get update \
    && apt-get install --no-install-recommends --no-install-suggests -y git \
        zlib1g-dev \
        mysql-client \
        libxml2-dev \
        libxslt-dev \
    && docker-php-ext-install -j$(nproc) zip \
        pdo_mysql \
        dom \
        xmlrpc \
        xsl \
    && rm -rf /var/lib/apt/lists/* \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY php.ini /usr/local/etc/php/

EXPOSE 80 9000
