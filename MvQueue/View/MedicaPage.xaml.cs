using System.Xml.Linq;
using HtmlAgilityPack;
using MvQueue.Common;
using MvQueue.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkID=390556

namespace MvQueue.View
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MedicaPage : Page
    {
        private readonly NavigationHelper navigationHelper;
        public MedicaPage()
        {
            this.InitializeComponent();

            this.navigationHelper = new NavigationHelper(this);
            this.navigationHelper.LoadState += this.NavigationHelper_LoadState;
            this.navigationHelper.SaveState += this.NavigationHelper_SaveState;
        }

        public NavigationHelper NavigationHelper
        {
            get { return this.navigationHelper; }
        }

        private async void NavigationHelper_LoadState(object sender, LoadStateEventArgs e)
        {
            TokenList.ItemsSource = null;
            Loaded();
        }

        private void NavigationHelper_SaveState(object sender, SaveStateEventArgs e)
        {
            // TODO: Save the unique state of the page here.
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }
        private async void Loaded()
        {

            var link = "http://0byte.net/";
            var client = new HttpClient();
            var task =
                await client.GetAsync(link);
            var response = task.Content;
            var readtask = response.ReadAsStringAsync();
            readtask.Wait();

            HtmlDocument html = new HtmlDocument();
            html.LoadHtml(readtask.Result);

            var rowNodes = html.DocumentNode.Descendants()
                .Where(n => n.Name == "table").FirstOrDefault(n => n.GetAttributeValue("class", null) == "table table-bordered");

            var ros = rowNodes.Element("tbody");
            var rows = ros.Elements("tr").ToList();

            var tokenList = new List<TokenList>();

            foreach (var row in rows)
            {
                var token = new TokenList();
                token.Title = row.Elements("td").ElementAt(0).InnerText;
                token.Room = row.Elements("td").ElementAt(1).InnerText;
                token.Token = row.Elements("td").ElementAt(2).InnerText;
                tokenList.Add(token);
            }
            TokenList.ItemsSource = tokenList;
            
            //string title = titleNodes != null ? rows.InnerText : "";


            //XDocument xml = XDocument.Parse(readtask.Result);

            //List<TokenList> tokenList = new List<TokenList>();

            //IEnumerable<XElement> drinkList = xml.Descendants("queue");

            //foreach (var drink in drinkList)
            //{
            //    var token = new TokenList();
            //    token.Title = drinkList.ElementAt(0).Element("name").Value;
            //    token.Token = drinkList.ElementAt(0).Element("number").Value;
            //    tokenList.Add(token);
            //}

            //TokenList.ItemsSource = tokenList;


        }

      
    }
}
