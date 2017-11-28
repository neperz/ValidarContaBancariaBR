using Microsoft.VisualStudio.TestTools.UnitTesting;
using ValidadorDeCC.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidadorDeCC.Domain.Tests
{
    [TestClass()]
    public class CommonBankAccountValidatorTests
    {
        [TestMethod()]
        public void BancoDoBrasilCheckNumberCalculatorTest()
        {
            var nCodBanco = "070";

            var nAgencia = "057";
            var dvAgencia = "";

            var nConta = "032830";
            var dvConta = "6";

            var ValidadorDeConta = new BankAccount();
            ContaBanco contaBanco = new ContaBanco
            {
                accountCheckNumber = dvConta,
                accountNumber = nConta,
                agencyCheckNumber = dvAgencia,
                agencyNumber = nAgencia,
                bankNumber = nCodBanco
            };
            var nb = ValidadorDeConta.validate(contaBanco);

           
            Assert.AreEqual(true, nb.valido);

        }
        [TestMethod()]
        public void CommonBankAccountValidatorTest()
        {
            var nAgencia = "3476";
            var dvAgencia = "2";

            var nConta = "13073";
            var dvConta = "7";
            CommonBankAccountValidator c = new CommonBankAccountValidator();
            var contaValida = CommonBankAccountValidator.accountNumberIsValid(nConta);
            var dvContaValida = CommonBankAccountValidator.accountCheckNumberIsValid(dvConta);
            Assert.AreEqual(true, dvContaValida);
        }
        /// <summary>
        /// Cálculo do dv do número do lojista
        /// </summary>
        /// <param name="dsNumero"></param>
        /// <returns></returns>
        public decimal NuLojistaComDigito(string dsNumero)
        {
            var length = dsNumero.Length;
            var BRBnumberstring = dsNumero.ToCharArray();
            var BRBnumberList = BRBnumberstring.Select(c => Convert.ToInt32(c.ToString()));
            int sum = 0;
            int dv = 0;
            int[] reversedCCnumber = BRBnumberList.Reverse().ToArray();
            int contador = 0;
            for (int i = 0; i < length; i++)
            {
                contador++;
                var n = reversedCCnumber[i];
                if (contador % 2 == 0)
                {
                    sum += n;

                }
                else
                {
                    var produto = n * 2;
                    var cProduto = produto.ToString().ToCharArray();
                    var nProduto = cProduto.Select(c => Convert.ToInt32(c.ToString()));
                    var dProduto = nProduto.Sum();

                    sum += dProduto;
                }
            }
            if (sum % 10 == 0)
                dv = 0;
            else
            {
                var proximaDezenaCheia = (Math.Floor((decimal)sum / 10) + 1) * 10;
                dv = Convert.ToInt32(proximaDezenaCheia) - sum;
            }
            return Convert.ToInt32(dsNumero + dv.ToString());
        }
        [TestMethod()]
        public void agencyNumberIsValidTest()
        {
            Assert.Fail();
        }
    }
}