import axios from "axios";
import { endpoints } from "../constants";

const bibleApi = axios.create({
  baseURL: endpoints.bibleApi.BASE_URL,
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBKdWwgMjAgMjAyMCAyMjowMzoyMCBHTVQrMDAwMC41ZjE0ODM4YjA2MTk2YTAwMjMzZGRlMWQiLCJpYXQiOjE1OTUyODI2MDB9.V9bqdLVQs0zho-TUCoQiOJQcHFNp3_u2zk2C0HhTXN4",
  },
});

export { bibleApi };
