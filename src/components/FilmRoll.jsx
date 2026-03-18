import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './FilmRoll.css';
import film1 from '../assets/roll_1.jpg';
import film2 from '../assets/roll_2.jpg';
import film3 from '../assets/roll_3.jpg';
import film4 from '../assets/roll_4.jpg';
import film5 from '../assets/roll_5.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function FilmRoll() {
  const container = useRef();
  
  // Example frames based on the UI
  const framesData = [
    { id: 1, src: film1, alt: "Vintage" },
    { id: 2, src: film2, alt: "Classic" },
    { id: 3, src: film3, alt: "DSLR" },
    { id: 4, src: film4, alt: "Modern Mirrorless" },
    { id: 5, src: film5, alt: "Future" }
  ];

  useGSAP(() => {
    setTimeout(() => {
        ScrollTrigger.refresh();
        if (!container.current) return;
        const frameElems = container.current.querySelectorAll('.film-frame');
        if (frameElems.length === 0) return;

        const frameWidth = 108; 
        const gap = 6;
        const leaderTotalWidth = 50 + 10 + 15; // leader width + margins
        const extraPadding = 20; // right padding flush with screen
        
        const computedWidth = leaderTotalWidth + (frameElems.length * frameWidth) + ((frameElems.length - 1) * gap) + extraPadding;

        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
        }
        });

        // Pull out wrapper directly without canister
        tl.to('.film-strip-wrapper', {
        width: computedWidth,
        ease: "power1.inOut"
        }, 0);

        // Slide the strip slightly while expanding for natural unraveling
        gsap.set('.film-strip', { x: 20 });
        tl.to('.film-strip', {
        x: 0,
        ease: "power1.inOut"
        }, 0);

    }, 100);
  }, { scope: container });

  return (
    <div className="film-module-container" ref={container}>
      <div className="film-strip-wrapper">
        <div className="film-strip">
          <div className="film-leader">
            <span>36 EXP</span>
          </div>
          
          {framesData.map((f) => (
            <div key={f.id} className="film-frame">
              <img src={f.src} alt={f.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
