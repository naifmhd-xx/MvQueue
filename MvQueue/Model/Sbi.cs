using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvQueue.Model
{
    public class Sbi
    {
        public string title { get; set; }
        public string updatedDate { get; set; }
        public string message { get; set; }
        public List<TokenPoint> tokenPoints { get; set; }
    }
}
