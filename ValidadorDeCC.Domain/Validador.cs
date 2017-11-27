using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidadorDeCC.Domain
{
    public class Validador
    {
        public ContaBanco Conta { get; }

        public Validador(ContaBanco conta)
        { 
            this.Conta = conta;
            
        }

        public bool bankNumberIsValid()
        {
            throw new Exception("Banco inválido");
        }

        public bool agencyNumberIsValid()
        {
            throw new Exception(Validador.agencyNumberMsgError());

        }
        public bool agencyCheckNumberIsValid()
        {
            throw new Exception(Validador.agencyCheckNumberMsgError());
        }

        public bool accountNumberIsValid()
        {
            throw new Exception(Validador.accountNumberMsgError());
        }

        public bool accountCheckNumberIsValid()
        {
            throw new Exception("Dígito da conta corrente inválido");
        }

        private static string agencyCheckNumberMsgError()
        {
            throw new NotImplementedException();
        }
        private static string agencyNumberMsgError()
        {
            throw new NotImplementedException();
        }
        private static string accountNumberMsgError()
        {
            throw new NotImplementedException();
        }
    }
}
