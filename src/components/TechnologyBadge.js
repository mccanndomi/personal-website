import "./TechnologyBadge.css";

export const TechnologyBadge = ({ technology }) => {
  const images = new Map();

  images.set(
    "Prisma",
    "https://avatars.githubusercontent.com/u/17219288?s=280&v=4"
  );
  images.set(
    "TypeScript",
    "https://iconape.com/wp-content/png_logo_vector/typescript.png"
  );
  images.set(
    "Express",
    "https://symbols.getvecta.com/stencil_79/88_expressjs-icon.e62b12d489.png"
  );
  images.set(
    "Puppeteer",
    "https://cdn.dribbble.com/users/3800131/screenshots/15188869/media/823b8d9b8055e21c18408aca4342ae60.png?compress=1&resize=400x300"
  );
  images.set("JavaScript", "https://usefulangle.com/img/thumb/javascript.png");
  images.set(
    "React Native",
    "https://img.stackshare.io/service/1020/OYIaJ1KK.png"
  );
  images.set("React", "https://img.stackshare.io/service/1020/OYIaJ1KK.png");
  images.set(
    "Expo",
    "https://apprecs.org/ios/images/app-icons/256/83/982107779.jpg"
  );
  images.set(
    "Firebase",
    "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1478529687/zaeoysnccrafp3ikx5or.png"
  );

  return (
    <div className="badge-container">
      <img src={images.get(technology + "")} className="badge-image" />
    </div>
  );
};
