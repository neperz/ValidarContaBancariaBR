using System;

namespace ValidadorDeCC.Domain
{
    internal class CEFCheckNumberCalculator
    {
        // Account validation
        public static string calculateAccount(string accountNumber)
        {
            string pesoBB = "8765432";
            int soma = 0;
            int x = pesoBB.Length - accountNumber.Length;
            for (int j = 0; j < x; j++)
            {
                accountNumber = accountNumber.Insert(0, "0");
            }

            for (int i = 0; i < pesoBB.Length; i++)
            {
                if (i < x)
                {
                    soma += int.Parse(pesoBB.Substring(i, 1)) * 0;
                }
                else
                {
                    soma += int.Parse(pesoBB.Substring(i, 1)) * int.Parse(accountNumber.Substring(i, 1).ToString());
                }
            }

            return module(soma);
        }

        public static string module(int sumSeq)
        {
            // int result = (sumSeq * 10) % 11;
            var result = 11 - (sumSeq % 11);
            if (result == 10)
            {
                return "0";
            }
            else
            {
                if (result == 11)
                {
                    return "0";
                }
                else
                {
                    return result.ToString();
                }
            }
        }
    }
}