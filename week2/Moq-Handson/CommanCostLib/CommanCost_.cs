namespace CommanCostLibLib;

public class CommanCostLib_ {
    private IMailSender _mailSender;

    public CommanCostLib_(IMailSender mailSender) {
        _mailSender = mailSender;
    }

    public bool SendMailToCustomer() {
        _mailSender.SendMail("cust123@abc.com", "Some Message");
        return true;
    }
}
