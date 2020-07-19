import axios from "axios";
import { endpoints } from "../constants";

const bibleApi = axios.create({
  baseURL: endpoints.bibleApi.BASE_URL,
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlN1biBKdWwgMTkgMjAyMCAxNzozMjowNCBHTVQrMDAwMC41ZjE0ODM4YjA2MTk2YTAwMjMzZGRlMWQiLCJpYXQiOjE1OTUxNzk5MjR9.HxHvsxfcQrhZi9nduROiVVgQpFUw2iY3B3waCiqmEpI",
  },
});

export { bibleApi };
