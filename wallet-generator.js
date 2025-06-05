const { Client, Wallet } = require("xrpl");

// Connect to Testnet node
const client = new Client("wss://s.altnet.rippletest.net:51233");

async function gen() {
    //Connect to Ledger
    await client.connect();
    console.log("connect complete!");

    //generate wallet
    const wallet = Wallet.generate();
    console.log("wallet generated!");
    console.log("- Address: ", wallet.classicAddress);
    console.log("- Seed: ", wallet.seed);

    //disconnect
    await client.disconnect();
    console.log("disconnected");
}

main()