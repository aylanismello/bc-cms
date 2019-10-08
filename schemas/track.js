import { FaMusic } from "react-icons/fa";

export default {
  title: "Track",
  name: "track",
  type: "document",
  icon: FaMusic,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
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
      type: "string",
      validation: Rule => Rule.required()
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
    },
    {
      title: "Episode Number",
      name: "episodeNumber",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      title: "Flames",
      name: "flames",
      type: "number",
      validation: Rule => Rule.min(1).max(5)
    }
  ],
  preview: {
    select: {
      title: "name",
      timeCode: "timeCode",
      episodeNumber: "episodeNumber"
    },
    prepare(selection) {
      const { title, timeCode, episodeNumber } = selection;
      return {
        title: `(${episodeNumber}) - ${title}`,
        subtitle: timeCode
      };
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
