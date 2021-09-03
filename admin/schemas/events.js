export default {
    title: 'Events',
    name: 'events',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: '96',
            },
        },
        {
            title: 'Event Content',
            name: 'content',
            type: 'text',
        },
        {
            title: 'Published At',
            name: 'publishedAt',
            type: 'date',
        },
    ],
}