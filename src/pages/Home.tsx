import { IonContent, IonPage } from "@ionic/react";
import Navbar from "../components/Navbar";
import AddBtn from "../components/AddBtn";

const Home: React.FC = () => (
  <IonPage>
    <Navbar />
    <IonContent>
      <AddBtn />
    </IonContent>
  </IonPage>
);

export default Home;
