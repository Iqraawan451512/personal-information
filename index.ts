#!/usr/bin/env node
import inquirer from"inquirer"
let biodata:any =[];
function forPermission(){
    inquirer.prompt(
        [
        {
            name:"permission",
            type:"confirm",
            message:"Welcome to my application! Are you happy to share your information with us?",
        }
    ]).then((answer)=>{
if(answer.permission){
    mydata()

}
else{
    console.log("thanks for your considering..  GoodBye !");
}
   });
};

function mydata(){ 
 inquirer.prompt(
    [
        {
            name:"myName",
            type:"input",
            message:"what is your name ?, write in a sentance \n :"
        },
        {
            name:"age",
            type:"number",
            message:"what is your age .?\n"
        },
        { 
            name:"desinition",
            type:"input",
            message:"Where are you from .? \n",
        },
        {
            name:"status",
            type:"input",
            message:" Are you married or single .? \n"
        },
        {
            name:"qualification",
            type:"input",
            message:"last degree that you got .?\n"
        },
        {
           name :"aboutJob",
           type :"input",
           message:"Are you working or unemployed?\n",
        },
        {
            name:"job",
            type:"input",
            message:"Your job designation .?\n"
        },
        {
            name:"satisfaction",
            type:"input",
            message:"are you satisfy with your job .?\n",
        },
        {
          name:"addmore",
          type:"input",
          message:"If you want to tell us more about yourself .? you can .\n",
        }, 
        
       ]).then(( answer) =>{
        let data = Object.values(answer);
        biodata.push(data)
        console.log(biodata);

       });  
}

forPermission();



      