import Web3 from "web3";

const web3 = new Web3("ws://localhost:9944");

// for event topic
// ❯ cast keccak "Increment(address,uint256,uint256)"
// 0x64f50d594c2a739c7088f9fc6785e1934030e17b52f1a894baec61b98633a59f
// ❯ cast 4byte-event "0x64f50d594c2a739c7088f9fc6785e1934030e17b52f1a894baec61b98633a59f"
// Increment(address,uint256,uint256)
web3.eth
	.subscribe(
		"logs",
		{
			address: "CONTRACT-ADDRESS-HERE",
			topics: [], // ['0x64f50d594c2a739c7088f9fc6785e1934030e17b52f1a894baec61b98633a59f']
		},
		(error, result) => {
			if (error) console.error(error);
		},
	)
	.on("connected", function (subscriptionId) {
		console.log(subscriptionId);
	})
	.on("data", function (log) {
		console.log(log);
	});
