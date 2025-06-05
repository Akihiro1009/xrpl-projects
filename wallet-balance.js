const {Client, isValidSecret} = require("xrpl");
const client = new Client("wss://s.altnet.rippletest.net:51233/");

const address = "rrnx8wzd7fR9q5RYL6MRKB1gnHEiEX6dBc" //address generated from xrpl.org
const address2 = "rHaPvrQ1QAhZ1RuvXwQQ23Bdk9sNVtcTUi" // address generated from console

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