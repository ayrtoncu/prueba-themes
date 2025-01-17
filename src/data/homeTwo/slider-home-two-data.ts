import { IHomeTwoSliderData } from "@/interFace/interFace";
import bannerImgOne from "../../../public/assets/images/banner/home-banner/banner-1parapente.jpg";
import bannerImgTwo from "../../../public/assets/images/banner/home-banner/banner-2-women-rappel-1.jpg";
import bannerImgThree from "../../../public/assets/images/banner/home-banner/banner-3-women-in-peru.jpg";

export const sliderData: IHomeTwoSliderData[] = [
  {
    id: 1,
    bgImg: bannerImgOne,
    tagOne: "Mountain Serenity: Finding",
    tagTwo: "Peace",
    tagThree: "Amidst Alpine Majesty",
    description:
      "A picturesque picnic for two, basking in nature's serenity, forging memories to last a lifetime.",
  },
  {
    id: 2,
    bgImg: bannerImgThree,
    tagOne: " Conquering the Waves:",
    tagTwo: "Thrilling",
    tagThree: "Water Mount Adventure",
    description:
      "Riding the waves: A man finds joy and adventure on his water mount.",
  },
];
