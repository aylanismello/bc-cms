export default {
  title: "EpisodeSelection",
  name: "episodeSelection",
  type: "document",
  fields: [
    {
      title: "Number",
      name: "num",
      type: "string"
    },
    {
      title: "Selection",
      name: "selection",
      type: "reference",
      to: [{ type: "track"}]
    }
  ]
};
