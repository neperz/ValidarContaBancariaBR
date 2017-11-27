namespace ValidadorDeCC.Domain
{
    public class BancoDoBrasilCheckNumberCalculator
    {

        // Account validation
        public static string calculateAccount(string accountNumber)
        {
            string pesoBB = "98765432";
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

            /*
            var numbers = accountNumber.ToCharArray();
            var sumSeq = 0;
            var sequence = 0;
            for (var i = 0; i < numbers.Length; i++)
            {
                var seq = 9 - i;
                sumSeq += (int.Parse(numbers[i].ToString()) * seq);
            }*/
            return module(soma);
        }

        // Agency validation
        public static string calculateAgency(string agencyNumber)
        {
            var numbers = agencyNumber.ToCharArray();
            var sumSeq = 0;
            var sequence = 0;
            for (var i = 0; i < numbers.Length; i++)
            {
                var seq = 5 - i;
                sumSeq += (int.Parse(numbers[i].ToString()) * seq);
            }
            return module(sumSeq);
        }

        public static string module(int sumSeq)
        {
           // int result = (sumSeq * 10) % 11;
            var result = 11 - (sumSeq % 11);
            if (result == 10)
            {
                return "X";
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