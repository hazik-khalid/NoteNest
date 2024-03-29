import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import Navbar from '../components/Navbar';
import Card from '../components/Card'
import AddBtn from '../components/AddBtn';

const Home: React.FC = () => (
  <IonPage>
      <Navbar />
      <IonContent>
        <Card />
        <Card />
        <Card />
        <Card />
        <AddBtn />
      </IonContent>
  </IonPage>
);

export default Home;
