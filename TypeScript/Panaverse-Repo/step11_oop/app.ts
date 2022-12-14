class Data {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
};

const show = new Data("Learning OOP In TypeScript");
console.log(show.name);

// ============= Abstraction ============= //

abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, speed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }

    public abstract damagePerSecond(): number;
}

class Goblin extends Character {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): number {
        return this.damage * this.attackSpeed;
    }
}

const abstractData = new Goblin("Martin", 89, 78);
console.log(abstractData.name);
console.log(abstractData.damagePerSecond());

// ============= Encapsulation ============= //

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}

// ============= Inheritance ============= //

class User {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log('Says something ...');
    }
}

class Orc extends User {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}

// ============= Polymorphism ============= //

class Username {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log('Says something ...');
    }

    public attack(): void {
        console.log(`Attacks his target with his fists.`);
    }
}

class id extends Username {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public talk(): void {
        console.log('Says something but in orcish ...');
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}