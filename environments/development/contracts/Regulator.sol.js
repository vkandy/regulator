// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"purchaseLicense","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"applicantCounter","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"newquota","type":"uint256"}],"name":"changeQuota","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"refundLicense","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"regulator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"licenses","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Refund","type":"event"}],
    binary: "606060405260008054600160a060020a031916331781556101f46003556002556102868061002d6000396000f36060604052361561006c5760e060020a60003504636bc8ecb5811461006e57806383197ef01461008557806391d7cdb3146100ad578063a977c71e146100b6578063cebe09c9146100d7578063d2057b3f146100e0578063dd8fee1414610105578063f18a02c614610117575b005b61012f60035460025460009190106101455761019f565b61006c60005433600160a060020a03908116911614156101a257600054600160a060020a0316ff5b61013b60025481565b61006c60043560005433600160a060020a039081169116146101a4576101aa565b61013b60035481565b61006c6004356024356000805433600160a060020a039081169116146101ad57610281565b61013b600054600160a060020a031681565b61013b60043560016020526000908152604090205481565b15156060908152602090f35b6060908152602090f35b33600160a060020a031680825260016020819052604080842034908190556002805490930190925560609283526080919091527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c91a15060015b90565b565b60038190555b50565b600160a060020a038316815260016020526040812054821415610281575030600160a060020a0381163182901061028157600160a060020a038316600083606082818181858883f193505050505060006001600050600085600160a060020a03168152602001908152602001600020600050819055506002600081815054809291906001900391905055507fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83836040518083600160a060020a031681526020018281526020019250505060405180910390a15b50505056",
    unlinked_binary: "606060405260008054600160a060020a031916331781556101f46003556002556102868061002d6000396000f36060604052361561006c5760e060020a60003504636bc8ecb5811461006e57806383197ef01461008557806391d7cdb3146100ad578063a977c71e146100b6578063cebe09c9146100d7578063d2057b3f146100e0578063dd8fee1414610105578063f18a02c614610117575b005b61012f60035460025460009190106101455761019f565b61006c60005433600160a060020a03908116911614156101a257600054600160a060020a0316ff5b61013b60025481565b61006c60043560005433600160a060020a039081169116146101a4576101aa565b61013b60035481565b61006c6004356024356000805433600160a060020a039081169116146101ad57610281565b61013b600054600160a060020a031681565b61013b60043560016020526000908152604090205481565b15156060908152602090f35b6060908152602090f35b33600160a060020a031680825260016020819052604080842034908190556002805490930190925560609283526080919091527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c91a15060015b90565b565b60038190555b50565b600160a060020a038316815260016020526040812054821415610281575030600160a060020a0381163182901061028157600160a060020a038316600083606082818181858883f193505050505060006001600050600085600160a060020a03168152602001908152602001600020600050819055506002600081815054809291906001900391905055507fbb28353e4598c3b9199101a66e0989549b659a59a54d2c27fbb183f1932c8e6d83836040518083600160a060020a031681526020018281526020019250505060405180910390a15b50505056",
    address: "0x26554ed03c3143b12d0c6e9bf7902d82c3e4e861",
    generated_with: "2.0.9",
    contract_name: "Regulator"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Regulator error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Regulator error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Regulator error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Regulator error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Regulator = Contract;
  }

})();
