let UsersContract = artifacts.require("./UsersContract.sol");

module.exports = function(deployer) {
    deployer.deploy(UsersContract);
}