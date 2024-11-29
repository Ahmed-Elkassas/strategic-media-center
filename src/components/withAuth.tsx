"use client";

import React, {useEffect, useState} from "react";
import { useRouter } from "@/i18n/routing";

import { isAuthenticated } from "@/utils/auth";

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
  return function WithAuthComponent(props: P) {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
      const authStatus = isAuthenticated();
      setIsAuth(authStatus);
      setIsLoading(false);
      if (!authStatus) {
        // Redirect to login page if not authenticated
        router.push("/login");
      }
    }, [router]);

    if (isLoading) {
      // Render a consistent loading state on both server and client
      return <div className="h-[400px] flex justify-center items-center">جاري التحميل...</div>;
    }

    // Render the component only if authenticated
    return isAuth  ? <WrappedComponent {...props} /> : null;
  };
}
