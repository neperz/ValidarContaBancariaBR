namespace ValidadorDeCC.Domain
{
    internal class ItauCheckNumberCalculator
    {
        public ItauCheckNumberCalculator()
        {
        }

        public static string calculate(string  agencyNumber, string accountNumber)
        {
            var numbers = (agencyNumber + accountNumber).ToCharArray();
            var sumSeq = 0;
            var sequence = 0;
            for (var i = 0; i < numbers.Length; i++)
            {
                var number = int.Parse(numbers[i].ToString());
                sequence = multiplyAccordingParity(number, i);
                sequence = adjustAccordingLength(sequence);
                sumSeq += sequence;
            }
            return module(sumSeq);
        }

        public static int multiplyAccordingParity(int  number,int index)
        {
            return number * (index % 2 == 0 ? 2 : 1);
        }

        public static int adjustAccordingLength(int  sequence)
        {
            if (sequence > 9)
            {
                var numbers = sequence.ToString().ToCharArray();
                sequence = 0;
                for (var i = 0; i < numbers.Length; i++)
                {
                    sequence += int.Parse(numbers[i].ToString());
                }
            }
            return sequence;
        }

        public static string module(int  sumSeq)
        {
            var module = sumSeq % 10;
            if (module == 0)
            {
                return "0";
            }
            else
            {
                return (10 - module).ToString();
            }
        }
    }
}