using MvQueue.Common;
using MvQueue.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Xml.Linq;
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
    public sealed partial class MibPage : Page
    {
        private readonly NavigationHelper navigationHelper;
        public MibPage()
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
                token.Title = drinkList.ElementAt(0).Element("name").Value;
                token.Token = drinkList.ElementAt(0).Element("number").Value;
                tokenList.Add(token);
            }

            TokenList.ItemsSource = tokenList;


        }
    }
}
