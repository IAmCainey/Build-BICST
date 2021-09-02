// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "Settings",
      name: "settings",
      type: "document",
      fields: [
        {
          title: "Website Name",
          name: "name",
          type: "string",
        },
        {
          title: "Websites TagLine",
          name: "tag",
          type: "string",
        },
      ],
    },
    {
      title: "Events",
      name: "events",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: "96",
          },
        },
        {
          title: "Event Content",
          name: "content",
          type: "text",
        },
        {
          title: "Published At",
          name: "publishedAt",
          type: "date",
        },
      ],
    },
  ]),
})
