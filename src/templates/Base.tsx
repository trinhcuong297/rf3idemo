import HightlightNews from '../component/HightLightPost';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Activ from './Activity';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <HightlightNews />
    <Activ />
    {/* <Event/> */}
    <VerticalFeatures />
    {/* <Banner /> */}
  </div>
);

export { Base };
