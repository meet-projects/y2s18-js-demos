// DEMO 1: Object to String
var person = {
  firstName: "Matthew",
  lastName: "Feng",
  age: 19,
  favoriteFoods: ["dumplings", "kiwi"],
  job: {
    position: "Research Intern",
    company: "NIST"
  },
  fullName: function () {
    this.firstName + " " + this.lastName;
  }
}

document.write(JSON.stringify(person));

// DEMO 2: String to Object
var youtubeDataJSON = `
{
    "kind": "youtube#searchListResponse",
    "nextPageToken": "CAUQAA",
    "regionCode": "KE",
    "pageInfo": {
        "totalResults": 4249,
        "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#channel",
            "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
        }
      },
      {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "Eqa2nAAhHN0"
        }
      },
      {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "IirngItQuVs"
        }
      }
    ]
}
`

var youtubeData = JSON.parse(youtubeDataJSON);
// Showcase parts of youtubeData