import MyTitle from '../components/MyTitle'
import Greeting from '../components/Greeting'

export default function AboutPage() {
  return(
    <div>
      <MyTitle />
      <Greeting name="지현" />
      <p>이건 About 페이지입니다!</p>
    </div>
  );
  }
