import { FaMusic } from "react-icons/fa";

export default {
  title: "Guest Mix",
  name: "guestMix",
  type: "document",
  icon: FaMusic,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Guest",
      name: "guest",
      type: "reference",
      to: [{ type: "curator" }]
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
    },
    {
      title: "Guest Number",
      name: "guestNumber",
      type: "number"
    }
  ]
};
