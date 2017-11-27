namespace ValidadorDeCC.Domain
{
    public class BanrisulValidator : IValidator
    {
        public BanrisulValidator()
        {
            //ag 0437
            //cc 120687.0-7

            //ag 670
            //cc 35144256-0
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = BanrisulCheckNumberCalculator.calculate(bankAccount.accountNumber);
            return checkNumberCalculated == bankAccount.accountCheckNumber;
        }

        public bool accountNumberIsValid(string accountNumber)
        {
            return accountNumber.Length == this.accountNumberLength() &&
         CommonBankAccountValidator.accountNumberIsValid(accountNumber);
        }

        public string accountNumberMsgError(int length)
        {
            return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
        }

        public bool agencyCheckNumberIsValid(string agencyCheckNumber)
        {
            return agencyCheckNumber == "0" || agencyCheckNumber == "";
        }

        public bool agencyCheckNumberMatch(ContaBanco bankAccount)
        {
            return true;
        }

        public string agencyCheckNumberMsgError()
        {
            return CommonBankAccountValidator.agencyCheckNumberMsgError();

        }

        public bool agencyNumberIsValid(string agencyNumber)
        {
            return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
        }

        public string agencyNumberMsgError(int length)
        {
            return CommonBankAccountValidator.agencyNumberMsgError();
        }
        public int accountNumberLength () { return 9; }
        public bool bankNumberIsValid(string bankNumber)
        {
            throw new System.NotImplementedException();
        }

        public int agencyCheckNumberLength()
        {
            throw new System.NotImplementedException();
        }
    }
}