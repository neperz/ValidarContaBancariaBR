namespace ValidadorDeCC.Domain
{
    public  class BancoDoBrasilValidator : IValidator
    {
         
        public bool agencyNumberIsValid(string agencyNumber)
        {
            return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
        }

        public bool agencyCheckNumberIsValid(string agencyCheckNumber)
        {
            return agencyCheckNumber.Length == this.agencyCheckNumberLength() &&
              CommonBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber);
        }

        public bool accountNumberIsValid(string accountNumber)
        {
            return accountNumber.Length == this.accountNumberLength() &&
              CommonBankAccountValidator.accountNumberIsValid(accountNumber);
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
        }

        public bool agencyCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = BancoDoBrasilCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber);
            return checkNumberCalculated == bankAccount.agencyCheckNumber.ToUpper();
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = BancoDoBrasilCheckNumberCalculator.calculateAccount(bankAccount.accountNumber);
            return checkNumberCalculated == bankAccount.accountCheckNumber.ToUpper();
        }

        public string agencyNumberMsgError(int length = 0)
        {
            return CommonBankAccountValidator.agencyNumberMsgError();
        }

        public string agencyCheckNumberMsgError()
        {
            return CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength());
        }

        public string accountNumberMsgError(int length = 0)
        {
            return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
        }

        public int agencyCheckNumberLength() { return 1; }

        public int accountNumberLength() { return 8; }

        public bool bankNumberIsValid(string bankNumber)
        {
            
            throw new System.NotImplementedException();
        }
    }
}