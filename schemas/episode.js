import React from 'react';
import { IoIosRadio } from "react-icons/io";
// https://react-icons.netlify.com/#/icons/io

export default {
  title: "Episode",
  name: "episode",
  type: "document",
  icon: IoIosRadio,
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
  ],
  preview: {
    select: {
      name: "name",
      description: "description",
      artworkUrl: "artworkUrl"
    },
    prepare(selection) {
      const { name, description, artworkUrl } = selection;
      return {
        title: name,
        subtitle: description,
        media: <img src={artworkUrl} />
      };
    }
  }
};
