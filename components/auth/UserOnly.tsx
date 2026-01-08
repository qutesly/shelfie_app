import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import ThemedLoader from "../ThemedLoader";

export default function UserOnly({ children }: { children: React.ReactNode }) {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [authChecked, user]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  return children;
}
