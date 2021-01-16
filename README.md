# Ethereum

## 1.simple-ether-wallet: Ether wallet Web application.  
     This stuff requires meteor Web application framework.   
     Run the following command in your terminal to install the latest official release  
     OSX/Linux  
     curl https://install.meteor.com/ | sh  
     Please visit the site(https://www.meteor.com/) to find more detail.  
  
     How to run:  
     1.create work directory  
        $cd  
        $mkdir ethereum  
        $cd ethereum  
     2.clone this repository  
        git@github.com:calsonickansei-corp/Ethereum.git  
     3.create meteor project  
        $meteor create wallet  
     4.delete unnecessary folders and libraris from wallet folder  
        $cd wallet  
        $rm -r -f client  
        $rm -r -f node_modules  
        $rm -r -f .gitcore  
        $rm package-lock.json  
        $rm package.json  
     5.copy wallet source code and package files from ../Ethereum/simple_ether_wallet  
        $cp -r ../Ethereum/simple_ether_wallet/client .  
        $cp ../Ethereum/simple_ether_wallet/package* .  
     6.install packages  
        $npm install  
        $meteor add twbs:bootstrap  
        $meteor add ethereum:web3  
        $meteor add ethereum:accounts  
        $meteor add ethereum:blocks  
        $meteor add session  
        $meteor add iron:router  
     7.define appropriate provider  
        Open ../Etereum/simple-ether-wallet/init.js with editor.  Defines the URL in the following code.  
       web3.setProvider(new web3.providers.HttpProvider("http://***.***.**.**:****")); 
     8.launch wallet web application  
        $meteor  
     9.Open web browser and access to http://localhost:3000  

## 2.console: nodejs console application and console tool  
     1)test.js  
        Sample of smart contract execution 
        How to run:  
         $cd console 
         $npm install web3@0.20.0  
         $node test.js [target Provider IP Address] 
         ex. node test.js 192.168.11.24
     2)sha256.js
        Generate Hash value from text file
        How to run:
         $cd console 
         $node sha256.js textfile
     3)rinkeby.sh
         Connect Ethereum rinkeby test network
         $cd console 
         $./rinkeby.sh $1 $2
         NOTE: $1 rinkeby data folder path.
               $2 rinkeby node IP address
     4)rinkeby.sh
         Connect Ethereum private network
         $cd console 
         $./testNet.sh $1 $2 $3
         NOTE: $1 Network ID
               $2 private net data folder path
               $3 private net node IP address

## 3.private: private network configuration file
     1)genesis.json
         This simple configuration is for network test purpose
     2)marelli.json
         This is Proof of Stake policy configuration file.  
         Proof of Stake should be fine in private network. We can trust our member!!!

## 4.documentation: class presentation ppt
     class.pptx
     
## 5. Connection to certain node when your node is launched
     1.move static-nodes.json to your data folder
        $mv static-nodes/static-nodes.json $1/static-nodes.json
        NOTE: $1 private net data folder path
     2.add "enode infomation" of the node you always want to connect into static-nodes.json
     
