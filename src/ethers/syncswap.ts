import * as zksync from 'zksync';
import ethers from "ethers";

const MNEMONIC = '';

const syncProvider = await zksync.getDefaultProvider('goerli');
const ethersProvider = ethers.getDefaultProvider('goerli');
const ethWallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(ethersProvider);
const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);

async function swap({assetIn, assetOut, wallet}: Params) {
	
}

const main = async () => {

}

main()
	.then(() => {
		console.log("successfully exited");
		process.exit(0);
	})
	.catch((err) => {
		console.log("error occur:", err);
		process.exit(1);
	});