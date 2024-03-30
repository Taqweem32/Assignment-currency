var choice ;
do {
 choice = +prompt("Enter Your choice\n (1) Convert PKR to USD\n (2) Convert USD to PKR\n (3) For Exit")
const usdToPkr =277;
const pkrToUsd = 0.0036 ;
var amount;
var convertedAmount

   if (choice === 1){
    amount = +prompt("Enter the amount to convert ");
     convertedAmount = amount * pkrToUsd
     alert(amount +" PKR is equal to " + convertedAmount.toFixed(2) + " USD");
   }
   else if (choice === 2){
    amount = +prompt("Enter the amount to convert ");
    convertedAmount = amount *usdToPkr;
    alert(amount+" USD is equl to "+convertedAmount+" PKR")
   }
   else if( choice !=3){
    alert("invalid choice plz enter 1,2 or3");
   }
} while (choice !== 3);