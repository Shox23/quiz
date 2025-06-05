import axios from "axios";

const apiInstance = axios.create({
  // По хорошему конечно хранить урлы в переменных окружения
  baseURL: "https://opentdb.com",
});

export default apiInstance;
