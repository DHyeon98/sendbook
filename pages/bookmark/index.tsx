import { postBookApi } from "@/apis/firebaseApi";
import { bookSearchApi } from "@/apis/naverBookApi";
import { useGetBook } from "@/hooks/useGetBook";

export default function Bookmark() {
  const TEST_DATA = {
    bookname: "책이름",
    date: "2020-11-11",
    price: 10000,
    description: "테스트 description",
    author: "작가명",
  };
  const handleClick = async () => {
    await postBookApi(TEST_DATA, "books");
  };
  const { data } = useGetBook();
  const handleSearch = async () => {
    // const response = await bookSearchApi();
    // console.log(response);
    console.log(data);
  };
  return (
    <div>
      <p>북마크 페이지</p>
      <button type="button" onClick={handleClick}>
        버튼
      </button>
      <button type="button" onClick={handleSearch}>
        책 정보 가져오기
      </button>
    </div>
  );
}
