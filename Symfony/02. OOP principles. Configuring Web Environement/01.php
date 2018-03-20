<?php

// Write a simple class with a constructor

class BankAccount
{
    public function __construct()
    {
        echo self::class . ' created.' . PHP_EOL;
    }
}

ob_start();

$accountFirst = new BankAccount();
$accountFirst = new BankAccount();
$accountFirst = new BankAccount();

echo nl2br(ob_get_clean());