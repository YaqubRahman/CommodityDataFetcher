require("dotenv").config();
const axios = require("axios");

const API_KEY = process.env.API_KEY;

async function main() {
  try {
    const response = await axios.get(
      "https://api.oilpriceapi.com/v1/prices/latest",
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data");
  }
}

main();
