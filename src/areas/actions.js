import { createAction } from "redux-actions";
import fetch from "fetch-retry";

const gatewayUrl = "https://jci-jcos-dev.azure-api.net";

const bearerToken = "your-auth-token";

const getAreas = createAction("GET_AREAS", async () => {
  const result = await fetch(
    `${gatewayUrl}/plant/7528d644-dcf8-46c4-a075-10f2e2c9c937/areas`,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    }
  );

  const json = await result.json();

  return json;
});

const addLine = createAction("ADD_LINE", async areaId => {
  const createResult = await fetch(
    `${gatewayUrl}/plant/7528d644-dcf8-46c4-a075-10f2e2c9c937/areas/${areaId}/lines`,
    {
      method: "POST",
      body: JSON.stringify({
        retired: false,
        name: "joe test line 22"
      }),
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json"
      }
    }
  );

  //should probaby verify the 202 ...
  const location = createResult.headers.get("location");

  const getResult = await fetch(`${gatewayUrl}/plant/${location}`, {
    retries: 5,
    retryDelay: 1000,
    retryOn: [404],
    headers: {
      Authorization: `Bearer ${bearerToken}`
    }
  });

  const line = await getResult.json();

  //should probably check for null or something
  return {
    areaId,
    line
  };
});

export { addLine, getAreas };
