#!/bin/bash
geth --networkid=$1 --datadir=$2 --nodiscover --rpc --rpcaddr=$3 --rpcport "8545" --rpcapi=eth,web3,net --rpccorsdomain "*" --verbosity 0 console --allow-insecure-unlock
