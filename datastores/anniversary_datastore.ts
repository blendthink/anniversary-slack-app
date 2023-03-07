import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

export const DATASTORE_NAME = "anniversary";

export const AnniversaryDatastore = DefineDatastore({
  name: DATASTORE_NAME,
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
      required: true,
    },
    name: {
      type: Schema.types.string,
      required: true,
    },
    date: {
      type: Schema.types.string,
      required: true,
    },
  },
});
