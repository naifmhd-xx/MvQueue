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
    public sealed partial class ImmigrationPage : Page
    {
        private readonly NavigationHelper navigationHelper;

        public ImmigrationPage()
        {
            InitializeComponent();
            navigationHelper = new NavigationHelper(this);
            navigationHelper.LoadState += NavigationHelper_LoadState;
            navigationHelper.SaveState += NavigationHelper_SaveState;
            TokenBar.Visibility = Visibility.Visible;
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
            ImmigrationList.ItemsSource = null;
            Loaded();
            //TokenBar.Visibility = Visibility.Collapsed;
        }

        private async void Loaded()
        {
            TokenBar.Visibility = Visibility.Visible;
            var link = "http://www.immigration.gov.mv/";
            var client = new HttpClient();
            var task =
                await client.GetAsync(link);
            var response = task.Content;
            var readtask = response.ReadAsStringAsync();
            readtask.Wait();


            var html = new HtmlDocument();
            html.LoadHtml(readtask.Result);

            var rowNodes = html.DocumentNode.Descendants()
                .Where(n => n.Name == "div").FirstOrDefault(n => n.GetAttributeValue("id", null) == "zt-right-inner");


            var moduleBox = rowNodes.Descendants()
                .Where(n => n.Name == "div").Where(n => n.GetAttributeValue("class", null) == "moduletable").ToList();

            var immigList = new List<Mira>();

            foreach (var box in moduleBox)
            {
                var module =
                    box.Descendants()
                        .Where(n => n.Name == "div")
                        .FirstOrDefault(n => n.GetAttributeValue("class", null) == "ztmodule");
                var immig = new Mira();
                immig.Title =
                    Clean.Text(
                        module.Descendants()
                            .Where(n => n.Name == "div")
                            .FirstOrDefault(n => n.GetAttributeValue("class", null) == "moduletitle")
                            .InnerText);

                var list = new List<TokenList>();

                var firstDiv =
                    module.Descendants()
                        .Where(n => n.Name == "div")
                        .FirstOrDefault(n => n.GetAttributeValue("class", null) == "modulecontent");

                var queueDiv =
                    firstDiv.Descendants()
                        .Where(n => n.Name == "div")
                        .FirstOrDefault(n => n.GetAttributeValue("id", null) == "queue_dsp");
                if (queueDiv != null)
                {
                    var centreDiv = queueDiv.Element("center");
                    var issueDiv = centreDiv.Element("div");

                    var div = issueDiv.Elements("div").ToList();


                    var token = new TokenList();
                    token.Title = Clean.Html(div.FirstOrDefault().InnerText);
                    token.Token = Clean.Html(div.LastOrDefault().InnerText);
                    list.Add(token);

                    immig.TokenList.AddRange(list);
                    immigList.Add(immig);
                }
                else
                {
                    var div = firstDiv.Elements("div").ToList();

                    foreach (var d in div)
                    {
                        var node = d.Element("center");
                        var element = node.Elements("div").ToList();
                        var token = new TokenList();
                        token.Title = Clean.Html(element.FirstOrDefault().InnerText);
                        token.Token = Clean.Html(element.LastOrDefault().InnerText);
                        list.Add(token);
                    }
                    immig.TokenList.AddRange(list);
                    immigList.Add(immig);
                }
            }

            ImmigrationList.ItemsSource = immigList;
            TokenBar.Visibility = Visibility.Collapsed;
        }

        private void Refresh_Click(object sender, RoutedEventArgs e)
        {
            ImmigrationList.ItemsSource = null;
            Loaded();
        }
    }
}