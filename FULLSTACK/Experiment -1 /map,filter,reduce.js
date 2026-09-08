// question - 1
const users = ["alice", "bob", "charlie"];
const result=users.map(obj=>obj.toUpperCase());
console.log(result);

// question - 2
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alex", age: 32 },
  { name: "Mia", age: 15 }];
const result=users.filter(obj=>obj.age>18);
const res1=result.map(obj=>obj.name);
console.log(res1);

// question - 3
const cart = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 }];
const result=cart.reduce((sum,i)=>sum+i.price,0);
console.log(result);

// question - 4
const people = [
  { first: "John", last: "Doe" },
  { first: "Anna", last: "Smith" }];
const result=people.map(obj=>obj.first +" "+ obj.last);
console.log(result);

// question - 5
const products = [
  { name: "iPhone 14", price: 1200, inStock: true },
  { name: "MacBook", price: 1800, inStock: false },
  { name: "AirPods", price: 250, inStock: true },
  { name: "iPad Pro", price: 1100, inStock: true }];
const result=products.filter(obj=>obj.price>1000 && obj.inStock);
const res1=result.map(obj=>obj.name);
console.log(res1);

// question - 6
const students = [
  { name: "Riya", score: 92 },
  { name: "Aman", score: 78 },
  { name: "Sneha", score: 88 },
  { name: "Karan", score: 65 },
  { name: "Priya", score: 95 }];
const result=students.filter(obj=>obj.score>80); 
const namess=result.map(obj=>obj.name);
console.log(namess);
res1=result.reduce((sum,i)=>sum+i.score,0)/result.length;
console.log(res1);

// question - 7 
const items = [
  { name: "Smartphone", price: 32000 },
  { name: "Charger", price: 1200 },
  { name: "Headphones", price: 4500 },
  { name: "Power Bank", price: 1800 }
];
const result=items.filter(obj=>obj.price>1500); 
const res=result.map(obj=>obj.price*(0.8));
const res1=res.reduce((sum,i)=>sum+i,0);
console.log(res1);

// question - 8
const products = [
  { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
  { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
  { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
]; 
const result=products.map(obj=>obj.brand +" "+obj.model); 
console.log(result);
const res1=products.reduce((sum,i)=>sum+(i.price*i.quantity),0);
console.log(res1);

// question - 9
const employees = [
  { name: "Vikram", department: "Engineering", salary: 1800000 },
  { name: "Neha", department: "Marketing", salary: 950000 },
  { name: "Arjun", department: "Engineering", salary: 1350000 },
  { name: "Pooja", department: "Engineering", salary: 980000 }
]; 
const result=employees.filter(obj=>obj.department === "Engineering"&& obj.salary>1200000);
const res1=result.map(obj=>obj.name);
console.log(res1);
const res2=result.reduce((sum,i)=>sum+i.salary,0); 
console.log(res2);

// question - 10
const tasks = [
  { title: "Database Migration", priority: "high", completed: true },
  { title: "UI Redesign", priority: "medium", completed: true },
  { title: "API Testing", priority: "high", completed: false },
  { title: "Security Audit", priority: "high", completed: true }
];
const res1=tasks.filter(obj=>obj.priority==="high"&&obj.completed);
const result=res1.map(obj=>obj.title).join(', '  );
console.log(result);

// quesstion - 11
const cart = [
  { name: "Monitor", price: 14500, inStock: true },
  { name: "Keyboard", price: 3200, inStock: false },
  { name: "Mouse", price: 1800, inStock: true },
  { name: "Webcam", price: 4200, inStock: true }
];
const res1=cart.filter(obj=>obj.inStock);
const result=res1.reduce((sum,i)=>sum+i.price*0.85,0);
console.log(result);

// question - 12
const users = [
  { name: "rahul", age: 19, active: true },
  { name: "simran", age: 24, active: true },
  { name: "aditya", age: 32, active: false },
  { name: "kavya", age: 22, active: true }
];
const res1=users.filter(obj=>obj.age>21&&obj.active).map(obj=>obj.name.toUpperCase());
console.log(res1,res1.length);

// question - 13
const players = [
  { name: "Rohit", score: 168 },
  { name: "Virat", score: 142 },
  { name: "Shubman", score: 185 },
  { name: "Ishan", score: 134 }
];
const res1=players.filter(obj=>obj.score>150);
const result=res1.map(obj => obj.name + " (" + obj.score + ")");
console.log(result);
const res2= res1.reduce((sum,i)=>sum+i.score,0);
console.log(res2);
