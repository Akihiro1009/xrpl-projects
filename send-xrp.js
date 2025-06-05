const { Client, Wallet } = require("xrpl");
const client = new Client("wss://s.altnet.rippletest.net:51233");

const faucetSeed = "sEdTiuwmticktP896jxbXdHoAwQ76zd";
const destination = "rHaPvrQ1QAhZ1RuvXwQQ23Bdk9sNVtcTUi";

async function transaction(){
    await client.connect();
    console.log("connect complete!")

    //transaction
    const sender = Wallet.fromSeed(faucetSeed) //initialize senderSeed
    
    const tx = { //what is this code for?
        TransactionType: "Payment",
        Account: sender.classicAddress, //what is an classicAddress?
        Destination: destination,
        Amount: "1000000" //1xrp 
    };

    //ここが署名？
    const prepared = await client.autofill(tx);
    const signed = sender.sign(prepared);
    const result = await clienet.sublitAndWait(signed.tx_blob);

    //result
    console.log("Transaction result: ", result.result.meta.TransactionResult);

    //disconnect
    await client.disconnect();
    console.log("disconnected")

}
transaction();