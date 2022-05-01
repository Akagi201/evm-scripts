import Web3 from 'web3';
import abiDecoder from 'abi-decoder';

/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
  development: 'http://localhost:9933',
  moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

const main = async () => {
  const argv = process.argv.slice(2);
  const txHash = argv[0];

  if (!txHash) {
    throw new Error('Provide txHash');
  }

  await web3.eth.getTransactionReceipt(txHash).then((receipt) => {
    console.log('>>> TX RECEIPT');
    console.log(receipt);
    console.log('>>> DECODED LOGS');
    console.log(abiDecoder.decodeLogs(receipt.logs));
  });
};

main()
  .then(() => {
    console.log('successfully exited');
    process.exit(0);
  })
  .catch((err) => {
    console.log('error occur:', err);
    process.exit(1);
  });
