import fs from "fs";
import solc from "solc";

// Get Path and Load Contract
const source = fs.readFileSync("./src/contract/Incrementer.sol", "utf8");

// Compile Contract
const input = {
	language: "Solidity",
	sources: {
		"Incrementer.sol": {
			content: source,
		},
	},
	settings: {
		outputSelection: {
			"*": {
				"*": ["*"],
			},
		},
	},
};
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
export const contractFile =
	tempFile.contracts["Incrementer.sol"]["Incrementer"];
