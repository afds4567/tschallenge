import Button from "../../components/Common/Button";
import { AuthWrapper } from "./components/AuthWrapper";
import InputWithLabel from "./components/InputWithLabel";

export default function SignIn() {
  return (
    <AuthWrapper title="로그인">
      <InputWithLabel label="이메일" name="email" placeholder="이메일" />
      <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" />
      <Button>로그인</Button>
    </AuthWrapper>
  );
}
