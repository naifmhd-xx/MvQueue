#region

using System.Collections.Generic;
using System.Net.Http;
using System.Xml.Linq;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;
using MvQueue.Common;
using MvQueue.Model;

#endregion

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkID=390556

namespace MvQueue.View
{
    /// <summary>
    ///     An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MibPage : Page
    {
        private readonly NavigationHelper navigationHelper;

        public MibPage()
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
            TokenList.ItemsSource = null;
            Loaded();
        }

        private async void Loaded()
        {
            TokenBar.Visibility = Visibility.Visible;
            var link = "http://www.mib.com.mv/token/xml.php";
            var client = new HttpClient();
            var task =
                await client.GetAsync(link);
            var response = task.Content;
            var readtask = response.ReadAsStringAsync();
            readtask.Wait();

            XDocument xml = XDocument.Parse(readtask.Result);

            List<TokenList> tokenList = new List<TokenList>();

            IEnumerable<XElement> drinkList = xml.Descendants("queue");

            foreach (var drink in drinkList)
            {
                var token = new TokenList();
                token.Title = drink.Element("name").Value;
                token.Token = drink.Element("number").Value;
                tokenList.Add(token);
            }

            TokenList.ItemsSource = tokenList;
            TokenBar.Visibility = Visibility.Collapsed;
        }

        private void Refresh_Click(object sender, RoutedEventArgs e)
        {
            TokenList.ItemsSource = null;
            Loaded();
        }
    }
}