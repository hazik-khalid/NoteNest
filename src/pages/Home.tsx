import { IonContent, IonPage } from "@ionic/react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import AddBtn from "../components/AddBtn";
import { data } from "../components/AddBtn";

const Home: React.FC = () => (
  <IonPage>
    <Navbar />
    <IonContent>
      {data.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}

      <AddBtn />
    </IonContent>
  </IonPage>
);

export default Home;
