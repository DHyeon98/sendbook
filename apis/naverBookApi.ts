import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "fU0_fBXkG__5tbVErVVF",
    "X-Naver-Client-Secret": "szVEjuglHK",
  },
});

export const bookSearchApi = async () => {
  try {
    const response = await instance.get(`/api/v1/search/book.json?query=코딩`);
    console.log(response);
  } catch {
    console.log("에러");
  }
};
