import { HoppRESTRequest, RESTReqSchemaVersion } from "@hoppscotch/data"

export const getDefaultRESTRequest = (): HoppRESTRequest => ({
  v: RESTReqSchemaVersion,
  endpoint: "",
  name: "Untitled",
  params: [],
  headers: [],
  method: "GET",
  auth: {
    authType: "none",
    authActive: true,
  },
  preRequestScript: "",
  testScript: "",
  body: {
    contentType: null,
    body: null,
  },
})
