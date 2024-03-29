import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import Navbar from '../components/Navbar';
import Card from '../components/Card'

const Home: React.FC = () => (
  <IonPage>
      <Navbar />
      <IonContent>
        <Card />
        <Card />
      </IonContent>
  </IonPage>
);

export default Home;
