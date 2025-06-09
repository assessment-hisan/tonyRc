export const products = [
    {
        id: 'mjx-16208',
        name: 'MJX Hyper Go 16208',
        images: [
            '/images/products/HyperGo-16208.webp',
            '/images/products/hypergo-2.webp',

        ],
        price: 189.99,
        description:
            'High-performance 1/16 scale RC truck with brushless motor and metal drivetrain.',
        specs: {
            scale: '1/16',
            topSpeed: '45 km/h (up to 62 km/h with upgrades)',
            motor: '2845 4200KV Brushless',
            esc: '45A Brushless ESC with Fan',
            battery: '7.4V 1050mAh LiPo',
            runtime: '10 minutes',
            drivetrain: '4WD Metal Gears',
            weight: '1030g',
        },
    },

    {
        id: 'rgt-shooter-136100pro',
        name: 'RGT Shooter 136100 PRO',
        images: [
            '/images/products/rgt-shooter-136100pro-1.jpg',
            '/images/products/rgt-shooter-136100pro-2.jpg',
        ],
        price: 329.99,
        description: `
    1/10 scale high-performance crawler developed with Hobbywing.
    Features low-center-gravity carbon–CNC aluminum chassis and powerful 30A FOC brushless system.
  `,
        specs: {
            scale: '1/10',
            motor: '2200 KV brushless (FOC integrated)',
            esc: '30 A brushless FOC ESC (waterproof)',
            chassis: 'Carbon fiber + CNC aluminum, LCG',
            weight: '1.7 kg (w/o battery)',
            dimensions: '420×210×200 mm',
            wheelbase: '275 mm',
            groundClearance: '68 mm (chassis)',
            servo: '5 kg digital metal gear',
            drivetrain: '4WD with steel gears',
            battery: '2S–3S LiPo (not included)',
            valueProps: 'Front-mounted motor, 6:4 weight bias, IP67 protection'
        }
    }
    ,
    {
        id: 'rlaarlo-omni-terminator',
        name: 'Rlaarlo Omni Terminator',
        images: [
            '/images/products/rlaarlo-omni-terminator-1.jpg',
            '/images/products/rlaarlo-omni-terminator-2.jpg',
        ],
        price: 349.99,
        description: `
    1/10 scale brushless monster truck available in carbon or metal chassis.
    Equipped with gyro stabilization and ready-to-run with 3S LiPo battery.
  `,
        specs: {
            scale: '1/10',
            chassis: 'Carbon fiber or alloy',
            dimensions: '≈410×280×175 mm',
            weight: 'Approx. 3.5 kg',
            wheelbase: '250 mm',
            groundClearance: '45 mm',
            motorSupport: 'Up to 6S – e.g., 1412‑3200 KV sensorless',
            battery: '3S 2200 mAh LiPo included',
            steering: '11 kg servo, hardened gears',
            features: 'Gyroscope, waterproof electronics, central diff',
            valueProps: 'Stable, powerful, suitable for controls-focused driving'
        }
    },
    {
        id: 'rlaarlo-rog1',
        name: 'Rlaarlo ROG1 (Gladiator)',
        images: [
            '/images/products/rlaarlo-rog1-1.jpg',
            '/images/products/rlaarlo-rog1-2.jpg',
        ],
        price: 299.99,
        description: `
    1/14 scale brushless monster truck—compact yet fast and rugged.
    Features flipping/self-righting design and adjustable throttle modes.
  `,
        specs: {
            scale: '1/14',
            motor: '2845‑3600 KV brushless',
            esc: '45 A waterproof',
            battery: '2S 3000 mAh or 3S 2200 mAh LiPo',
            speed: '59 km/h (2S) / 78 km/h (3S)',
            drivetrain: '4WD metal diffs and CVD shafts',
            suspension: 'Oil-filled shocks, adjustable camber/toe',
            steering: '11 kg metallic servo',
            dimensions: '320×230×140 mm',
            weight: '≈1.3 kg',
            features: 'Self-righting via rollover control',
            cube: 'Ready-to-run with LED lights & extras'
        }
    }
    ,
    {
        id: 'fms-fcx24m-camel-trophy',
        name: 'FMS FCX24M Camel Trophy Land Cruiser',
        images: [
            '/images/products/fms-camel-trophy-1.jpg',
            '/images/products/fms-camel-trophy-2.jpg',
        ],
        price: 119.99,
        description: `
    Officially licensed 1/24 scale Land Rover/Range Rover/Defender models.
    Features rugged crawling chassis with two-speed transmission and metal components.
  `,
        specs: {
            scale: '1/24',
            chassis: 'Metal C-channel + metal links',
            body: 'ABS hard shell with detailed interior',
            transmission: '2-speed',
            motor: '050 brushed',
            drivetrain: '4WD metal bevel gears',
            suspension: '4-link front/rear, oil-filled shocks',
            tires: 'Crawling rubber tires with foam inserts',
            dimensions: '≈253×129×128 mm',
            wheelbase: '139 mm',
            groundClearance: '38 mm',
            battery: '7.4 V 380 mAh LiPo',
            txRange: '≈30 m',
            runtime: '20 min',
            features: 'Quick-detach body, roof rack, licensed interior'
        }
    }
    ,
   {
  id: 'rgt-pro-runner',
  name: 'RGT EX86130 Pro Runner',
  images: [
    '/images/products/rgt-runner/1.jpg',
    '/images/products/rgt-runner/1.jpg',
    '/images/products/rgt-runner/1.jpg',
  ],
  price: 398.80,
  description: `
    The RGT EX86130 Pro Runner is a high-performance 1/10 scale rock crawler/trail rig,
    built with a stainless steel chassis beam and packed with advanced features for
    crawling and trail driving enthusiasts.
  `,
  specs: {
    scale: '1/10',
    driveMode: '2WD / 4WD + DIG',
    wheelbase: '313 mm',
    dimensions: '512×240×241 mm',
    groundClearance: '73 mm (chassis), 35 mm (axle)',
    motor: 'RC550 35T high-torque',
    esc: 'Hobbywing WP-1060 60A (waterproof)',
    steeringServo: '25 kg waterproof metal gear',
    winchServo: '360° 25 kg waterproof metal gear',
    drivetrain: 'All-metal gears, two-speed gearbox, DIG rear diff lock, steel CVD shafts',
    suspension: 'CNC aluminum/hydraulic shocks, 46° steering angle, Ackermann geometry',
    tires: '1.9″ 110×40 mm butyl rubber MT tires on beadlock wheels',
    chassisMaterial: 'Hardened stainless steel beam',
    electronics: '6‑channel 2.4 GHz transmitter, magnetic lighting control',
    weight: '≈2.98 kg (excl. battery)',
    batterySupport: '2–3S LiPo (optionally 7.4 V 6200 mAh)',
  },
}
,
    {
        id: '8',
        name: 'RC Crawler X100',
        category: 'Crawlers',
        price: 299.99,
        images: [
            '/images/crawler1-1.jpg',
            '/images/crawler1-2.jpg',
        ],
        description: 'High torque rock crawler with advanced suspension.',
        specs: {
            scale: '1/10',
            motor: 'Brushless 3300KV',
            battery: '2S LiPo',
        }
    },
];
