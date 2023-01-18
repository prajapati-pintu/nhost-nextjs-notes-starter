import { NhostClient } from "@nhost/nextjs";

// TODO: Update subdomain and region to your own project.
const nhost = new NhostClient({
  subdomain: "mgqsrjjnvjtfarnhvypi",
  region: "eu-west-2",
});

export { nhost };
