import { IoIosPerson } from "react-icons/io";

export default {
  title: "Curator",
  name: "curator",
  icon: IoIosPerson,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Soundcloud Url",
      name: "soundcloudUrl",
      type: "url",
    },
    {
      title: "Other Name",
      name: "otherName",
      type: "string",
    },
    {
      title: "Other Soundcloud Url",
      name: "otherSoundcloudUrl",
      type: "string",
    },
    {
      title: "Image Url",
      name: "imageUrl",
      type: "url",
    },
    {
      title: "Curator Type",
      name: "curatorType",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Is Rising Enabled",
      name: "isRisingEnabled",
      type: "boolean",
    },
    {
      title: "Is Guest",
      name: "isGuest",
      type: "boolean",
    },
    {
      title: "Location",
      name: "location",
      type: "object",
      fields: [
        {
          title: "City",
          name: "city",
          type: "string",
        },
        {
          title: "Region",
          name: "region",
          type: "string",
        },
        {
          title: "Country",
          name: "country",
          type: "string",
        },
      ],
    },
  ],
  initialValue: {
    isRisingEnabled: true,
    curatorType: "label",
    isGuest: false,
  },
};
