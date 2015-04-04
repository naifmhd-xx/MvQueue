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
using HtmlAgilityPack;
using MvQueue.Common;
using MvQueue.Model;
using Newtonsoft.Json;

namespace MvQueue.View
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class SbiPage : Page
    {
        private readonly NavigationHelper navigationHelper;

        public SbiPage()
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

            var link = "http://www.sbimaldives.com/tokensWeb/api/token/data";
            var client = new HttpClient();
            var task =
                await client.GetAsync(link);
            var response = task.Content;
            var readtask = response.ReadAsStringAsync();
            readtask.Wait();


            var sbi = JsonConvert.DeserializeObject<Sbi>(readtask.Result);
            var tokenList = new List<TokenList>();

            foreach (var row in sbi.tokenPoints)
            {
                var token = new TokenList();
                token.Title = row.name;
                token.Token = row.value.ToString();
                tokenList.Add(token);
            }
            TokenList.ItemsSource = tokenList;

            
        }
    }
}
