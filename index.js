require('dotenv').config();
const Web3 = require('web3');

console.log(process.env.BSC_NODE_URL);


//const web3 = new Web3(new Web3.providers.HttpProvider(process.env.BSC_NODE_URL));
const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));


// Function to get and display the latest block number
const getLatestBlock = async () => {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log(`Latest Block Number: ${latestBlockNumber}`);
};



// Call the function
getLatestBlock();
