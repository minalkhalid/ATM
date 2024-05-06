import inquirer from "inquirer";

let myBalance = 5000;
let myPin =2345;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pin",
            type:"number",
        
        }

    ]
);
if (pinAnswer.pin === myPin){
    console.log("correct pin code!!!");

let operationAns = await inquirer.prompt(
    [
        {
            name:"account",
            message:"please select account type",
            type:"list",
            choices:["Current Account","Saving Account"],
    
        },
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withdraw","check balance","fast cash","cash deposite"],
    
        }
    ]
);
//   console.log(operationAns);
// withdraw
if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ]
        
    );

            // = , +=, -=
    if(myBalance >= amountAns.amount){
        myBalance -= amountAns.amount;
        console.log("transcation successfully done, your remaining balance is:"+ myBalance)
    }
    else{
        console.log("Insufficient Balance")
    }

    }
// check balance
else if (operationAns.operation === "check balance"){
    console.log("your balance is:" + myBalance)
   }
//fast cash
 else if (operationAns.operation === "fast cash"){
    let amountAns1 = await inquirer.prompt(
        [
            {
                name:"amount1",
                message:"please select amount",
                 type:"list",
                 choices:["1000","4000","6000"]
            }
        ]


    );
        // = , +=, -=
    if(myBalance >= amountAns1.amount1){
        myBalance -= amountAns1.amount1;
        console.log("transcation successfully done, your remaining balance is:"+ myBalance)
    }
    else{
        console.log("Insufficient Balance")
    }
    }
//Cash deposite
else if (operationAns.operation === "cash deposite"){
    let amountAns2 = await inquirer.prompt(
        [
            {
                name:"amount2",
                message:"please enter amount",
                 type:"number",
                 
            }
        ]

    );
    // = , +=,-=
    myBalance += amountAns2.amount2;
    console.log("your cash deposite successfully, your current balance is:"+ myBalance)
    }
}
else{
    console.log("Incorrect pin number");
}