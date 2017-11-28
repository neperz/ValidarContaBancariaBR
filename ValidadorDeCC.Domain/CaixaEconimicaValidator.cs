using System;

namespace ValidadorDeCC.Domain
{
    internal class CaixaEconimicaValidator : IValidator
    {
        public CaixaEconimicaValidator()
        {
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = CEFCheckNumberCalculator.calculateAccount(bankAccount.accountNumber);
            return checkNumberCalculated == bankAccount.accountCheckNumber.ToUpper();
        }

        public bool accountNumberIsValid(string accountNumber)
        {
            return accountNumber.Length == this.accountNumberLength() &&
              CommonBankAccountValidator.accountNumberIsValid(accountNumber);
        }

        public int accountNumberLength()
        {
            return 11;
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
            throw new NotImplementedException();
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
            return CommonBankAccountValidator.agencyCheckNumberMsgError();
        }

        public bool bankNumberIsValid(string bankNumber)
        {
            throw new NotImplementedException();
        }
    }
}