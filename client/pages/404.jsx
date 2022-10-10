import { useRouter } from "next/router";
import { useEffect } from "react";
import NoContent from "@components/NoContent";

const PageNotFoud = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return <NoContent>{"404 - Page not found"}</NoContent>;
};

export default PageNotFoud;
