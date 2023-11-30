import { Banner } from "./components/Banner";
import { Details } from "./components/Details";
import { Footer } from "./components/Footer";
import { OfferPage } from "./components/OfferPage";
import { PhotosGallery } from "./components/PhotosGallary";

import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <Details />
      <PhotosGallery />
      <OfferPage />
      <Footer />
    </>
  );
}

export default App;
