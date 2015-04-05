#region

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Windows.Data.Json;
using Windows.Storage;

#endregion

// The data model defined by this file serves as a representative example of a strongly-typed
// model.  The property names chosen coincide with data bindings in the standard item templates.
//
// Applications may use this model as a starting point and build on it, or discard it entirely and
// replace it with something appropriate to their needs. If using this model, you might improve app 
// responsiveness by initiating the data loading task in the code behind for App.xaml when the app 
// is first launched.

namespace MvQueue.DataModel
{
    /// <summary>
    ///     Generic item data model.
    /// </summary>
    public class MainDataItem
    {
        public MainDataItem(String uniqueId, String title, String subtitle, String phone, String email, String imagePath)
        {
            UniqueId = uniqueId;
            Title = title;
            Subtitle = subtitle;
            Phone = phone;
            Email = email;
            ImagePath = imagePath;
        }

        public string UniqueId { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; private set; }
        public string Phone { get; private set; }
        public string Email { get; private set; }
        public string ImagePath { get; private set; }

        public override string ToString()
        {
            return Title;
        }
    }

    /// <summary>
    ///     Generic group data model.
    /// </summary>
    public class MainDataGroup
    {
        public MainDataGroup(String uniqueId, String title, String subtitle, String imagePath)
        {
            UniqueId = uniqueId;
            Title = title;
            Subtitle = subtitle;
            ImagePath = imagePath;
            Items = new ObservableCollection<MainDataItem>();
        }

        public string UniqueId { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; private set; }
        public string ImagePath { get; private set; }
        public ObservableCollection<MainDataItem> Items { get; set; }

        public override string ToString()
        {
            return Title;
        }
    }

    /// <summary>
    ///     Creates a collection of groups and items with content read from a static json file.
    ///     MainDataSource initializes with data read from a static json file included in the
    ///     project.  This provides main data at both design-time and run-time.
    /// </summary>
    public sealed class MainDataSource
    {
        private static readonly MainDataSource _mainDataSource = new MainDataSource();

        private readonly ObservableCollection<MainDataGroup> _groups = new ObservableCollection<MainDataGroup>();

        public ObservableCollection<MainDataGroup> Groups
        {
            get { return _groups; }
        }

        public static async Task<IEnumerable<MainDataGroup>> GetGroupsAsync()
        {
            await _mainDataSource.GetMainDataAsync();

            return _mainDataSource.Groups;
        }

        public static async Task<MainDataGroup> GetGroupAsync(string uniqueId)
        {
            await _mainDataSource.GetMainDataAsync();
            // Simple linear search is acceptable for small data sets
            var matches = _mainDataSource.Groups.Where(group => group.UniqueId.Equals(uniqueId));
            if (matches.Count() == 1) return matches.First();
            return null;
        }

        public static async Task<MainDataItem> GetItemAsync(string uniqueId)
        {
            await _mainDataSource.GetMainDataAsync();
            // Simple linear search is acceptable for small data sets
            var matches =
                _mainDataSource.Groups.SelectMany(group => group.Items).Where(item => item.UniqueId.Equals(uniqueId));
            if (matches.Count() == 1) return matches.First();
            return null;
        }

        private async Task GetMainDataAsync()
        {
            if (_groups.Count != 0)
                return;

            Uri dataUri = new Uri("ms-appx:///DataModel/MainData.json");

            StorageFile file = await StorageFile.GetFileFromApplicationUriAsync(dataUri);
            string jsonText = await FileIO.ReadTextAsync(file);
            JsonObject jsonObject = JsonObject.Parse(jsonText);
            JsonArray jsonArray = jsonObject["Groups"].GetArray();

            foreach (var jsonValue1 in jsonArray)
            {
                var groupValue = (JsonValue) jsonValue1;
                JsonObject groupObject = groupValue.GetObject();
                MainDataGroup group = new MainDataGroup(groupObject["UniqueId"].GetString(),
                    groupObject["Title"].GetString(),
                    groupObject["Subtitle"].GetString(),
                    groupObject["ImagePath"].GetString());

                foreach (var jsonValue in groupObject["Items"].GetArray())
                {
                    var itemValue = (JsonValue) jsonValue;
                    JsonObject itemObject = itemValue.GetObject();
                    group.Items.Add(new MainDataItem(itemObject["UniqueId"].GetString(),
                        itemObject["Title"].GetString(),
                        itemObject["Subtitle"].GetString(),
                        itemObject["Phone"].GetString(),
                        itemObject["Email"].GetString(),
                        itemObject["ImagePath"].GetString()));
                }
                Groups.Add(group);
            }
        }
    }
}