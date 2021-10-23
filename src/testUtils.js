import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser",
  first_name: "testfirst",
  last_name: "testlast",
  email: "test@test.net",
  photo_url: null,
};

const demoQueueVideo = {
  username: 'testuser2',
  type: 'video',
  action: 'add',
  text: '"testVideoTitle" added to queue for user: "testuser2".',
  videoId: 'testVideoId',
  title: 'testVideoTitle',
  description: 'testDescription',
  thumbnail: 'testThumbnail'
}
const demoSearchVideo = { "kind": "youtube#searchResult", "etag": "3_5Vn-wWRzIN5QC7aOEWvZsmMwI", "id": { "kind": "youtube#video", "videoId": "GjbibR6DV1s" }, "snippet": { "publishedAt": "2015-08-11T17:03:57Z", "channelId": "UCi_ZH3bYHidyHsETH5hbTFQ", "title": "Dusky - Skin Deep (Official Video)", "description": "Dusky's EP 'Ordinary World' is out now. iTunes:http://po.st/DuskyowEP Spotify: http://po.st/DuskyOWSp Beatport: http://po.st/OrdinaryWorldEP \"This EP was all ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/GjbibR6DV1s/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/GjbibR6DV1s/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/GjbibR6DV1s/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "DuskyMusic", "liveBroadcastContent": "none", "publishTime": "2015-08-11T17:03:57Z" } }

const testRoom = {
  "id": 1,
  "roomOwner": "testadmin",
  "roomName": "testadmin",
  "roomMembers": null,
  "videoQueue": null,
  "hasPass": true,
  "created_at": "2021-10-22T10:34:59.443Z"
}
const UserProvider =
  ({ children, currentUser = demoUser }) => (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );

export { UserProvider, demoUser, demoQueueVideo, demoSearchVideo, testRoom };

