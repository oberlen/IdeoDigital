const DataAPI = async () => {
  try {
    const SHEET_ID = "17S2VHKfFK3y9k20OtLs1QpQSeA-ha61TpLYS6wucV7I";
    const SHEET_NAME = "sheet1";
    const API_KEY = "AIzaSyBLzNeYvq3gWXYIQPZZM4b_PjOMmd17Gsk";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`;

    let data = await fetch(url, {
      method: "GET",
      withCredentials: true,
      crossorigin: true,
      mode: "no-cors",
    });
    let { values } = await data.json();
    let [, ...Data] = values.map((data) => data);
    return Data;
  } catch {
    console.log("Oops its an Error");
  }
};
export default DataAPI;
