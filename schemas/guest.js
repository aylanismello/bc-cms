import { IoIosPerson } from "react-icons/io";

export default {
  title: "Guest",
  name: "guest",
  icon: IoIosPerson,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Image Url",
      name: "imageUrl",
      type: "url"
    },
    {
      title: "Soundcloud Url",
      name: "soundcloudUrl",
      type: "url"
    },
    {
      title: "Location",
      name: "location",
      type: "object",
      fields: [
        {
          title: "City",
          name: "city",
          type: "string"
        },
        {
          title: "Region",
          name: "region",
          type: "string"
        },
        {
          title: "Country",
          name: "country",
          type: "string"
        }
      ]
    }
  ]
};
