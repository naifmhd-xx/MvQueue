using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Popups;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Media.Imaging;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkID=390556
using HtmlAgilityPack;
using MvQueue.Common;
using MvQueue.Model;

namespace MvQueue.View
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class AdkPage : Page
    {
        private readonly NavigationHelper navigationHelper;
        public AdkPage()
        {
            this.InitializeComponent();
            TokenBox.Text = "9877671";
            StatusBlock.Visibility = Visibility.Collapsed;
            TokenPanel.Visibility = Visibility.Collapsed;
            TokenBar.Visibility = Visibility.Collapsed;

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
        }

        private void NavigationHelper_SaveState(object sender, SaveStateEventArgs e)
        {
            // TODO: Save the unique state of the page here.
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private async void Check_Click(object sender, RoutedEventArgs e)
        {

            if (TokenBox.Text!="" && TokenBox.Text!=string.Empty)
            {
                StatusBlock.Visibility = Visibility.Collapsed;
                TokenPanel.Visibility = Visibility.Collapsed;
                TokenBar.Visibility = Visibility.Visible;
                

                var link = string.Format("http://www.adkhospital.mv/en/memo/?id={0}",TokenBox.Text);
                var client = new HttpClient();
                var task =
                    await client.GetAsync(link);
                var response = task.Content;
                var readtask = response.ReadAsStringAsync();
                readtask.Wait();

                HtmlDocument html = new HtmlDocument();
                html.LoadHtml(readtask.Result);

                var memoData = html.DocumentNode.Descendants()
                    .Where(n => n.Name == "div").FirstOrDefault(n => n.GetAttributeValue("id", null) == "memo-data");

                var memo = memoData.Descendants().Where(n => n.Name == "div").FirstOrDefault(n => n.GetAttributeValue("class", null) == "row");

                if (memo != null)
                {
                    StatusBlock.Visibility = Visibility.Collapsed;
                    TokenPanel.Visibility = Visibility.Visible;

                    var spans = memo.Elements("div").ToList();

                    var tokenNode = spans.ElementAt(0).Descendants().Where(n => n.Name == "div").FirstOrDefault(n => n.GetAttributeValue("class", null) == "card");
                    var tokenNumber = tokenNode.Element("h1").InnerText;

                    var doctorNode = spans.ElementAt(1).Descendants().FirstOrDefault(n => n.Name == "div");
                    var doctorName = doctorNode.Element("h3").InnerText;

                    var roomNode = spans.ElementAt(2).Descendants().FirstOrDefault(n => n.Name == "div");
                    var roomName = roomNode.InnerText;

                    TokenNumber.Text = "Token Number: " + tokenNumber;
                    DoctorName.Text = doctorName;
                    RoomNumber.Text = Clean.Text(roomName);
                    NowServing.Text = Clean.Text(tokenNode.InnerText);
                    MemoNumber.Text = "Memo Number: " + TokenBox.Text;
                    

                }
                else
                {
                    StatusBlock.Visibility = Visibility.Visible;
                    TokenPanel.Visibility = Visibility.Collapsed;

                    StatusBlock.Text = Clean.Text(memoData.InnerText);
                }
                TokenBar.Visibility = Visibility.Collapsed;
                
            }
        }
    }
}
