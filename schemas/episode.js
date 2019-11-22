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
      title: "Mini Description",
      name: "miniDescription",
      type: "text"
    },
    {
      title: "Artwork Url",
      name: "artworkUrl",
      type: "string"
    },
    {
      title: "RealArtwork Url",
      name: "realArtworkUrl",
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
      title: "Episode Number",
      name: "episodeNumber",
      type: "number",
      validation: Rule => Rule.required()
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
    },
    {
      title: "Guest Mixes",
      name: "guestMixes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "guestMix"}]
        }
      ]
    },
    {
      title: "Photo Credit",
      name: "photoCredit",
      type: "string"
    }
  ],
  preview: {
    select: {
      name: "name",
      description: "description",
      realArtworkUrl: "realArtworkUrl"
    },
    prepare(selection) {
      const { name, description, realArtworkUrl } = selection;
      return {
        title: name,
        subtitle: description,
        media: <img src={realArtworkUrl} />
      };
    }
  }
};
