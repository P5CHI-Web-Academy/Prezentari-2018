<?php

// Autoloader advanced with static

class Autoloader
{
    public static function register()
    {
        spl_autoload_register(function ($class) {
            echo 'Trying to autoload A ' . $class . PHP_EOL;

            $file = $class;

            if (file_exists($file)) {
                require $file;
                return true;
            }

            echo 'No luck' . PHP_EOL;
            return false;
        });

        spl_autoload_register(function ($class) {
            echo 'Trying autoload B ' . $class . PHP_EOL;

            $file = $class . '.php';

            if (file_exists($file)) {
                require $file;
                return true;
            }

            echo 'No luck' . PHP_EOL;
            return false;
        });
    }
}

ob_start();
Autoloader::register();

new Blue();
new PinkBlue();

echo nl2br(ob_get_clean());