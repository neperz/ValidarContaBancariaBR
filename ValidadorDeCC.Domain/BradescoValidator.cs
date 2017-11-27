namespace ValidadorDeCC.Domain
{
    public class BradescoValidator : IValidator
    {
        public BradescoValidator()
        {
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = BradescoCheckNumberCalculator.calculateAccount(bankAccount.accountNumber);
            var checkNumberInformed = bankAccount.accountCheckNumber.ToUpper();
            if (checkNumberInformed == "0")
            {
                return checkNumberCalculated == checkNumberInformed || checkNumberCalculated == "P";
            }
            return checkNumberCalculated == checkNumberInformed;
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
            return agencyCheckNumber.Length == this.agencyCheckNumberLength() &&
       CommonBankAccountValidator.agencyCheckNumberIsValid(agencyCheckNumber);
        }

        public bool agencyCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = BradescoCheckNumberCalculator.calculateAgency(bankAccount.agencyNumber);
            var checkNumberInformed = bankAccount.agencyCheckNumber.ToUpper();
            if (checkNumberInformed == "0")
            {
                return checkNumberCalculated == checkNumberInformed || checkNumberCalculated == "P";
            }
            return checkNumberCalculated == checkNumberInformed;
        }

        public string agencyCheckNumberMsgError()
        {
            return CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength());
        }

        public bool agencyNumberIsValid(string agencyNumber)
        {
            return CommonBankAccountValidator.agencyNumberIsValid(agencyNumber);
        }

        public string agencyNumberMsgError(int length)
        {
            return CommonBankAccountValidator.agencyNumberMsgError();
        }

        public bool bankNumberIsValid(string bankNumber)
        {
            throw new System.NotImplementedException();
        }
       public int  agencyCheckNumberLength() { return 1; }

        public int accountNumberLength() { return 7; }
    }
}