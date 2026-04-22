import "./Exp3_3.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  speak() {
    return `${super.speak()} I'm studying ${this.major}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  speak() {
    return `${super.speak()} I teach ${this.subject}.`;
  }
}

function Exp3_3() {
  const p = new Person("Alex Johnson", 30);
  const s = new Student("Emma Watson", 20, "Computer Science");
  const t = new Teacher("James Wilson", 45, "Mathematics");

  return (
    <div>
      <h2>Person Class Hierarchy</h2>

      <div className="box">
        <h3>{p.name}</h3>
        <p>{p.speak()}</p>
      </div>

      <div className="box">
        <h3>{s.name}</h3>
        <p>{s.speak()}</p>
      </div>

      <div className="box">
        <h3>{t.name}</h3>
        <p>{t.speak()}</p>
      </div>
    </div>
  );
}

export default Exp3_3;