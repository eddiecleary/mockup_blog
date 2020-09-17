import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "iejd2c9e",
  dataset: "production",
  useCdn: true,
});
