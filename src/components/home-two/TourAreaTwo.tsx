import React from "react";
import TourSingleCard from "../common/tourElements/TourSingleCard";
import BookingFormModal from "@/elements/modals/BookingFormModal";
import TitleTourArea from "./TitleTourArea";
import { getAllToursCards } from "@/lib/tours";
import bgchacana from "../../../public/assets/images/bg/pattern3.jpg"
export default async function TourAreaTwo({ lang }: { lang: string }) {
  // console.log(lang)
  const configLang = lang;
  const tours = await getToursCards(configLang);
  // console.log(tours)
  return (
    <>
      <section className="bd-service-area section-space" style={{ backgroundImage: `url(${bgchacana.src})` }}>
        <div className="container">
          <TitleTourArea />
          <div className="row gy-24">
            {tours &&
              tours.nodes.map((tour: any, index: string) => (
                <TourSingleCard
                  key={index}
                  tour={tour}
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                  tourWrapperClass="tour-wrapper style-one"
                  isparentClass={true}
                />
              ))}
          </div>
        </div>
      </section>
      <BookingFormModal />
    </>
  );
}

export async function getToursCards(idioma: string) {
  const tours = await getAllToursCards(idioma);
  return tours;
}
