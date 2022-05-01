/**
 * Get all logs of last block for the given contract address
 */

import Web3 from 'web3';
// import abiDecoder from 'abi-decoder';

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
  const contractAddress = argv[0];

  if (!contractAddress) {
    throw new Error('Provide contractAddress');
  }

  const block = await web3.eth.getBlock('latest');

  const args = {
    fromBlock: block.number,
    toBlock: block.number,
    address: contractAddress,
  };

  const logs = await web3.eth.getPastLogs(args);

  console.log('>>> LATEST BLOCK');
  console.log(block);
  console.log('>>> LOGS');
  console.log(logs);
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
