class Person{
    constructor(firstName, lastName, age, gender, interest){
      this.name = [firstName, lastName];
      this.age = age;
      this.gender = gender;
      this.intests = interest;
    };
  
    bio(){
      return this.name[0] + " is " + this.age + " years old. They like" + this.intests;
    };
  
    greeting(){
      return "Hi i'm " + this.name;
    };
  };