function User(name, age, adress) {
    this.name = name;
    this.age = age;
    this. adress = adress;   
    }

User.prototype.getInfo = function() {
    return {
        name: this.name,
        age: this.age,
        adress: this.adress
    }
}

const user = new User('Bob', 33, 'Edem');
console.log(user.getInfo());