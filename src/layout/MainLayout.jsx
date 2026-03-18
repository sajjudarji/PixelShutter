import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col text-textPrimary selection:bg-gold selection:text-black">
      <ThreeBackground />
      <Navbar />
      <main className="flex-grow flex flex-col z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
