import apiClient from "../utils/apiClient";

export interface CountryDataObj {
  name: string;
}

// Country service doesn't require API_KEY
const api_url = process.env.REACT_APP_COUNTRY_API_URL || "";

class CountryService {
  getCountry = (dataObj: CountryDataObj) =>
    apiClient(api_url).get(`name/${dataObj.name}`);
}

export default new CountryService();
