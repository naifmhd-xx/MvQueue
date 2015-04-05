#region

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkID=390556
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;
using HtmlAgilityPack;
using MvQueue.Common;
using MvQueue.Model;

#endregion

namespace MvQueue.View
{
    /// <summary>
    ///     An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MiraPage : Page
    {
        private readonly NavigationHelper navigationHelper;

        public MiraPage()
        {
            InitializeComponent();
            navigationHelper = new NavigationHelper(this);
            navigationHelper.LoadState += NavigationHelper_LoadState;
            navigationHelper.SaveState += NavigationHelper_SaveState;
            TokenBar.Visibility = Visibility.Collapsed;
        }

        public NavigationHelper NavigationHelper
        {
            get { return navigationHelper; }
        }

        private async void NavigationHelper_LoadState(object sender, LoadStateEventArgs e)
        {
        }

        private void NavigationHelper_SaveState(object sender, SaveStateEventArgs e)
        {
            // TODO: Save the unique state of the page here.
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            MiraList.ItemsSource = null;
            Loaded();
            //TokenBar.Visibility = Visibility.Collapsed;
        }

        private async void Loaded()
        {
            TokenBar.Visibility = Visibility.Visible;
            var link = "https://www.mira.gov.mv/Default_Eng.aspx";
            var client = new HttpClient();
            var task =
                await client.GetAsync(link);
            var response = task.Content;
            var readtask = response.ReadAsStringAsync();
            readtask.Wait();


            HtmlDocument html = new HtmlDocument();
            html.LoadHtml(readtask.Result);

            var rowNodes = html.DocumentNode.Descendants()
                .Where(n => n.Name == "div").FirstOrDefault(n => n.GetAttributeValue("class", null) == "rightBar");


            var rightBox = rowNodes.Descendants()
                .Where(n => n.Name == "div").Where(n => n.GetAttributeValue("class", null) == "rightBarBox").ToList();
            var rightHeader = rowNodes.Descendants()
                .Where(n => n.Name == "div").Where(n => n.GetAttributeValue("class", null) == "rightBarHeader").ToList();

            var miraList = new List<Mira>();
            int i = 0;
            foreach (var box in rightBox)
            {
                if (i > 1)
                {
                    var mira = new Mira();
                    mira.Title = Clean.Text(rightHeader.ElementAt(i - 1).InnerText);

                    var list = new List<TokenList>();
                    var firstDiv = box.Element("div");
                    var tableDiv = firstDiv.Element("table");
                    //var tbodyDiv = tableDiv.Element("tbody");
                    var trDiv = tableDiv.Element("tr");
                    var mList = trDiv.Elements("td").ToList();
                    foreach (var m in mList)
                    {
                        var token = new TokenList();
                        token.Title = m.Descendants()
                            .Where(n => n.Name == "p")
                            .FirstOrDefault(n => n.GetAttributeValue("class", null) == "Counter_Tokens_Text").InnerText;
                        token.Token = m.Descendants()
                            .Where(n => n.Name == "p")
                            .FirstOrDefault(n => n.GetAttributeValue("class", null) == "counter_tokens").InnerText;
                        list.Add(token);
                    }

                    mira.TokenList.AddRange(list);
                    miraList.Add(mira);
                }
                i++;
            }

            MiraList.ItemsSource = miraList;
            TokenBar.Visibility = Visibility.Collapsed;
        }

        private void Refresh_Click(object sender, RoutedEventArgs e)
        {
            MiraList.ItemsSource = null;
            Loaded();
        }
    }
}