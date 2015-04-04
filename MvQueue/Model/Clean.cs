using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MvQueue.Model
{
    public class Clean
    {
        public static string All(string s)
        {
            s = s.Replace("<br>", "");
            s = s.Replace("\n", "");
            s = excessive_whitespace(s);
            s = s.Trim();
            return s;
        }

        

        public static string Excerpt(string input, int numberWords)
        {
            try
            {
                // Number of words we still want to display.
                var words = numberWords;
                // Loop through entire summary.
                for (var i = 0; i < input.Length; i++)
                {
                    // Increment words on a space.
                    if (input[i] == ' ')
                    {
                        words--;
                    }
                    // If we have no more words to display, return the substring.
                    if (words == 0)
                    {
                        return input.Substring(0, i);
                    }
                }
            }
            catch (Exception)
            {
                // Log the error.
            }
            return string.Empty;
        }

        public static string excessive_whitespace(string s)
        {
            var pieces = s.Split().Where(x => x.Length > 0).ToArray();
            var r = String.Join(" ", pieces);
            return r;
        }

        public static string Html(string s)
        {
            s = s.Replace("&nbsp;", " ");
            s = s.Replace("&quot;", "\"");
            //s = s.Replace("<br>", " ");
            s = Regex.Replace(s, "<.*?>", "");

            s = excessive_whitespace(s);
            s = s.Trim();
            var free = Regex.Replace(s, "<.*?>", "");
            return free;
        }

        public static string Meta(string t, string c)
        {
            var comment = "";
            if (c != "")
            {
                var words = c.Split(' ');
                comment = words.FirstOrDefault() + " ކޮމެންޓްސް";
            }

            return t + " " + comment;
        }

        

        public static string Text(string s)
        {
            s = s.Replace("&nbsp;", " ");
            s = s.Replace("&quot;", "\"");

            s = excessive_whitespace(s);
            s = s.Trim();
            return s;
        }
    }
}