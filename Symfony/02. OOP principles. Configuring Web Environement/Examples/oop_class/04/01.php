<?php

// Autoloader simple

ob_start();

function asd($class_name) {
    echo 'Trying to autoload ' . $class_name . PHP_EOL;
    require $class_name . '.php';
}

spl_autoload_register('asd');

new Red();
new Green();
new Blue();

echo nl2br(ob_get_clean());