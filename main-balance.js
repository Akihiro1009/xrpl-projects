const {Client, isValidSecret} = require("xrpl");
const client = new Client("wss://xrplcluster.com");

const address = ""

async function bal(){
    //Connect to Ledger
    await client.connect();
    console.log("connect complete!");
    
    //check ballance
    const balance = await client.getXrpBalance(address);
    console.log("- Address: ", address);
    console.log("- Balance: ", balance , "XRP");

    //disconnect
    await client.disconnect();
    console.log("disconnected")
}

bal();