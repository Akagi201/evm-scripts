import Web3 from "web3";
// import abiDecoder from 'abi-decoder';

/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
	development: "http://localhost:9933",
	moonbase: "https://rpc.api.moonbase.moonbeam.network",
};
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

const main = async () => {
	const argv = process.argv.slice(2);
	const txHash = argv[0];

	if (!txHash) {
		throw new Error("Provide txHash");
	}

	// const abi = JSON.parse('[{"type":"function","name":"startGame","inputs":[{"name":"teamId","type":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"closeGame","inputs":[{"name":"gameId","type":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"reinforceDefense","inputs":[{"name":"gameId","type":"uint256"},{"name":"crabadaId","type":"uint256"},{"name":"borrowPrice","type":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"reinforceAttack","inputs":[{"name":"gameId","type":"uint256"},{"name":"crabadaId","type":"uint256"},{"name":"borrowPrice","type":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"attack","inputs":[{"name":"gameId","type":"uint256"},{"name":"attackTeamId","type":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"settleGame","inputs":[{"name":"gameId","type":"uint256"}],"outputs":[],"stateMutability":"nonpayable"}]')
	const types = ["uint256", "uint256", "uint256"];

	await web3.eth.getTransaction(txHash).then((tx) => {
		console.log(">>> TX");
		console.log(tx);
		console.log(">>> INPUT");
		console.log(tx.input);
		console.log(">>> DECODED INPUT");
		console.log(web3.eth.abi.decodeParameters(types, tx.input));
		// console.log(web3.eth.abi.decodeParameters(abi, tx.input))
		// console.log(web3.utils.hexToAscii(tx.input))
	});
};

main()
	.then(() => {
		console.log("successfully exited");
		process.exit(0);
	})
	.catch((err) => {
		console.log("error occur:", err);
		process.exit(1);
	});
