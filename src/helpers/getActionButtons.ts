/* svgs */
import home from "@public/assets/svgs/icons/home.svg";
import search from "@public/assets/svgs/icons/search.svg";
import video from "@public/assets/svgs/icons/video.svg";
import store from "@public/assets/svgs/icons/store.svg";

const avatar =
  "https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png";

export const getActionButtons = [
  {
    id: 1,
    path: "/",
    icon: home,
    alt: "home",
  },
  {
    id: 2,
    path: "/",
    icon: search,
    alt: "search",
  },
  {
    id: 3,
    path: "/",
    icon: video,
    alt: "video",
  },
  {
    id: 4,
    path: "/",
    icon: store,
    alt: "store",
  },
  {
    id: 5,
    path: "/profile/",
    src: avatar,
    alt: "avatar",
  },
];
