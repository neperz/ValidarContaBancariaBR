using System.Text.RegularExpressions;

namespace ValidadorDeCC.Domain
{
    public class CommonBankAccountValidator
    {
        public CommonBankAccountValidator()
        {
            
        }
        public static bool agencyNumberIsValid(string agencyNumber)
        {
            Match match = Regex.Match(agencyNumber, "^(?!0000)([0-9]{4})", RegexOptions.IgnoreCase);
            return match.Success;// /^ (? !0000)([0 - 9]{ 4})$/.test(agencyNumber);
        }

        public static bool agencyCheckNumberIsValid(string agencyCheckNumber)
        {
            Match match = Regex.Match(agencyCheckNumber, "^[a-zA-Z0-9]{0,1}", RegexOptions.IgnoreCase);
            return match.Success;///^[a - zA - Z0 - 9]{ 0,1}$/.test(agencyCheckNumber);
        }

        public static bool accountNumberIsValid(string accountNumber)
        {
            var isInt = int.Parse(accountNumber) > 0;
            Match match = Regex.Match(accountNumber, "^[0-9]{1,12}", RegexOptions.IgnoreCase);
            return match.Success && isInt;
        }

        public static bool accountCheckNumberIsValid(string accountCheckNumber)
        {
            Match match = Regex.Match(accountCheckNumber, "^[a-zA-Z0-9]{1}", RegexOptions.IgnoreCase);
            return match.Success;
        }

        public static string agencyNumberMsgError(int length=0)
        {
            if (length == 0)
            {
                length = agencyNumberLength();
            }
            return "A agência deve conter " + length + " números. Complete com zeros a esquerda se necessário.";
        }

        public static string agencyCheckNumberMsgError(int length=0)
        {
            if (length == 0)
            {
                return "O dígito da agência deve ser vazio";
            }
            else if (length == 1)
            {
                return "O dígito da agência deve conter 1 dígito";
            }
            else
            {
                return "O dígito da agência deve conter " + length + " números. Complete com zeros a esquerda se necessário.";
            }
        }

        public static string accountNumberMsgError(int length)
        {
            return "A conta corrente deve conter " + length + " números. Complete com zeros a esquerda se necessário.";
        }

        static int agencyNumberLength() { return 4; }
    }
}
