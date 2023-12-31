import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

function Home() {
  const categories = [
    {
      id: 1,
      title: "CAP",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "CEKET",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "SNEAKER",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "KADIN",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "ERKEK",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="home">
      <Directory categories={categories} />

      <Outlet />
    </div>
  );
}

export default Home;
