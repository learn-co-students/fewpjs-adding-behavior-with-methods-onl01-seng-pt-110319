// Your code here
class Cat {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
}
speak(){
    return `${this.name} says meow!`
}
}

class Dog {
    constructor(name,sex){
        this.name = name;
        this.sex = sex; 
    }
    speak(){
    return `${this.name} says woof!` 
}
}

class Bird {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    speak() {
        let firstPhrase = `It's me! ${this.name}, the parrot!`;
        let secondPhrase = `${this.name} says squawk!`;
        return this.gender === 'male' ? firstPhrase : secondPhrase;
    }
}