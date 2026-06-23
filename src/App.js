import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/global/CustomCursor';
import DarkModeToggle from './components/global/DarkModeToggle';
import LoadingScreen from './components/global/LoadingScreen';
import MusicPlayer from './components/global/MusicPlayer';
import ScrollProgress from './components/global/ScrollProgress';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import MemoryGallery from './components/sections/MemoryGallery';
import LoveLetter from './components/sections/LoveLetter';
import ReasonsILoveYou from './components/sections/ReasonsILoveYou';
import RelationshipStats from './components/sections/RelationshipStats';
import DreamDestinations from './components/sections/DreamDestinations';
import FutureDreams from './components/sections/FutureDreams';
import SurpriseGift from './components/sections/SurpriseGift';
import FinalSection from './components/sections/FinalSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="relative bg-background min-h-screen text-foreground selection:bg-primary/30">
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <div className="hidden md:block">
          <CustomCursor />
        </div>

        <ScrollProgress />
        <DarkModeToggle />
        <MusicPlayer />

        {!isLoading && (
          <main>
            <Hero />
            <Timeline />
            <MemoryGallery />
            <LoveLetter />
            <ReasonsILoveYou />
            <RelationshipStats />
            <DreamDestinations />
            <FutureDreams />
            <SurpriseGift />
            <FinalSection />
          </main>
        )}
      </div>
    </ThemeProvider>
  );
}
