/* svgs */
import { ReactComponent as home }  from "assets/svgs/icons/home.svg";
import { ReactComponent as search }  from "assets/svgs/icons/search.svg";
import { ReactComponent as video }  from "assets/svgs/icons/video.svg";
import { ReactComponent as store }  from "assets/svgs/icons/store.svg";

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
    path: "/me",
    src: avatar,
    alt: "avatar",
  },
];
