import Linkedin from "@public/assets/svgs/social-media/linkedin.svg";
import Github from "@public/assets/svgs/social-media/github.svg";
import Twitter from "@public/assets/svgs/social-media/twitter.svg";

export const getTeam = [
  {
    id: 1,
    name: "Henry Letham",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOiMwr8CNq8Q0VqYQN41ER_UToMJoFScEksW58RitS8wk9RtecvDRrSA2Lsvo-1gS2uk&usqp=CAU",
    rol: "UX designer",
    social: [
      {
        id: 1,
        link: "https://linkedin.com",
        icon: Linkedin,
      },
      {
        id: 2,
        link: "https://github.com",
        icon: Github,
      },
      {
        id: 3,
        link: "https://twitter.com",
        icon: Twitter,
      },
    ],
  },
];
