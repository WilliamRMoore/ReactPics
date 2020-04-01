import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Gq-pdAKCyxoYcrSCVT-EflnaNDRv8I3_IXkeRfkai38"
  }
});
