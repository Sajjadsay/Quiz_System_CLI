import inquirer from "inquirer";
import { questions } from "./questions.js";

type resulttype = {
    mynumber: number
}
let index : number = 0 ;
let score : number = 0 ;

for(let i=1;i<=10;i++){
    
    let result = await inquirer.prompt([
        {
            type : "list",
            name : "mychoice",
            message : questions[index],
            choices : ["a","b","c","d"]
        },
    ])

    if(index === 0){
        if(result.mychoice === "b"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'b'");
        }
    }
    if(index === 1){
        if(result.mychoice === "c"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'c'");
        }
    }
    if(index === 2){
        if(result.mychoice === "b"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'b'");
        }
    }
    if(index === 3){
        if(result.mychoice === "b"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'b'");
        }
    }
    if(index === 4){
        if(result.mychoice === "d"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'd'");
        }
    }
    if(index === 5){
        if(result.mychoice === "d"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'd'");
        }
    }
    if(index === 6){
        if(result.mychoice === "b"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'b'");
        }
    }
    if(index === 7){
        if(result.mychoice === "d"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'd'");
        }
    }
    if(index === 8){
        if(result.mychoice === "c"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'c'");
        }
    }
    if(index === 9){
        if(result.mychoice === "a"){
            console.log("Your answer is correct!");
            score ++;
        }
        else{
            console.log("Your answer is wrong!");
            console.log("The correct answer is 'a'");
        }
    }
    index ++;
    
}

console.log("Wait for just tow seconds,your result is ready now...");

setTimeout(() => {
    console.clear();
    if(score > 4){
        console.log("Congratulations***You are passed.");
        console.log("Your result is ",score*10,"%");
        console.log("Thanks for bieg here...");
    }
    else{
        console.log("You are failed!.");
        console.log("Your result is ",score*10,"%.");
        console.log("Try it better.Thanks for bieg here...");
    }
}, 2000);





