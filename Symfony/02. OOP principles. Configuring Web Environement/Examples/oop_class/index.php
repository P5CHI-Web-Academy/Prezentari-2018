<?php
declare(strict_types=1);

class ClassA {

    /** @var string  */
    static public $a = 123;

    public function sayHello(string $say): string
    {
        return $say;
    }
}

$b = new ClassA();
var_dump(ClassA::$a);

echo $b->sayHello(123);

