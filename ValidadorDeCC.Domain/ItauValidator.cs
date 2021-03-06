﻿namespace ValidadorDeCC.Domain
{
    internal class ItauValidator : IValidator
    {
        public ItauValidator()
        {
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return CommonBankAccountValidator.accountCheckNumberIsValid(accountCheckNumber);
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            var checkNumberCalculated = ItauCheckNumberCalculator.calculate(bankAccount.agencyNumber, bankAccount.accountNumber);
            return checkNumberCalculated == bankAccount.accountCheckNumber;
        }

        public bool accountNumberIsValid(string accountNumber)
        {
            return accountNumber.Length == this.accountNumberLength() &&
        CommonBankAccountValidator.accountNumberIsValid(accountNumber);
        }

        public int accountNumberLength()
        {
            return 5;
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