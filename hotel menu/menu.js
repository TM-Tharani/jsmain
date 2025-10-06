function hotelmenu(){
    try{
    let name=prompt("Enter your name:");   

    if(name){
    let order=confirm("Hello! " + name + " Do you want to order food?");

        if(order){
        let menu={
        1: { name: "Pizza", price: 150},
        2: { name: "Burger", price: 100},
        3: { name: "Sandwich", price: 80},
        4: { name: "Biriyani", price: 150},
        5: { name: "Pasta", price:100}
    };
    
    let choice= prompt("Menu:\n1. Pizza ($150)\n2. Burger ($100)\n3. Sandwich ($80)\n4. Biriyani ($150)\n5. Pasta ($100)\n Enter your choice (1-5):");
    if(choice>0 && choice<6){
    let dish;
    switch(choice){
    case "1":
        dish="Pizza";
        alert("You ordered Pizza");
        break;

    case "2":
        dish="Burger";
        alert("You ordered Burger");
        break;

    case "3":
        dish="Sandwich";
        alert("You ordered Sandwich");
        break;

    case "4":
        dish="Biriyani";
        alert("You ordered Biriyani");
        break;

    case "5":
        dish="Pasta";
        alert("You ordered Pasta");
        break;

    default:
        alert("Invalid choice!");
    }
    let qty=prompt("Enter the quantity:");
    let quantity=parseInt(qty);

        if(!(isNaN(quantity)||quantity<1)){

        let total;
        switch(dish){
            case "Pizza":
                total=quantity*150;
                break;

            case "Burger":
                total=quantity*100;
                break;

            case "Sandwich":
                total=quantity*80;
                break;

            case "Biriyani":
                total=quantity*150;
                break;

            case "Pasta":
                total=quantity*100;
                break;

            default:
                total=0;
        }
        let prepare=new Promise((resolve,reject)=>{
            alert("Your order is being prepared...");
            setTimeout(()=>{
                if(total>0){
                    resolve("Order ready!");
                }
                else{
                    reject("Error calculating bill!");
                }
            },2000);
        });

        prepare.then((message)=>{
            alert(message);
            alert("You ordered " + quantity + " " + dish +".Total = $" + total);
            alert("Thank You");
        })
        .catch((errorMsg)=>{
            alert(errorMsg);
            alert("Error calculating bill!");
        });
        }
        else{
        alert("Invalid quantity");
        }
        }
    else{
    alert("Invalid choice");
    }
    }
    else{
    alert("Goodbye! See you next time!");
    }
    }
    else{
    alert("Name not entered. Exiting...");
    }
    }
    catch(err){
    alert("Something went wrong:" + err);
    }
}
hotelmenu();