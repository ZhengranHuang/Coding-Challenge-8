//Task1:Create an Employee Class&&Task3:Create a Manager Class that Inherits from Employee
class Employee{
    constructor(name, salary, position, Department){
    this.name= name;
    this.salary = salary;
    this.position = position;
    this.department = department;
    }
getDetails(){
return`name${this.name},position${this.position},salary${this.salary}`
}
}

class Manager extends Employee{
constructor(name, salary, position, Department,bonus){
super(name, salary, position, Department,bonus);
this.bonus = bonus;
}
getDetails(){
return`name${this.name},position${this.position},salary${this.salary},bonus${this.bonus}`
}
}

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

//Task2:Create a Department Class
class Departemnt{
constructor(name){
this.name = name;
this.employees = [];
}

addEmployee(employee){
this.employees.push(employee);
}
getDepartmentSalary(){
return this.employees.reduce((total, employee) => total + employee.salary,0);
}

}
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

//Task4:Handle Bonuses for Managers
function calculateTotalSalaryWithBonus(){

}
