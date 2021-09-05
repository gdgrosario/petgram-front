/* svgs */
import home from "assets/svgs/icons/home.svg";
import search from "assets/svgs/icons/search.svg";
import video from "assets/svgs/icons/video.svg";
import store from "assets/svgs/icons/store.svg";

const avatar =
  "https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png";

export const getActionButtons = [
  {
    id: 1,
    path: "/",
    src: home,
    alt: "home",
  },
  {
    id: 2,
    path: "/",
    src: search,
    alt: "search",
  },
  {
    id: 3,
    path: "/",
    src: video,
    alt: "video",
  },
  {
    id: 4,
    path: "/",
    src: store,
    alt: "store",
  },
  {
    id: 5,
    path: "/me",
    src: avatar,
    alt: "avatar",
  },
];
