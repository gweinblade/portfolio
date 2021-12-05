import React from 'react'
import Particles from 'react-tsparticles'
export default function Particle2() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
        
          
      <Particles
      id="tsparticles"
      //init={particlesInit}
      //loaded={particlesLoaded}
      options={{
        autoPlay: true,
        zIndex:0,
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff"
            },
            opacity: 1
          },
          enable: false
        },
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        background: {
          
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 1
        },
        

        particles: {
          number: {
            value: 16,
            density: {
              enable: true,
              value_area: 600
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.25,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 300,
            color: "#ffffff",
            opacity: 0,
            width: 0
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: true,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: false,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 800,
              size: 80,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: false,
        pauseOnBlur: false,
        pauseOnOutsideViewport: false,
        responsive: [],
        themes: [],
        zLayers: 100,
      }}
    />
    
        
    )
}
