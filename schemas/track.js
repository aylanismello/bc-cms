export default {
  title: "Track",
  name: "track",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Permalink Url",
      name: "permalink",
      type: "url"
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "date"
    },
    {
      title: "Time Code",
      name: "timeCode",
      type: "string"
    },
    {
      title: "Streaming Platform",
      name: "streamingPlatform",
      type: "string"
    },
    {
      title: "Real Artist Soundcloud Url",
      name: "realArtistSoundcloudUrl",
      type: "url"
    },
    {
      title: "Real Artist Name",
      name: "realArtistName",
      type: "string"
    },
    {
      title: "Artwork Url",
      name: "artworkUrl",
      type: "url"
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "timeCode"
    }
  },
  orderings: [
    {
      title: "Time Code, Earliest",
      name: "timeCodeAsc",
      by: [{ field: "timeCode", direction: "asc" }]
    }
  ]
};
