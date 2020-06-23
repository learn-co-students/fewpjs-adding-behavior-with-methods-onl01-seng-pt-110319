// Your code here
/*

For each class, create the method speak.
    For an instance of Bird, speak returns conditional output. If the instance of Bird is male, speak returns "It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".
*/
class Cat{
  constructor(name, sex){
  this.name = name;
  this.sex = sex;
  }
  speak(){
    return `${this.name} says meow!`;
  }
}

class Dog{
  constructor(name, sex){
  this.name = name;
  this.sex = sex;
  }
  speak(){
    return `${this.name} says woof!`;
  }
}
class Bird{
  constructor(name, sex){
  this.name = name;
  this.sex = sex;
  }
  speak(){
    /* If the instance of Bird is male, speak returns "It's me! name, the parrot!". If it is not male, speak returns "name says squawk!".*/
    return ``;
  }
  
}