import { Manifest } from "deno-slack-sdk/mod.ts";
import GreetingWorkflow from "./workflows/greeting_workflow.ts";
import { AnniversaryDatastore } from "./datastores/anniversary_datastore.ts"

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Anniversary",
  description:
    "Allows you to register new anniversary, show the number of days elapsed since a specific anniversary, and show the number of days until a future anniversary",
  icon: "assets/icon.png",
  workflows: [GreetingWorkflow],
  datastores: [AnniversaryDatastore],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
  ],
});
