#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.italic.bold.overline.underline.yellowBright("=================================================================="));
console.log(chalk.italic.bold.magentaBright(                  "            $$$$$$     $$$$$$     $$$$$$$$    $$$$$$$$            "));
console.log(chalk.italic.bold.greenBright(                    "           $$    $$   $$    $$    $$     $$   $$                  "  ));
console.log(chalk.italic.bold.redBright(                      "           $$    $$   $$    $$    $$$$$$$$    $$$$$$$$            "  ));
console.log(chalk.italic.bold.yellowBright(                   "           $$    $$   $$    $$    $$                $$            "  ));
console.log(chalk.italic.bold.cyanBright(                     "            $$$$$$     $$$$$$     $$          $$$$$$$$            "));
console.log(chalk.italic.bold.overline.underline.yellowBright("=================================================================="));





class Student{
    name:string;
    constructor(n:string){
        this.name = n
    }
}

class Person{
    students:Student[] = []
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()
const programStart = async (persons:Person)=>{
    let exit = false;
    do{
    console.log("Welcome Teacher");
    const answer = await inquirer.prompt(
        {type:'list',
        message:"Can we help you?",
        name:"select",
        choices:["Self","student","Exit"]
        }
    )
    if (answer.select == "Exit"){
        exit = true;
    }
    if (answer.select == "Self"){
    console.log("Hello i am talking with me.");
    console.log("I am fine Thank You, My name ia Rabia Sohail");
    
    }else if (answer.select === "student"){
        const ans = await inquirer.prompt(
            {type:"input",
            name:"student",
            message:"Which student you want to talk?"
            }
        )
        const student = persons.students.find(val => val.name == ans.student)
        if (!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
        console.log(`Hello i am ${name} and i am fine Thank You......`)
        console.log(persons.students)
        };
        if (student){
            console.log(`Hello I am ${student.name} How are you Teacher?`)
        console.log(persons.students)
    }
}
}while(!exit);
};
programStart(persons)
