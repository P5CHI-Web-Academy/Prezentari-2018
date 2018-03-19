<?php

// Visibility and Inheritance

class AClass
{
    public $public = 'public';

    private $private = 'private';

    protected $protected = 'protected';

    function test()
    {
        echo 'Base class' . PHP_EOL;

        echo $this->public ?? 'N/A';
        echo PHP_EOL;

        echo $this->private ?? 'N/A';
        echo PHP_EOL;

        echo $this->protected ?? 'N/A';
        echo PHP_EOL;
    }
}

class BClass extends AClass
{
    function test()
    {
        echo 'Child class' . PHP_EOL;

        echo $this->public ?? 'N/A';
        echo PHP_EOL;

        echo $this->private ?? 'N/A';
        echo PHP_EOL;

        echo $this->protected ?? 'N/A';
        echo PHP_EOL;
    }
}

ob_start();

$aClass = new AClass();
$aClass->test();
echo PHP_EOL;

$bClass = new BClass();
$bClass->test();
echo PHP_EOL;

echo 'Outside of class' . PHP_EOL;

echo $aClass->public ?? 'N/A';
echo PHP_EOL;

echo $aClass->private ?? 'N/A';
echo PHP_EOL;

echo $aClass->protected ?? 'N/A';
echo PHP_EOL;
echo PHP_EOL;

echo nl2br(ob_get_clean());