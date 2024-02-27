class Key {
    private signature: number = Math.random();
  
    getSignature(): number {
      return this.signature;
    }
  }
  
 class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
abstract class House {
    protected door: boolean = false;
    protected key: Key;
    private tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person entered the house.');
      } else {
        console.log('The door is closed. Person cannot enter.');
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('Invalid key. Cannot open the door.');
      }
    }
  }

  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
