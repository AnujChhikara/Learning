const client = require("./client");

async function init() {
  await client.lpush("message", 1);
  await client.lpush("message", 1);
  await client.lpush("message", 1);
  await client.lpush("message", 1);
  const result = await client.blpop("message", 10);
  console.log(result);
}

init();
