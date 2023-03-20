import Head from 'next/head';
import AppWindowWrapper from '../utility/AppWindowWrapper';
import Alarm from './Alarm';
import AnalogDigitalClock from './AnalogDigitalClock';

const ClockApp = () => {
  return (
    <>
      <Head>
        <title>Clock</title>
      </Head>
      <AppWindowWrapper>
        <div className="flex flex-col items-center gap-6 p-5">
          <AnalogDigitalClock />
          <Alarm />
        </div>
      </AppWindowWrapper>
    </>
  );
};

export default ClockApp;
