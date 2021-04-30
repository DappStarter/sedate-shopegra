require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan rifle payment unlock grace describe obscure gift'; 
let testAccounts = [
"0x65a7f6c6dc5973656b6824ab19ece5389d69b6cc3df98071dbba93373580fcf6",
"0x4777a995a9f687a0134a994b31e0577c2b47c0386f82977a6c724e75c19cfd76",
"0x5cf020726bfafcdf67c66d25c13a8b09c6828bd510fcfaff0d84658a97cc2527",
"0x80a1d2cd9e214241672432c6009fd3554f08c7c23a0e088d1ba9a89033f90624",
"0x378362365ecbcb9792281757c1b69e447c42ab484c310185523522151d67aced",
"0x08ffda7e5808fbb5c4b507c964c025cdb792d29670c34df26687d0f71604755b",
"0x5342e708f54cd1d897fd68069b14cf2f3306e561164cf3d4dd8248c9bbd88a69",
"0x9a69f5bb21711bf0e15439a3efca83b477363eb7044ba89b645c3f3506176943",
"0xa39cea3058aac1dec0a779b08329c2392e9de00d0bc1bfff5ea4fbe160a3c234",
"0x0108d49b72c1af6e1a1cfbfbfc223a76f56d5b5a41a92673d9cd222ff417d184"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
