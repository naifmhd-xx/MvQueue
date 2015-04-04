using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MvQueue.Model
{
    public class TokenPoint
    {
        public string key { get; set; }
        public string name { get; set; }
        public int value { get; set; }
        public int sortOrder { get; set; }
        public List<object> additionalAttributes { get; set; }
    }
}
