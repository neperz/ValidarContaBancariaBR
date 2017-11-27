using System.Collections.Generic;

namespace ValidadorDeCC.Domain
{
    public class ContaBanco
    {
        public string bankNumber { get; set; }
        public string agencyNumber { get; set; }
        public string agencyCheckNumber { get; set; }
        public string accountNumber { get; set; }
        public string accountCheckNumber { get; set; }
        public bool valido { get; set; }

        public List<ErroBanco> Erros { get; set; }
    }
}