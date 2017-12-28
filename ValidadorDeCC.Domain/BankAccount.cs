using System.Collections.Generic;

namespace ValidadorDeCC.Domain
{
    public class BankAccount
    {
        public BankAccount()
        {
        }
        IValidator validator(string bankNumber)
        {
            Dictionary<string, IValidator> validators = new Dictionary<string, IValidator> {

                { "001", new BancoDoBrasilValidator()},
                { "041", new BanrisulValidator() },
                { "237",new  BradescoValidator() },
                { "745", new CitibankValidator() },
                {"399", new  HSBCValidator ()},
                {"341", new  ItauValidator() },
                {"033", new  SantanderValidator() },
                {"104", new CaixaEconimicaValidator() }

                };
            

            /*
 SantanderValidator cb = new SantanderValidator();
        "237", BradescoValidator,
        "341", ItauValidator,
        "033", SantanderValidator,
        "745", CitibankValidator,
        "399", HSBCValidator,
       
      */

            if (validators.ContainsKey(bankNumber))
            {
                return validators[bankNumber];
            }
            else
            {
                return new GenericBankAccountValidator();
            }
        }

        public ContaBanco validate(ContaBanco banco, bool skipAgencyValidation=false )
        {
            ContaBanco bancoValidado = new ContaBanco();
            GenericBankAccountValidator gv = new GenericBankAccountValidator();
            var errors = new List<ErroBanco>();

            try
            {

                var validator = this.validator(banco.bankNumber);

                if (!gv.bankNumberIsValid(banco.bankNumber))
                {
                    errors.Add(new ErroBanco { description = "Banco inválido", code = "INVALID_BANK_NUMBER" });
                }
                if (skipAgencyValidation == false)
                {
                    if (!validator.agencyNumberIsValid(banco.agencyNumber))
                    {
                        errors.Add(new ErroBanco { description = validator.agencyNumberMsgError(0), code = "INVALID_AGENCY_NUMBER" });
                    }

                    if (!validator.agencyCheckNumberIsValid(banco.agencyCheckNumber))
                    {
                        errors.Add(new ErroBanco { description = validator.agencyCheckNumberMsgError(), code = "INVALID_AGENCY_CHECK_NUMBER" });
                    }
                }
                if (!validator.accountNumberIsValid(banco.accountNumber))
                {
                    errors.Add(new ErroBanco { description = validator.accountNumberMsgError(0), code = "INVALID_ACCOUNT_NUMBER" });
                }

                if (!validator.accountCheckNumberIsValid(banco.accountCheckNumber))
                {
                    errors.Add(new ErroBanco { description = "Dígito da conta corrente inválido", code = "INVALID_ACCOUNT_CHECK_NUMBER" });
                }
                if (skipAgencyValidation == false)
                {
                    if (validator.agencyNumberIsValid(banco.agencyNumber) && validator.agencyCheckNumberIsValid(banco.agencyCheckNumber))
                    {
                        if (!validator.agencyCheckNumberMatch(banco))
                        {
                            errors.Add(new ErroBanco { description = "Dígito da agência não corresponde ao número da agência preenchido", code = "AGENCY_CHECK_NUMBER_DONT_MATCH" });
                        }
                    }
                }

                if (validator.accountNumberIsValid(banco.accountNumber) && validator.accountCheckNumberIsValid(banco.accountCheckNumber))
                {
                    if (!validator.accountCheckNumberMatch(banco))
                    {
                        errors.Add(new ErroBanco { description = "Dígito da conta não corresponde ao número da conta/agência preenchido", code = "ACCOUNT_CHECK_NUMBER_DONT_MATCH" });
                    }
                }
                bancoValidado = banco;
                if (errors.Count == 0)
                {
                    bancoValidado.valido = true;
                }
                else
                {
                    bancoValidado.valido = false;
                    bancoValidado.Erros = new List<ErroBanco>();
                    bancoValidado.Erros = errors;
                }
            }
            catch (System.Exception ex)
            {
                bancoValidado.valido = false;
                bancoValidado.Erros = new List<ErroBanco> { new ErroBanco { code = "000", description = "Erro Interno: " + ex.Message } };
            }
            return bancoValidado;
        }
    }
}