import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="auth_flex">
      <SignIn />
    </div>
  );
}