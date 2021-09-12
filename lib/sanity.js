import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "tgzghwcv",
    dataset: "production",
    useCdn: true
});