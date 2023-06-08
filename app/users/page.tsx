import React from "react";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  console.log("HI");

  const content = (
    <section>
      <h2>
        <Link href="/">Back To Home</Link>
      </h2>
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
              <br />
            </p>
          </>
        );
      })}
    </section>
  );

  return content;
}
