import Image from "next/image";
import Bento from "./komponens/bentobox";
import 'leaflet/dist/leaflet.css';
import Footer from "./komponens/footer";

export default function Home() {
  return (
    
    <main>
      <div className="Bento Box">
        <Bento></Bento>
        <Footer></Footer>
      </div>
    </main>
  );
}
