const {Client, isValidSecret} = require("xrpl");
const client = new Client("wss://s.altnet.rippletest.net:51233/");

const address1 = "rrnx8wzd7fR9q5RYL6MRKB1gnHEiEX6dBc" //address generated from xrpl.org
const address2 = "rHaPvrQ1QAhZ1RuvXwQQ23Bdk9sNVtcTUi" // address generated from console

async function checkBalance(address){
    try{
        const balance = await client.getXrpBalance(address);
        console.log("- Address: ", address);
        console.log("- Balance: ", balance);
    } catch (error){
        console.log(error.message);
    }
} 

async function main(){
    await client.connect();
    console.log("connect complete!");

    await checkBalance(address1);
    console.log('-----------------------------------------');
    await checkBalance(address2);

    await client.disconnect();
    console.log("Disconnected");
}

main();

/*
async function main1(){
    //Connect to Ledger
    await client.connect();
    console.log("connect complete!");
    
    //check ballance1
    try{
        const balance1 = await client.getXrpBalance(address1);
        console.log("- Address: ", address1);
        console.log("- Balance: ", balance1 , "XRP");
    } catch(error){
        console.log(error.message);
    }
    
    console.log("----------------------")

    //check ballance2
    try{
        const balance2 = await client.getXrpBalance(address2);
        console.log("- Address: ", address2);
        console.log("- Balance: ", balance2 , "XRP");
    } catch(error){
        console.log(error.message);
    }

    //disconnect
    await client.disconnect();
    console.log("disconnected");
}
*/