const { Client, Wallet } = require("xrpl");
const client = new Client("wss://s.altnet.rippletest.net:51233");

const faucetSeed = "sEdTiuwmticktP896jxbXdHoAwQ76zd";
const destination = "rHaPvrQ1QAhZ1RuvXwQQ23Bdk9sNVtcTUi";

async function transaction(){
    await client.connect();
    console.log("connect complete!");

    //transaction
    const sender = Wallet.fromSeed(faucetSeed); //initialize senderSeed
    
    try{
        const tx = {
            TransactionType: "Payment",
            Account: sender.classicAddress,
            Destination: destination,
            Amount: "1000000" //1xrp 
        };

        //トランザクションの自動補完・署名・送信
        const prepared = await client.autofill(tx);
        const signed = sender.sign(prepared);
        const result1 = await client.submitAndWait(signed.tx_blob);
    
        //result
        console.log("Transaction result: ", result1.result.meta.TransactionResult);

    } catch (error){
        console.log(error.message);
    }
    
    //disconnect
    await client.disconnect();
    console.log("disconnected");

}
transaction();