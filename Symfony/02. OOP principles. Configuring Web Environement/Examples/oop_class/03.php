<?php

// Write a simple class with a constructor
// Add methods and magic methods
// Constants and Destructor

class BankAccount
{
    const CURRENCY_USD = 'USD';
    const CURRENCY_EUR = 'EUR';
    const CURRENCY_MDL = 'MDL';

    /**
     * @var int
     */
    private $name;

    /**
     * @var int
     */
    private $balance;

    /**
     * @var string
     */
    private $type = self::CURRENCY_EUR;

    public function __construct(string $name, int $balance = 100)
    {
        $this->name = $name;
        $this->balance = $balance;

        echo sprintf('%s for %s initialized. Balance %u %s.',
                self::class,
                $this->name,
                $this->balance,
                $this->type
            ) . PHP_EOL;
    }

    public function deposit(int $amount): BankAccount
    {
        $this->balance += $amount;

        echo sprintf('%u %s deposited.', $amount, $this->type) . PHP_EOL;

        return $this;
    }

    public function withdraw(int $amount): BankAccount
    {
        $this->balance -= $amount;

        echo sprintf('%u %s withdrawn.', $amount, $this->type) . PHP_EOL;

        return $this;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return BankAccount
     */
    public function setType(string $type): BankAccount
    {
        $this->type = $type;

        return $this;
    }

    public function __toString(): string
    {
        return var_dump($this);
    }

    public function __destruct()
    {
        echo 'Closing bank account.' . PHP_EOL;
    }
}

ob_start();

echo (new BankAccount('Alex', 100))->setType(BankAccount::CURRENCY_MDL)->withdraw(20)->deposit(50);

echo nl2br(ob_get_clean());