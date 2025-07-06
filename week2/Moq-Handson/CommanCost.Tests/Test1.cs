using CommanCostLib;
using Moq;
namespace CommanCost.Tests;

[TestFixture]
public class Tests {

    private Mock<IMailSender> _mockMailSender;
    private CommanCost_ _CommanCost;

    [OneTimeSetUp]
    public void Init() {
        _mockMailSender = new Mock<IMailSender>();
        _mockMailSender.Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
        _CommanCost = new CommanCost_(_mockMailSender.Object);
    }

    [TestCase]
    public void SendMailToCustomer_ReturnsTrue() {
        var result = _CommanCost.SendMailToCustomer();
        Assert.That(result, Is.True);
    }
}
