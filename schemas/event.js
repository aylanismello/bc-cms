import { FaCalendarPlus } from "react-icons/fa";

export default {
  title: "Event",
  name: "event",
  type: "document",
  icon: FaCalendarPlus,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Date",
      name: "date",
      type: "date",
      validation: Rule => Rule.required()
    },
    {
      title: "Event Url",
      name: "eventUrl",
      type: "url"
    },
    {
      title: "Image Url",
      name: "imageUrl",
      type: "url"
    },
    {
      title: "Host",
      name: "host",
      type: "reference",
      to: [{ type: "curator" }]
    }
  ]
};
