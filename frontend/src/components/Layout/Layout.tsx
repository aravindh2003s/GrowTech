
import Navbar from '../Navbar/Navbar';
import BackToTop from '../UI/BackToTop';
import videoBg from '../../assets/background_cube_in_hand_changing.mp4';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="video-bg-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <Navbar />
      <main style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <BackToTop />
    </>
  );
}
