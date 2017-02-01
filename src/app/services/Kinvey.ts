export class Kinvey {
    public static  baseUrl: string = 'https://baas.kinvey.com/';
    public static  appKey: string = 'kid_HkgPo1uUg';
    public static  appSecret: string = 'e1a79b705c58467d9281e929582eb7ec';

    public static appAuthHeaders() {
    return "Basic " + btoa(Kinvey.appKey + ":" + Kinvey.appSecret)
  }

  public static appAuthTokenHeaders() {
    console.log(sessionStorage.getItem("authToken"))
    return "Kinvey " + sessionStorage.getItem("authToken")
  }
}
