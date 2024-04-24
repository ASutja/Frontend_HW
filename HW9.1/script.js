const company = {
    sales: [
        { name: 'Jhon', salary: 1000 }, 
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [ 
            { name: 'Jack', salary: 1300 } 
        ]
    }
};

function totalSales(company) {
    let totalSalary = 0;
    if(Array.isArray(company)) {
        for(let worker of company) {
            totalSalary += worker.salary;
        }
      }
    else if (typeof company === 'object') {
        for (let department in company){
            totalSalary += totalSales(company[department]);
        }
    }
    return totalSalary;
}

const total = totalSales(company);
console.log(total);