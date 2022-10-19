import Button from "../../components/Common/Button";
import { AuthWrapper } from "./components/AuthWrapper";
import InputWithLabel from "./components/InputWithLabel";
import RightLink from "./components/RightLink";

export default function Register() {
  return (
    <AuthWrapper title="회원가입">
      <InputWithLabel label="이메일" name="email" placeholder="이메일" />
      <InputWithLabel label="아이디" name="username" placeholder="아이디" />
      <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" />
      <InputWithLabel
        label="비밀번호 확인"
        name="passwordCheck"
        placeholder="비밀번호 확인"
      />
      <Button>회원가입</Button>
      <RightLink to="/signin">로그인</RightLink>
    </AuthWrapper>
  );
}
