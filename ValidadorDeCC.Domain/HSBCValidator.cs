namespace ValidadorDeCC.Domain
{
    public class HSBCValidator: IValidator
    {
        public HSBCValidator()
        {
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return true;
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            return true;
        }

        public bool accountNumberIsValid(string accountNumber)
        {
            return accountNumber.Length == this.accountNumberLength() &&
       CommonBankAccountValidator.accountNumberIsValid(accountNumber);
        }

        public int accountNumberLength()
        {
            return 6;
        }

        public string accountNumberMsgError(int length)
        {
            return CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength());
        }

        public bool agencyCheckNumberIsValid(string agencyCheckNumber)
        {
            return agencyCheckNumber == "0" || agencyCheckNumber == "";
        }

        public int agencyCheckNumberLength()
        {
            throw new System.NotImplementedException();
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

        public bool bankNumberIsValid(string bankNumber)
        {
            throw new System.NotImplementedException();
        }
    }
}