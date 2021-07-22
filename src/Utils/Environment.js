let APIURL = "";
let NPSKEY = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1" :
    APIURL = "http://localhost:3001"
    NPSKEY = "juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc";
    break;

  case "park-planner-app.herokuapp.com" :
    APIURL = "https://park-planner-api.herokuapp.com"
    NPSKEY = "juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc"
}

export default APIURL;