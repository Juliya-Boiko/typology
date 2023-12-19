import bgiUrl from "../public/heros/home.png";
import { Hero } from "./components/sections/hero/hero";
import { Benefits } from "./components/sections/benefits/benefits";
import { Diagnostic } from "./components/sections/diagnostic/diagnostic";
import { Offer } from "./components/sections/offer/offer";
import { Recommend } from "./components/sections/recommend/recommend";
import { SECTION_KEYS } from "./components/constants/section";
import { QUERY_KEYS } from "./components/constants/query";
import { ROUTER_KEYS } from "./components/constants/routes";

const Home = () => (
  <>
    <Hero title="NEW: SPF 50" primary bgiUrl={bgiUrl} bgColor="#faf6f2" />
    <Benefits />
    <Recommend
      keys={SECTION_KEYS.BESTSELLERS}
      query={QUERY_KEYS.HOME_BESTSELLERS}
      navigate={ROUTER_KEYS.BESTSELLERS.path}
    />
    <Offer
      keys={SECTION_KEYS.TINTED}
      query={QUERY_KEYS.HOME_TINTED}
    />
    <Diagnostic />
    <Recommend
      keys={SECTION_KEYS.ARRIVALS}
      query={QUERY_KEYS.HOME_ARRIVALS}
      navigate={ROUTER_KEYS.ARRIVALS.path}
    />
    <Offer
      keys={SECTION_KEYS.KITS}
      query={QUERY_KEYS.HOME_KITS}
    />
  </>
);

export default Home;