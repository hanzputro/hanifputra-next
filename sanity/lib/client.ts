import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || process.env.SANITY_STUDIO_DATASET,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
