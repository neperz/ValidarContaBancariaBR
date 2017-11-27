namespace ValidadorDeCC.Domain
{
    public class BanrisulCheckNumberCalculator
    {
        public BanrisulCheckNumberCalculator()
        {
            
        }

        public static string calculate (string accountNumber)
        {
            var numbers = accountNumber.ToCharArray();
            var sumSeq = 0;

            for (var i = 0; i < numbers.Length; i++)
            {
                var number = int.Parse(numbers[i].ToString());
                sumSeq += multiplyAccordingWeight(number, i);
            }

            return moduleEleven(sumSeq).ToString();
        }

        public static int multiplyAccordingWeight(int number, int index)
        {
            int[] weight = { 3, 2, 4, 7, 6, 5, 4, 3, 2 };
            return number * weight[index];
        }

     public static int moduleEleven(int sumSeq)
        {
            var module = sumSeq % 11;
            if (module == 0)
            {
                return 0;
            }
            else if (module == 1)
            {
                return 6;
            }
            return 11 - module;
        }
    };

}