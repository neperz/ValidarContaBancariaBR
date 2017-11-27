using System.Text.RegularExpressions;

namespace ValidadorDeCC.Domain
{
    public class GenericBankAccountValidator : IValidator
    {

        public bool bankNumberIsValid (string bankNumber)
        {
            Match match = Regex.Match(bankNumber, "^([0-9A-Za-x]{3,5})", RegexOptions.IgnoreCase);
            return match.Success;
        }

        public bool agencyNumberIsValid(string agencyNumber)
        {
            return Regex.Match(agencyNumber, "^[0-9]{1,5}").Success && int.Parse(agencyNumber) > 0;
        }

        public bool agencyCheckNumberIsValid(string agencyCheckNumber)
        {
            return Regex.Match(agencyCheckNumber, "^[a-zA-Z0-9]{0,2}").Success;
        }

        public bool accountNumberIsValid(string accountNumber)
        {
            return Regex.Match(accountNumber, "^[0-9]{1,12}").Success &&  int.Parse(accountNumber) > 0;
        }

        public bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            return Regex.Match(accountCheckNumber, "^[a-zA-Z0-9]{0,2}").Success;
        }

        public bool agencyCheckNumberMatch(ContaBanco bankAccount)
        {
            return true;
        }

        public bool accountCheckNumberMatch(ContaBanco bankAccount)
        {
            return true;
        }

        public string agencyNumberMsgError(int length)
        {
            return "Agência inválida";
        }

        public string agencyCheckNumberMsgError( )
        {
            return "Dígito da agência inválido";
        }

        public string accountNumberMsgError(int length)
        {
            return "Conta corrente inválida";
        }

        public int agencyCheckNumberLength()
        {
            throw new System.NotImplementedException();
        }

        public int accountNumberLength()
        {
            throw new System.NotImplementedException();
        }
    }
}