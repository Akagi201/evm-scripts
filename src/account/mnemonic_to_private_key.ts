import yargs from "yargs";
import { HDNodeWallet } from "ethers";

const args = yargs.options({
	seed: {
		description: "seed phrase of ETH address",
		type: "string",
		demandOption: true,
		alias: "s",
	},
}).argv;

const main = async () => {
	// Generates a BIP-039 + BIP-044 wallet from mnemonic deriving path
	// (default = "m/44'/60'/0'/0/0") using the wordlist.
	const wallet = HDNodeWallet.fromPhrase(args["seed"]);
	console.log(`Private key: ${wallet.privateKey}`);
	console.log(`Public key: ${wallet.publicKey}`);
	console.log(`Address: ${wallet.address}`);
};

main();
