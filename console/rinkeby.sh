#!/bin/bash
geth --rinkeby --datadir=$1 --syncmode "light" --rpc --rpcaddr=$2 --rpcport "8545" --rpcapi=eth,web3,net --rpccorsdomain "*" --verbosity 0 console --allow-insecure-unlock
