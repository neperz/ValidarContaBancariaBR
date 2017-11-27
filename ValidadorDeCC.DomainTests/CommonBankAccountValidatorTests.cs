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
            /*
Banrisul
Ag.: 0218 c/c.: 3501514701
Ag.: 0590 c/c.: 0805093703          

Bradesco
Ag: 3001-5
cc: 0140555-1
             */
            var nAgencia = "3001p";
            var dvAgencia = "5";

            var nConta = "0140555";
            var dvConta = "1";
            var b = new BankAccount();
            ContaBanco cc = new ContaBanco
            {
                accountCheckNumber = dvConta,
                accountNumber = nConta,
                agencyCheckNumber = dvAgencia,
                agencyNumber = nAgencia,
                bankNumber = "237"
            };
            var nb = b.validate(cc);

            var nconta = BancoDoBrasilCheckNumberCalculator.calculateAccount(nConta);
            Assert.AreEqual(true,nb!=null);

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

        [TestMethod()]
        public void agencyNumberIsValidTest()
        {
            Assert.Fail();
        }
    }
}