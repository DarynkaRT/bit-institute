class Student extends Person{
    constructor(){
      super();
      this.grade = "";
      this.classes = {
        math: 0,
        language: 0,
        sciences: 0
      };
      this.studyType = "";
    }
  };