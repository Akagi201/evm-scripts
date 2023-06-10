import { ethers, Signature } from "ethers";

const sign = async () => {
	let provider = ethers.getDefaultProvider("homestead");

	// Create a wallet to sign the message with
	let wallet = ethers.Wallet.createRandom();

	console.log(`privateKey: ${wallet.privateKey}`);
	console.log(`publicKey: ${wallet.publicKey}`);
	console.log(`address: ${wallet.address}`);

	const signer = wallet.connect(provider);

	let message = "Hello Bob";

	let flatSig = await signer.signMessage(message);
	console.log(`message: ${message}`);
	console.log(`signature: ${flatSig}`);
	// // For Solidity, we need the expanded-format of a signature
	// let sig = ethers.splitSignature(flatSig);
	// console.log(sig)
	let sig = Signature.from(flatSig);
	console.log(`r: ${sig.r}`);
	console.log(`s: ${sig.s}`);
	console.log(`v: ${sig.v}`);

	let recoveredAddress = ethers.verifyMessage(message, flatSig);
	console.log(`recoveredAddress: ${recoveredAddress}`);
};

sign();
