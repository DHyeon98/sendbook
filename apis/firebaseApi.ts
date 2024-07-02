import { auth, db } from "@/firebase/firebase";
import { SignUpType } from "@/types/signup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export const postBookApi = async (data: any, collectionName: string) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await addDoc(collection(db, collectionName), { data });
  } catch (error) {
    console.log(error);
  }
};

export const signUpApi = async (data: SignUpType) => {
  try {
    // email과 password를 사용해 계정 생성
    // 첫 번째 인자 : 인증 인스턴스, 두 번째 인자 : 이메일, 세 번째 인자: 패스워드
    // 성공 시 즉시 로그인, 실패할 경우는 계정이 이미 존재하거나 패스워드가 유효하지 않은 경우.
    const credentials = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(credentials.user);
    // 첫 번째 인자 : 업데이트 할 프로필, 두 번째 인자 : 닉네임 값 or 이미지 url
    await updateProfile(credentials.user, {
      displayName: data.username,
    });
  } catch {
    console.log("이메일이 중복되었습니다.");
  }
};
