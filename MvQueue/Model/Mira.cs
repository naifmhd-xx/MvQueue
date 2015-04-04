using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvQueue.Model
{
    public class Mira
    {
        public Mira()
        {
            TokenList=new List<TokenList>();
        }
        public string Title { get; set; }
        public List<TokenList> TokenList { get; set; }
    }
}
