// Ticket 1
let employees = ['John', 'Sarah', 'Eric'];
employees.push('Brad');
console.log(employees);
employees.pop();
console.log(employees);
employees.unshift('Brad');
console.log(employees);
let sarahIndex = employees.indexOf("Sarah");
console.log(sarahIndex);

// Ticket 2
let salaries = [35000, 45000, 55000, 70000, 90000];
let fin = salaries.filter(salaries => salaries > 50000);
console.log(fin);
let sql = salaries.map(salaries => salaries ** 2);
console.log(sql);
let low = salaries.find(salaries => salaries < 60000);
console.log(low);
let sales = [100, 200, 150, 300, 400];
let sum = sales.reduce((sum, item) => sum + item, 0);
console.log(sum);
let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
departments.forEach(department => {console.log(department)});

// Ticket 3
let inventory0 = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];
console.log(inventory0.slice(0,3));
console.log(inventory0.splice(2, 2));
let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor'];
inventory.splice(3, 0, 'Printer');
console.log(inventory);
let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];
let add = officeEquipment1.concat(officeEquipment2);
console.log(add);
let newSales = [500, 1000, 750, 2000, 1250];
newsales = newSales.sort((a, b) => b - a);
console.log(newsales);


// Ticket 4
let employee = {
firstName: "John",
lastName: "Doe",
position: " Scrum Master",
salary: 50000};

console.log(employee);

employee.position = 'Software Engineer';
console.log(employee);
employee.hiredate = new Date();
console.log(employee);
delete(employee.salary);
console.log(employee);

for (let property in employee) {
    console.log(employee[property]);
}

// Ticket 5
let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

let projectNames = projects.map(project => project.projectName);
console.log(projectNames);
let filteredProjects = projects.filter(project => project.status === 'in progress');
console.log(filteredProjects);
let sortedProjects = projects.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
console.log(sortedProjects);