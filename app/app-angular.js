var myApp = angular.module('app', []);


myApp.service('BlockchainService', function($rootScope, $http) {

    var blockchainService = {};

    // initializing some global variables
    deployedContract = MetaCoin.deployed();
    accounts = window.web3.eth.accounts;

    blockchainService.getAccounts = function() {
        return accounts;
    }

    blockchainService.refreshBalance = function() {
        // getBalance function is a promise. Since we have to call it
        // once per account, we better store all the promise in an array
        // and resolve them using Promise.all()
        // This final promise is return so that the final function only has
        // to make one promise
        var promises = [];
        for (var i = 0; i < accounts.length; i++) {
            promises.push(
                deployedContract.getBalance.call(accounts[i]).then( function(value){
                    return value.toNumber();
                })
            );
        }
        return Promise.all(promises).then(function(values){
            balances = {};
            for (var i = 0; i < values.length; i++) {
                balances[accounts[i]] = values[i];
            }
            return balances;
        });
    };

    blockchainService.sendCoin = function(from_address, to_address, amount) {
        return deployedContract.sendCoin(to_address, amount, {from: from_address});
    }

    return blockchainService;
})


myApp.controller('blockchainController', function (BlockchainService, $scope, $rootScope) {
    $scope.accounts = BlockchainService.getAccounts();

    $scope.ctrlRefreshBalance = function(from_account) {
        BlockchainService.refreshBalance(from_account).then(function(value) {
            $scope.balances = value;
            $scope.$apply();
        });
    };

    $scope.ctrlSendCoin = function(to_address, amount) {
        from_address = accounts[0];
        BlockchainService.sendCoin(from_address, to_address, amount).then(function() {
            $scope.ctrlRefreshBalance();
        })
    }
});
