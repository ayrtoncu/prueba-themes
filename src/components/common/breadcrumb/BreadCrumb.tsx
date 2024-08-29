import Link from "next/link";
import React from "react";
import breadcrumbBg from "../../../../public/assets/images/bg/breadcrumb-bg.png";
type TProps = {
  titleOne: string | undefined;
  titleTwo?: string | undefined;
  image?: string | undefined;
};
const Breadcrumb = ({ titleOne, titleTwo, image }: TProps) => {
  const imagen = "https://admin.7wondersperu.com/wp-content/uploads/" + image;
  return (
    <>
      <section className="bd-breadcrumb-area p-relative fix">
        {/*breadcrumb background image*/}
        <div
          className="bd-breadcrumb-bg"
          style={{ backgroundImage: `url(${image ? imagen : breadcrumbBg.src})`, backgroundPosition: "center" }}
        ></div>
        <div className="bd-breadcrumb-wrapper p-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="bd-breadcrumb d-flex align-items-center justify-content-center">
                  <div className="bd-breadcrumb-content text-center">
                    <h1 className="bd-breadcrumb-title">{titleOne}</h1>
                    <div className="bd-breadcrumb-list">
                      <span>
                        <Link href="/">
                          <i className="icon-home"></i>Home
                        </Link>
                      </span>
                      <span>{titleTwo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
