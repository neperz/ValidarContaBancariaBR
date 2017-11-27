namespace ValidadorDeCC.Domain
{
    internal class BradescoCheckNumberCalculator
    {
        public BradescoCheckNumberCalculator()
        {
            
        }

        public static string calculateAccount(string accountNumber)
        {
            var numbers = accountNumber.ToCharArray();
            var sumSeq = 0;
            var sequence = 0;
            for (var i = 0; i < numbers.Length; i++)
            {
                var number = int.Parse(numbers[i].ToString());
                sumSeq += multiplyAccordingWeight(number, i);
            }
            return accountModule(sumSeq);
        }

        public static int  multiplyAccordingWeight(int number,int  i)
        {
            int[] weight = { 2, 7, 6, 5, 4, 3, 2 };
            return number * weight[i];
        }

        public static string accountModule(int sumSeq)
        {
            var module = sumSeq % 11;
            if (module == 0)
            {
                return "0";
            }
            else
            {
                if (module == 1)
                {
                    return "P";
                }
                else
                {
                    return (11 - module).ToString();
                }
            }
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
            return agencyModule(sumSeq);
        }

        public static string agencyModule(int sumSeq)
        {
            var result = 11 - (sumSeq % 11);
            if (result == 10)
            {
                return "P";
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