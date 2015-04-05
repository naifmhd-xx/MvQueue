#region

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkID=390556
using System.Linq;
using System.Net.Http;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;
using MvQueue.Common;
using MvQueue.Model;
using Newtonsoft.Json;

#endregion

namespace MvQueue.View
{
    /// <summary>
    ///     An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class SbiPage : Page
    {
        private readonly NavigationHelper _navigationHelper;

        public SbiPage()
        {
            InitializeComponent();

            _navigationHelper = new NavigationHelper(this);
            _navigationHelper.LoadState += NavigationHelper_LoadState;
            _navigationHelper.SaveState += NavigationHelper_SaveState;
            TokenBar.Visibility = Visibility.Collapsed;
        }

        public NavigationHelper NavigationHelper
        {
            get { return _navigationHelper; }
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
            //TokenBar.Visibility = Visibility.Collapsed;
        }

        private async void Loaded()
        {
            TokenBar.Visibility = Visibility.Visible;
            const string link = "http://www.sbimaldives.com/tokensWeb/api/token/data";
            var client = new HttpClient();
            var task =
                await client.GetAsync(link);
            var response = task.Content;
            var readtask = response.ReadAsStringAsync();
            readtask.Wait();


            var sbi = JsonConvert.DeserializeObject<Sbi>(readtask.Result);
            var tokenList =
                sbi.tokenPoints.Select(row => new TokenList {Title = row.name, Token = row.value.ToString()}).ToList();

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