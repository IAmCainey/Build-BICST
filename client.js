import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'rj4qnt4c', // you can find this in sanity.json
    dataset: 'production',
    apiVersion: '2021-08-31', // or the name you chose in step 1
    useCdn: true // `false` if you want to ensure fresh data
})