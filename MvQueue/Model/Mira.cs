#region

using System.Collections.Generic;

#endregion

namespace MvQueue.Model
{
    public class Mira
    {
        public Mira()
        {
            TokenList = new List<TokenList>();
        }

        public string Title { get; set; }
        public List<TokenList> TokenList { get; set; }
    }
}