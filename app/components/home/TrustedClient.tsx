// import Image from "next/image";
// import {Container} from "../layout/Container";

// const clients = [
//   {
//     name: "Flobiz",
//     logo: "/images/home/flobiz-logo.png",
//   },
//   {
//     name: "Traya",
//     logo: "/images/home/traya-logo.png",
//   },
//   {
//     name: "Supertails",
//     logo: "/images/home/supertails-logo.png",
//   },
//   {
//     name: "Happay",
//     logo: "/images/home/happay-logo.png",
//   },
// ];

// const TrustedClients = () => {
//   return (
//     <Container className="flex flex-col gap-6 items-center">
//       <h3 className="md:text-base font-semibold text-sm">
//         Loved by the efficiency-obsessed at:
//       </h3>
//       <div className="flex gap-10">
//         {clients.map((client) => (
//           <div key={client.name}>
//             <Image
//               src={client.logo}
//               alt={client.name}
//               width={180}
//               height={55}
//             />
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export {TrustedClients};

"use client";
import Image from "next/image";
import {Container} from "../layout/Container";
import {useState, useEffect, useRef} from "react";
import {motion} from "framer-motion";

// Speed control - ADJUST THIS VALUE to control animation speed
// Lower number = faster, Higher number = slower
const ANIMATION_DURATION = 95;

const clients = [
  {
    name: "Flobiz",
    logo: "/images/home/flobiz-logo.png",
    hoverLogo: "/images/home/flobiz-logo-colored.png",
  },
  {
    name: "Rapido",
    logo: "/images/home/rapido-check.png",
    hoverLogo: "/images/home/rapido-logo-colored.png",
  },
  {
    name: "Supertails",
    logo: "/images/home/supertails-logo.png",
    hoverLogo: "/images/home/supertail-logo-colored.png",
  },
  {
    name: "Traya",
    logo: "/images/home/traya-logo.png",
    hoverLogo: "/images/home/traya-logo.png",
  },
  // {
  //   name: "Happay",
  //   logo: "/images/home/happay-logo.png",
  //   hoverLogo: "/images/home/happay-logo-colored.png",
  // },
  {
    name: "Onsurity",
    logo: "/images/home/onsurity-logo-colored.png",
    hoverLogo: "/images/home/onsurity-logo.png",
  },
  {
    name: "Spinny",
    logo: "/images/home/spinny-logo.png",
    hoverLogo: "/images/home/spinny-logo-colored.png",
  },
];

// Triple the clients to ensure we have enough for a continuous loop
const repeatedClients = [
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
];

const TrustedClients = () => {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Get the total width of a single set of logos
      const singleSetWidth = clients.length * (180 + 24); // logo width + gap
      setWidth(singleSetWidth);
    }
  }, []);
  console.log({width, hoveredClient});

  return (
    <Container className="flex flex-col gap-6 items-center">
      <h3 className=" font-medium">Loved by the efficiency-obsessed at:</h3>

      <div className="relative w-4/5 lg:w-3/5 mx-auto overflow-hidden">
        {/* Gradient overlay - left */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

        {/* Gradient overlay - right */}
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* Carousel container */}
        <div className="overflow-hidden" ref={carouselRef}>
          {/* <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: [`0px`, `-${width}px`],
            }}
            transition={{
              x: {
                duration: ANIMATION_DURATION, // Control speed here
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            {repeatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16"
                onMouseEnter={() => setHoveredClient(client.name)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <div className="w-[150px] h-10 flex items-center justify-center">
                  <Image
                    src={
                      hoveredClient === client.name
                        ? client.hoverLogo
                        : client.logo ?? "/images/home/happay-logo.png"
                    }
                    alt={client.name}
                    width={150}
                    height={40}
                    className="object-contain max-h-10 max-w-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div> */}
          <motion.div
            className="flex gap-4 md:gap-6 justify-center items-center"
            animate={{
              x: ["0%", "-50%"], // Move halfway to create an illusion of infinity
            }}
            transition={{
              x: {
                duration: ANIMATION_DURATION, // Speed
                ease: "linear",
                repeat: Infinity,
              },
            }}
            style={{width: "max-content"}} // Ensure the content stretches properly
          >
            {[...repeatedClients, ...repeatedClients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16"
                onMouseEnter={() => setHoveredClient(client.name)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <div className=" flex items-center justify-center">
                  {/* <Image
                    src={
                      hoveredClient === client.name
                        ? client.hoverLogo
                        : client.logo ?? "/images/home/happay-logo.png"
                    }
                    alt={client.name}
                    width={150}
                    height={40}
                    className="object-contain w-[150px] h-[40px]"
                  /> */}
                  <Image
                    src={client.hoverLogo} // Always use the colored logo
                    alt={client.name}
                    width={130}
                    height={32}
                    className="object-contain w-[100px] h-[32px]  md:w-[130px] md:h-[32px] transition-all duration-300 hover:grayscale-0 grayscale"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export {TrustedClients};
