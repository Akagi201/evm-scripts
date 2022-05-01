import Web3 from 'web3';

/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
  development: 'http://localhost:9933',
  moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

const account_from = {
  privateKey:
    '13e755880a9cfda5417971a487aaef6ea4b5fc87ee3a4a47a20efe3ab846478a',
  address: '0xeE9926927648b4594fC8fcCE6fb6905eBbf5F040',
};
const addressTo = '0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac'; // Change addressTo

const main = async () => {
  console.log(
    `Attempting to send transaction from ${account_from.address} to ${addressTo}`,
  );

  // Sign Tx with PK
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      gas: 21000,
      to: addressTo,
      value: web3.utils.toWei('1', 'ether'),
    },
    account_from.privateKey,
  );

  // Send Tx and Wait for Receipt
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction,
  );
  console.log(
    `Transaction successful with hash: ${createReceipt.transactionHash}`,
  );
};

main()
  .then(() => {
    console.log("successfully exited");
    process.exit(0);
  })
  .catch(err => {
    console.log('error occur:', err);
    process.exit(1);
  })
