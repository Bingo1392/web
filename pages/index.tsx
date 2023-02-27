import { useEffect } from "react";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  useEffect(() => {
    router.push("welcome");
  });

  return <></>;
}

export default About;
