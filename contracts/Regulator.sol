contract Regulator {

    address public regulator;
    mapping (address => uint) public licenses;
    uint public applicantCounter;
    uint public quota;

    // log these events
    event Deposit(address _from, uint _amount);
    event Refund(address _to, uint _amount);

    function Regulator() {
        regulator = msg.sender;
        quota = 500;
        applicantCounter = 0;
    }

    /**
     * Send ether to get a license.
     */
    function purchaseLicense() public returns (bool success) {
        if (applicantCounter >= quota) { return false; }
        licenses[msg.sender] = msg.value;
        applicantCounter++;
        Deposit(msg.sender, msg.value);
        return true;
    }

    /**
     * Applicant can cancel their license.
     */
    function refundLicense(address recipient, uint amount) public {
        if (msg.sender != regulator) { return; }

        if (licenses[recipient] == amount) {
            address myAddress = this;
            if (myAddress.balance >= amount) {
                recipient.send(amount);
                licenses[recipient] = 0;
                applicantCounter--;
                Refund(recipient, amount);
            }
        }
    }

    // --- Regulator tasks ---

    /**
     * Regulator can change license quota
     */
    function changeQuota(uint newquota) public {
        if (msg.sender != regulator) { return; }
        quota = newquota;
    }

    /**
     * Regulator can cancel this contract
     */
    function destroy() {
        if (msg.sender == regulator) {
            suicide(regulator);
        }
    }
}