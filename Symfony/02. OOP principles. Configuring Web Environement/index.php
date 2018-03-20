<?php
declare(strict_types=1);

$a = '4x^2 + 3x^2 + 3x + 7x - 8 -10 = 0';
$a = '3x + 4x^2 = 4';
$a = '3x + 2x =  + 4 - 4x^2';
$a = '3x = 4';

echo Solver::resolve($a);

$a = '4x^2 + 3x - 8 = 0';
$parts = explode('=', $a);
$parts[0];
$parts[1];

abstract class Polynominal {
    const TYPE_ONE = 1;
    const TYPE_TWO = 2;
    const TYPE_THREE = 3;

    public $number = -2;

    public function __construct(string $part = '4x^2')
    {
    }

    public function combine(Polynominal $other)
    {

    }

    public function switch()
    {
        $this->number *= -1;
    }
}






