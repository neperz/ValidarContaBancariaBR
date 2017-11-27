namespace ValidadorDeCC.Domain
{
    public interface IValidator
    {
        bool accountCheckNumberIsValid(string accountCheckNumber);
        bool accountCheckNumberMatch(ContaBanco bankAccount);
        bool accountNumberIsValid(string accountNumber);
        string accountNumberMsgError(int length);
        bool agencyCheckNumberIsValid(string agencyCheckNumber);
        bool agencyCheckNumberMatch(ContaBanco bankAccount);
        string agencyCheckNumberMsgError();
        bool agencyNumberIsValid(string agencyNumber);
        string agencyNumberMsgError(int length);
        bool bankNumberIsValid(string bankNumber);

        int agencyCheckNumberLength();

         int accountNumberLength();
    }
}