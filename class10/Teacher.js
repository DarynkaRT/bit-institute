class Teacher extends person{
 constructor(
     firsName,
     LastName,
     Age,
     gender,
     interest,
     groupDirector,
     title,
     salary,
     classes,
     prefix
     ){
     super(
    firsName,
    LastName,
    age,
    gender,
    interest);
     this.groupDirector = groupDirector;
     this.title = title;
     this.salary = salary;
     this.classes = classes;
     this.prefix = prefix;
 };
 greetingAsTeacher(){
     return "hello, my name is" + this.prefix + "" +this.name + "and I teacher" + this.classes[0]
 }
}