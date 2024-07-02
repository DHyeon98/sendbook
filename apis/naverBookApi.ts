import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
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
