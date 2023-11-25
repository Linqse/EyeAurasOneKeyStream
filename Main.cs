using System.Text;

namespace EyeAuras.Web.Repl.Component;

public partial class Main : WebUIComponent {
    
    public Main()
    {
        hash = GenerateRandomString(10);
    }

    private string hash;
    static string GenerateRandomString(int length)
    {
        Random random = new Random();
        const string characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder randomString = new StringBuilder(length);

        for (int i = 0; i < length; i++)
        {
            int index = random.Next(characters.Length);
            randomString.Append(characters[index]);
        }

        return randomString.ToString();
    }
    
    
}