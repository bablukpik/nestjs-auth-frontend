import { cookies } from "next/headers";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const usersRes = await fetch(`${process.env.API_URL}/users`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const users = await usersRes.json();

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5 overflow-hidden">
      {users?.map((user: any) => (
        <p key={user.email}>{user.email}</p>
      ))}
      <LogoutButton />
    </div>
  );
}
