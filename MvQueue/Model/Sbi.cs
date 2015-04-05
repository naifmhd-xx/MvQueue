#region

using System.Collections.Generic;

#endregion

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