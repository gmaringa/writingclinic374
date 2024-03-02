import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="auth_flex">
      <SignUp />
    </div>
  );
} 