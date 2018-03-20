<?php

// Write a simple class with a constructor
// Add methods and magic methods

class BankAccount
{
    /**
     * @var int
     */
    private $name;

    /**
     * @var int
     */
    private $balance;

    public function __construct(string $name, int $balance = 100)
    {
        $this->name = $name;
        $this->balance = $balance;

        echo sprintf('%s for %s initialized. Balance %u.', self::class, $this->name, $this->balance) . PHP_EOL;
    }

    public function deposit(int $amount): BankAccount
    {
        $this->balance += $amount;

        echo sprintf('%u deposited.', $amount) . PHP_EOL;

        return $this;
    }

    public function withdraw(int $amount): BankAccount
    {
        $this->balance -= $amount;

        echo sprintf('%u withdrawn.', $amount) . PHP_EOL;

        return $this;
    }

    public function __toString(): string
    {
        return sprintf('%s of %s. Balance %u.', self::class, $this->name, $this->balance) . PHP_EOL . PHP_EOL;
    }
}

ob_start();

echo (new BankAccount('Alex', 100))->withdraw(20);
echo (new BankAccount('Bob', 80))->deposit(20);
echo (new BankAccount('John', 70))->withdraw(50)->deposit(10)->deposit(30);
echo (new BankAccount('Ash', 70))->deposit(20)->deposit(10);

echo nl2br(ob_get_clean());