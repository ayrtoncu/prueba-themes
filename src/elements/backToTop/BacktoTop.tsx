import useScrollDirection from "@/hooks/sticky-header";
// import BackTopIcon from "@/svg/BackTopIcon"
import whatsapp from "../../../public/assets/images/banner/social/icons8-whatsapp-96.png"
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BacktoTop = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection(elementRef.current);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div>
        <div ref={elementRef}>
          <Link target="_blank" className={`backtotop-wrap cursor-pointer ${scrollDirection === "down" ? "active-progress" : ""
            }`} href="https://api.whatsapp.com/send?phone=51991287395">
            <Image width={46} height={46} src={whatsapp} alt="Boton de Whatsapp" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BacktoTop;
