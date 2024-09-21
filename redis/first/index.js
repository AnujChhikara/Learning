const client = require("./client.js");

async function init() {
  //   const set = await client.set("user:01", "anuj");
  //   console.log(set);
  await client.expire("user:01", 10); //to expire the key value after 10 second
  const result = await client.get("user:01");
  console.log(result);
}

init();
