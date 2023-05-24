const DataAPI = async () => {
  try {
    let data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/11ATz1c10lgrweE07OAwbfS9WYg9Heq0TKec1C4shbW0/edit?pli=1#gid=0/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyBLzNeYvq3gWXYIQPZZM4b_PjOMmd17Gsk",
      {
        method: "GET",
        withCredentials: true,
        crossorigin: true,
        mode: "no-cors",
      }
    );
    let { values } = await data.json();
    let [, ...Data] = values.map((data) => data);
    return Data;
  } catch {
    console.log("Oops its an Error");
  }
};
export default DataAPI;
