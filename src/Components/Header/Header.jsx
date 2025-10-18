import React, { useState } from 'react';
import logo from '../../assets/Saas-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-black h-[46px] flex items-center text-white py-3 text-center justify-center text-sm">
        <span className="font-dm max-sm:hidden text-sm font-['DM_Sans'] text-gray-400 pr-2">
          This page is included in a free SaaS Website Kit.
        </span>
        <div className="flex items-center gap-1 hover:gap-2 transition-all">
          <a href="#" className="text-white font-['DM_Sans'] hover:underline inline-flex items-center">
            View the complete Kit
          </a>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8245 8.42448L9.2245 12.0245C9.11178 12.1372 8.95891 12.2005 8.7995 12.2005C8.64009 12.2005 8.48722 12.1372 8.3745 12.0245C8.26178 11.9118 8.19846 11.7589 8.19846 11.5995C8.19846 11.4401 8.26178 11.2872 8.3745 11.1745L10.95 8.59998H3.6C3.44087 8.59998 3.28826 8.53677 3.17574 8.42425C3.06321 8.31173 3 8.15911 3 7.99998C3 7.84085 3.06321 7.68824 3.17574 7.57572C3.28826 7.4632 3.44087 7.39998 3.6 7.39998H10.95L8.3755 4.82398C8.26278 4.71127 8.19946 4.55839 8.19946 4.39898C8.19946 4.23958 8.26278 4.0867 8.3755 3.97398C8.48822 3.86127 8.64109 3.79794 8.8005 3.79794C8.95991 3.79794 9.11278 3.86127 9.2255 3.97398L12.8255 7.57398C12.8814 7.6298 12.9258 7.69612 12.9561 7.76913C12.9863 7.84215 13.0018 7.92041 13.0017 7.99944C13.0016 8.07847 12.9859 8.1567 12.9555 8.22964C12.9251 8.30258 12.8806 8.3688 12.8245 8.42448Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Header */}
      <header className="h-[81px] flex items-center justify-center bg-[#EAEEFE] w-full">
        <div className="max-w-[1200px] w-full h-full mx-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-10  h-10 " />
                </div>
            <span className="font-['Inter'] max-sm:hidden text-sm">made by</span>
            <div className="flex items-center max-sm:hidden gap-2">
              <div>
                <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0.5H15.2156V7.78567H7.8578L0.5 0.5ZM0.5 7.78567H7.8578L15.2156 15.0713H0.5V7.78567ZM0.5 15.0713H7.8578V22.357L0.5 15.0713Z" fill="black"/>
                </svg>
              </div>
              <svg width="46" height="11" viewBox="0 0 46 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.518677 0.247681H6.467V2.11935H2.77008V4.72035H6.467V6.55068H2.77008V9.88101H0.518677V0.247681ZM7.68999 3.24768H9.8165V4.63768C9.92759 4.16001 10.1548 3.79335 10.4975 3.53668C10.849 3.27035 11.2391 3.13768 11.665 3.13768C11.8875 3.13768 12.073 3.15635 12.2207 3.19268V5.14701C12.0087 5.12168 11.7952 5.10801 11.5815 5.10568C10.9977 5.10568 10.5581 5.29335 10.2612 5.66968C9.96529 6.03668 9.8165 6.58701 9.8165 7.32135V9.88101H7.69099V3.24768H7.68999ZM15.5777 10.06C14.9293 10.06 14.3637 9.90835 13.882 9.60568C13.4094 9.30301 13.0337 8.87335 12.7981 8.36701C12.5479 7.83535 12.422 7.23368 12.422 6.56435C12.422 5.90368 12.5527 5.30701 12.8119 4.77535C13.0549 4.26168 13.4407 3.82735 13.9238 3.52301C14.4142 3.22035 14.9751 3.06868 15.6056 3.06868C16.0779 3.06868 16.5 3.17001 16.8703 3.37168C17.2406 3.57401 17.5187 3.84935 17.7042 4.19735V3.24768H19.8165V9.88101H17.7042V8.94501C17.5187 9.27535 17.2315 9.54568 16.8424 9.75701C16.4532 9.96135 16.0183 10.0653 15.5777 10.06ZM16.1893 8.31201C16.6986 8.31201 17.0925 8.14701 17.3706 7.81668C17.6486 7.48635 17.7877 7.06868 17.7877 6.56435C17.7877 6.06901 17.6486 5.65601 17.3706 5.32568C17.0925 4.99535 16.6986 4.83035 16.1893 4.83035C15.7069 4.83035 15.3184 4.99068 15.0219 5.31201C14.7347 5.63335 14.591 6.05035 14.591 6.56435C14.591 7.07835 14.7347 7.50001 15.0219 7.83035C15.3184 8.15168 15.7076 8.31201 16.1893 8.31201ZM21.3038 3.24768H23.4303V4.21101C23.5791 3.87101 23.8195 3.59568 24.1527 3.38535C24.4961 3.17501 24.8943 3.06868 25.3481 3.06868C26.4045 3.06868 27.1043 3.47668 27.4467 4.29368C27.6352 3.92335 27.9301 3.61701 28.2947 3.41301C28.6845 3.18068 29.1322 3.06168 29.587 3.06868C31.1715 3.06868 31.9636 3.96735 31.9636 5.76601V9.88101H29.8233V6.15135C29.8233 5.70235 29.7398 5.37201 29.5732 5.16068C29.4062 4.95001 29.1561 4.84401 28.8225 4.84401C28.4613 4.84401 28.1832 4.96801 27.9887 5.21568C27.7941 5.45435 27.6968 5.87135 27.6968 6.46801V9.88101H25.5565V6.13768C25.5565 5.68835 25.4733 5.36235 25.3064 5.16068C25.1495 4.95001 24.9034 4.84401 24.5705 4.84401C24.1995 4.84401 23.9167 4.96801 23.7222 5.21568C23.5276 5.45435 23.4303 5.87135 23.4303 6.46801V9.88101H21.3045V3.24768H21.3038ZM39.952 6.22035C39.952 6.50435 39.9331 6.81201 39.8954 7.14235H34.9486C34.9674 7.57368 35.1152 7.90335 35.3933 8.13335C35.6713 8.36235 36.0473 8.47735 36.519 8.47735C37.1771 8.47735 37.5942 8.27968 37.7699 7.88535H39.8547C39.7523 8.53701 39.3911 9.06401 38.7704 9.46801C38.159 9.86235 37.4083 10.06 36.519 10.06C35.3704 10.06 34.4668 9.75235 33.8087 9.13768C33.1604 8.52268 32.8359 7.66535 32.8359 6.56435C32.8359 5.84868 32.984 5.22935 33.2805 4.70635C33.567 4.18401 34.0087 3.76135 34.5453 3.49535C35.0923 3.21135 35.7269 3.06868 36.4503 3.06868C37.1353 3.06868 37.7419 3.20168 38.2701 3.46801C38.8074 3.73435 39.2201 4.10568 39.5069 4.58268C39.8038 5.06035 39.952 5.60601 39.952 6.22035ZM37.8524 5.83501C37.8433 5.39468 37.7184 5.05935 37.477 4.83035C37.2367 4.60135 36.8886 4.48635 36.4348 4.48635C35.981 4.48635 35.6198 4.61001 35.3508 4.85801C35.0916 5.09668 34.9573 5.42201 34.9476 5.83501H37.8524ZM40.8895 3.24768H43.016V4.63768C43.1271 4.16001 43.3543 3.79335 43.697 3.53668C44.0296 3.27735 44.441 3.13668 44.8644 3.13768C45.0866 3.13768 45.2724 3.15635 45.4202 3.19268V5.14701C45.2081 5.12168 44.9947 5.10801 44.781 5.10568C44.1972 5.10568 43.7576 5.29335 43.4607 5.66968C43.1638 6.03668 43.016 6.58701 43.016 7.32135V9.88101H40.8895V3.24768Z" fill="black"/>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden text-[#00000099] text-base font-normal font-['Inter'] md:flex items-center gap-6">
            <a href="#about" className="font-['Inter']">About</a>
            <a href="#features">Features</a>
            <a href="#customers">Customers</a>
            <a href="#updates">Updates</a>
            <a href="#help">Help</a>
            <button className="bg-black text-white px-[15px] py-[10px] rounded-[10px] font-['Inter'] text-base font-medium hover:bg-gray-800 transition-colors">
              Get for free
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EAEEFE] border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a 
              href="#about" 
              className="font-['Inter'] text-[#00000099] text-base py-2 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#features" 
              className="font-['Inter'] text-[#00000099] text-base py-2 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#customers" 
              className="font-['Inter'] text-[#00000099] text-base py-2 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </a>
            <a 
              href="#updates" 
              className="font-['Inter'] text-[#00000099] text-base py-2 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Updates
            </a>
            <a 
              href="#help" 
              className="font-['Inter'] text-[#00000099] text-base py-2 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </a>
            <button 
              className="bg-black text-white px-[15px] py-[10px] rounded-[10px] font-['Inter'] text-base font-medium hover:bg-gray-800 transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get for free
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}







