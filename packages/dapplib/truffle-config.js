require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain uncover give enroll flush ten'; 
let testAccounts = [
"0x94300361e7156dadc625cd8827edb1b7ba9050344ac70464b6357262778f688e",
"0xa6a7b9606ab2a946e889c389aca8b3b3d7ad439a0f23c117c632e0aabe7b50c8",
"0xb788cdb9955f31d4837d02806abd55fa425e19ed2214c4aac51fe40231d6301b",
"0x74942f222dbb485bf2999b1f1fefd1606e532f8ffbfd1fe57ce68df9af42c2c0",
"0x2f45607af3461be8a22c17eaf48d73b9be068e95d3f93228271a64c84ed964eb",
"0x1e51be90018caf8abbc3c3586ecd60086b5a4276fa3b7c25eb66ab78c994f264",
"0x9e8cd0b361ba783abfada88ae95dc4a9f5dda0a448b681c12549c69acd391122",
"0x298053936aca2dee09ebe189025dac61f9411c969d90612698e223814b4293cc",
"0x0af4ccdc6ee790733f7aa94162db31f26af61dd45bbebac280b2e4dcd955cb40",
"0x512c8048fa146bbe9f9f9f59b40b16a1149e2bcf3037ac45fe7b4f60449f6ef7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


