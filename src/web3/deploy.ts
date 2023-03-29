import Web3 from "web3";
import { contractFile } from "../contract/compile";

/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
	development: "http://localhost:9944",
	moonbase: "https://rpc.api.moonbase.moonbeam.network",
};
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

// Variables
// The accounts info for Moonbeam development node can be found:
// https://docs.moonbeam.network/cn/builders/get-started/networks/moonbeam-dev/#pre-funded-development-accounts
const account_from = {
	privateKey:
		"13e755880a9cfda5417971a487aaef6ea4b5fc87ee3a4a47a20efe3ab846478a",
	address: "0xeE9926927648b4594fC8fcCE6fb6905eBbf5F040",
};

const bytecode = contractFile.evm.bytecode.object;
const abi = contractFile.abi;

/*
   -- Deploy Contract --
*/
const deploy = async () => {
	console.log(`Attempting to deploy from account ${account_from.address}`);

	// Create Contract Instance
	const incrementer = new web3.eth.Contract(abi);

	// Create Constructor Tx
	const incrementerTx = incrementer.deploy({
		data: bytecode,
		arguments: [5],
	});

	// Sign Transacation and Send
	const createTransaction = await web3.eth.accounts.signTransaction(
		{
			data: incrementerTx.encodeABI(),
			gas: await incrementerTx.estimateGas(),
		},
		account_from.privateKey,
	);

	// Send Tx and Wait for Receipt
	const createReceipt = await web3.eth.sendSignedTransaction(
		createTransaction.rawTransaction,
	);
	console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
};

deploy();
