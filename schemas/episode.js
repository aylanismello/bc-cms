export default {
  title: "Episode",
  name: "episode",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Artwork Url",
      name: "artworkUrl",
      type: "url"
    },
    {
      title: "Soundcloud Url",
      name: "soundcloudUrl",
      type: "url"
    },
    {
      title: "Spotify Url",
      name: "spotifyUrl",
      type: "url"
    },
    {
      title: "Tracklist",
      name: "tracklist",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "track" }]
        }
      ]
    },

    {
      title: "Guest Mix",
      name: "guestMix",
      type: "object",
      fields: [
        {
          title: "Guest",
          name: "guest",
          type: "reference",
          to: [{ type: "guest" }]
        },
        {
          title: "Tracklist",
          name: "guestTracklist",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "track" }]
            }
          ]
        }
      ]
    }
  ]
};
