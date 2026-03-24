export const siteConfig = {
  name: 'EDGEVERSE',
  tagline: 'AI Perception & Safety Solutions for Mobility',
  company: 'EdgeVerse',
  product: 'Perceiva™',
}

export const navLinks = [
  { href: '#product', label: 'Product' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#features', label: 'Features' },
  { href: '#collision-awareness', label: 'Collision Awareness' },
  { href: '#validation', label: 'Validation' },
  { href: '#aras', label: 'ARAS' },
  { href: '#platform', label: 'Platform' },
  { href: '#verticals', label: 'Verticals' },
  { href: '#team', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export const navItems = [
  {
    label: 'Product',
    children: [
      { href: '#product', label: 'Perceiva™ ARAS', description: 'AI-powered rider assistance platform for two-wheelers' },
      { href: '#collision-awareness', label: 'Collision Awareness', description: 'Predictive multi-zone collision detection system' },
      { href: '#validation', label: 'Road Validation', description: 'Real-world testing and validation footage' },
    ],
  },
  {
    label: 'Technology',
    children: [
      { href: '#architecture', label: 'System Architecture', description: 'Edge-native AI perception pipeline' },
      { href: '#features', label: 'Core Features', description: 'Sensor fusion, edge inference, and prediction' },
      { href: '#platform', label: 'AI Platform', description: 'Modular perception stack for mobility OEMs' },
      { href: '#aras', label: 'ARAS Engine', description: 'Advanced Rider Assistance System core' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { href: '#verticals', label: 'Automotive OEMs', description: 'ARAS perception for motorcycles and lightweight EVs' },
      { href: '#verticals', label: 'Fleet Safety', description: 'AI monitoring for commercial vehicle fleets' },
      { href: '#verticals', label: 'Smart Mobility', description: 'Traffic analytics and pedestrian flow intelligence' },
    ],
  },
  {
    label: 'Company',
    children: [
      { href: '#team', label: 'Leadership', description: 'Meet the founding team and advisors' },
      { href: '#contact', label: 'Contact', description: 'Partner with us for OEM integrations' },
    ],
  },
]

export const heroContent = {
  badge: 'Perceiva™ ARAS',
  headline: 'AI-Powered Rider Safety for Two-Wheelers',
  subheadline: 'Perceiva™ — an edge-native Advanced Rider Assistance System (ARAS) delivering predictive collision alerts using camera and radar sensor fusion.',
  description: 'Perceiva™ converts real-time sensor data into actionable safety intelligence, enabling OEMs to integrate advanced rider safety features directly into motorcycles.',
  ctaPrimary: 'Request OEM Demo',
  ctaSecondary: 'Explore Technology',
  metrics: [
    { value: '30 FPS', label: 'real-time AI perception' },
    { value: '<100ms', label: 'alert latency' },
    { value: 'Camera + Radar', label: 'sensor fusion' },
    { value: 'Edge-native', label: 'architecture' },
  ],
}

export const productContent = {
  title: 'Perceiva™ ARAS Platform',
  description: 'Perceiva™ is a vertically integrated AI perception stack designed specifically for two-wheelers operating in dense urban traffic environments.',
  integrationTitle: 'The platform integrates:',
  integrations: [
    'Edge AI perception',
    'Multi-sensor fusion',
    'Predictive collision detection',
    'Rider alert systems',
  ],
  closingStatement: 'This allows OEMs to deploy next-generation rider safety features without building perception infrastructure from scratch.',
  flow: ['Sensors', 'AI Perception', 'Collision Prediction', 'Rider Alerts'],
}

export const architectureContent = {
  title: 'Perceiva System Architecture',
  steps: [
    'Camera + Radar + IMU Sensors',
    'Sensor Fusion Layer',
    'Edge AI Perception Engine (India Perception Model)',
    'Collision Risk Prediction Engine',
    'Real-Time Rider Alerts',
    'Mobile App + Cloud Analytics',
  ],
  explanation: 'Perceiva processes sensor inputs using an edge-native AI pipeline optimized for two-wheeler mobility environments. The system performs perception, prediction, and alert generation directly at the edge to ensure ultra-low latency operation.',
}

export const features = [
  {
    id: '1',
    icon: 'Shield',
    title: 'Predictive Collision Detection',
    description: 'AI models analyze surrounding vehicles and rider trajectory to predict collision scenarios before impact.',
  },
  {
    id: '2',
    icon: 'Cpu',
    title: 'Edge AI Inference',
    description: 'All perception processing runs directly on embedded hardware enabling sub-100ms alerts without cloud dependency.',
  },
  {
    id: '3',
    icon: 'Camera',
    title: 'Camera + Radar Sensor Fusion',
    description: 'Combines computer vision with radar depth sensing for reliable detection in diverse lighting and weather conditions.',
  },
  {
    id: '4',
    icon: 'Bike',
    title: 'Two-Wheeler Optimized AI',
    description: 'Models trained on Indian traffic patterns and dense two-wheeler traffic environments.',
  },
]

export const collisionZones = [
  {
    id: 'z1',
    label: 'Front Collision Zone',
    description: 'Detect approaching vehicles and sudden braking events.',
    color: 'primary',
  },
  {
    id: 'z2',
    label: 'Rear Collision Zone',
    description: 'Detect fast approaching vehicles from behind.',
    color: 'accent',
  },
  {
    id: 'z3',
    label: 'Side Impact Zone',
    description: 'Monitor lateral traffic during lane changes.',
    color: 'emerald',
  },
  {
    id: 'z4',
    label: 'Blind Spot Zone',
    description: 'Identify vehicles hidden in rider blind spots.',
    color: 'violet',
  },
]

export const roadTestVideos = [
  { id: 'v1', title: 'Urban traffic detection', duration: '2:34', thumbnail: '/placeholder-video-1.jpg' },
  { id: 'v2', title: 'Highway riding scenarios', duration: '3:12', thumbnail: '/placeholder-video-2.jpg' },
  { id: 'v3', title: 'Night-time hazard detection', duration: '2:45', thumbnail: '/placeholder-video-3.jpg' },
  { id: 'v4', title: 'Multi-object tracking', duration: '4:01', thumbnail: '/placeholder-video-4.jpg' },
]

export const arasStats = [
  { value: 30, suffix: ' FPS', label: 'Perception Processing' },
  { value: 100, suffix: 'ms', label: 'Alert Latency' },
  { value: 24, suffix: '/7', label: 'Environment Monitoring' },
]

export const arasContent = {
  title: 'ARAS — Advanced Rider Assistance System',
  description: 'Perceiva enables predictive safety intelligence for motorcycles by continuously monitoring surrounding vehicles and detecting high-risk situations in real time.',
}

export const platformContent = {
  title: 'EdgeVerse AI Perception Platform',
  description: 'EdgeVerse provides a modular AI perception platform designed for automotive and mobility applications requiring real-time situational awareness.',
  capabilities: [
    'Real-time object detection',
    'Sensor fusion pipelines',
    'Edge deployment infrastructure',
    'AI model optimization',
  ],
}

export const edgeVerseStack = [
  {
    name: 'Perception Engine',
    description: 'Real-time detection of vehicles, pedestrians, and road hazards.',
  },
  {
    name: 'Collision Prediction Engine',
    description: 'Trajectory analysis and risk scoring.',
  },
  {
    name: 'Driver Assistance APIs',
    description: 'Integration with OEM dashboards and alert systems.',
  },
  {
    name: 'Analytics Dashboard',
    description: 'Ride safety insights and recorded event visualization.',
  },
]

export const verticals = [
  {
    id: 'v1',
    title: 'Automotive OEMs',
    description: 'ARAS perception stack for motorcycles and lightweight vehicles.',
  },
  {
    id: 'v2',
    title: 'Fleet Safety',
    description: 'AI-powered monitoring for commercial vehicles.',
  },
  {
    id: 'v3',
    title: 'Smart Mobility Infrastructure',
    description: 'Traffic and pedestrian flow analytics.',
  },
]

export const teamMembers = [
  {
    id: 'm1',
    name: 'Arindam Ghosh',
    role: 'Co-Founder & CEO',
    description: 'Automotive AI systems architect.',
    image: 'Arindam Ghosh.jpg',
    linkedin: 'https://www.linkedin.com/in/arindamgh/',
  },
  {
    id: 'm2',
    name: 'Subrata Debnath',
    role: 'Co-Founder & CTO',
    description: 'Embedded systems and mobility platform engineer.',
    image: 'Subrata Debnath.jpg',
    linkedin: 'https://www.linkedin.com/in/subrata-debnath-7119771/',
  },
  {
    id: 'm3',
    name: 'Navaneeth A',
    role: 'Co-Founder & VP of AI',
    description: 'Computer vision and perception systems researcher.',
    image: 'Navaneeth A.jpg',
    linkedin: 'https://www.linkedin.com/in/navaneeth-a-949657150/',
  },
  {
    id: 'm4',
    name: 'Anand Dharmaraj',
    role: 'Advisor',
    description: 'Strategic advisor for mobility and automotive.',
    image: 'Anand Dharmaraj.jpg',
    linkedin: 'https://www.linkedin.com/in/anand-dharmaraj-b291579/',
  },
  {
    id: 'm5',
    name: 'Ashok Balivada',
    role: 'Advisor',
    description: 'Strategic advisor for mobility and automotive.',
    image: 'Ashok Balivada.jpg',
    linkedin: 'https://www.linkedin.com/in/ashok-balivada/',
  },
]

export const contactContent = {
  title: 'Partner with EdgeVerse',
  description: 'Interested in integrating Perceiva™ ARAS into your mobility platform? Contact us for OEM integrations, pilot deployments, and partnerships.',
}

export const contactInfo = {
  email: 'contact@edgeverse.ai',
  phone: '+91-9845257658',
  address: 'Edgeverse India Private Limited, G01, #520, 8th Cross BEML Layout, Thubarahalli, Bengaluru, Karnataka, India - 560066',
}
