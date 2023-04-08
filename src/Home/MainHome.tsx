import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Activ from './Activity';
import Hero from './Hero';
import HightlightNews from './HightLightPost';
import Timeline from './Timeline';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <HightlightNews />
    <Activ />
    <Timeline />
  </div>
);

export { Base };
