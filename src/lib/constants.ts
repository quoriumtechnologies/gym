export const siteConfig = {
  name: "IRON FORGE",
  tagline: "FORGE YOUR LEGEND",
  description:
    "Premium gym & fitness studio offering world-class training, elite coaches, and a transformative community. Join the forge today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "info@ironforge.com",
  phone: "+1 (555) 123-4567",
  address: "123 Fitness Blvd, Los Angeles, CA 90001",
  hours: {
    "Mon-Fri": "5:00 AM - 11:00 PM",
    "Sat": "6:00 AM - 9:00 PM",
    "Sun": "7:00 AM - 8:00 PM",
  },
  social: {
    instagram: "https://instagram.com/ironforge",
    youtube: "https://youtube.com/@ironforge",
    twitter: "https://twitter.com/ironforge",
    facebook: "https://facebook.com/ironforge",
    whatsapp: "https://wa.me/15551234567",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Transformations", href: "/transformations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const siteStats = [
  { label: "Active Members", value: 5000, suffix: "+", icon: "Users" },
  { label: "Expert Trainers", value: 50, suffix: "+", icon: "Dumbbell" },
  { label: "Weekly Classes", value: 200, suffix: "+", icon: "Calendar" },
  { label: "Locations", value: 12, suffix: "", icon: "MapPin" },
] as const;

export const programs = [
  {
    id: "strength",
    title: "Strength Training",
    description:
      "Build raw power and muscle with compound lifts, progressive overload, and expert coaching. Our strength program is designed for all levels.",
    icon: "Dumbbell",
    category: "Strength",
    duration: "45-60 min",
    difficulty: "All Levels",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: [
      "Personalized lifting plans",
      "Form correction & technique",
      "Progressive overload tracking",
      "Access to premium equipment",
    ],
  },
  {
    id: "cardio",
    title: "Cardio & Conditioning",
    description:
      "Ignite your metabolism and build endurance with high-intensity cardio, HIIT circuits, and metabolic conditioning sessions.",
    icon: "Flame",
    category: "Cardio",
    duration: "30-45 min",
    difficulty: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    features: [
      "HIIT & Tabata protocols",
      "Rowing & assault bike",
      "Battle ropes & sleds",
      "Heart rate monitoring",
    ],
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility",
    description:
      "Achieve mind-body balance with our yoga program. Improve flexibility, reduce injury risk, and enhance recovery.",
    icon: "Heart",
    category: "Yoga",
    duration: "50-60 min",
    difficulty: "All Levels",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    features: [
      "Vinyasa & Hatha flows",
      "Breathing techniques",
      "Injury prevention",
      "Meditation sessions",
    ],
  },
  {
    id: "mma",
    title: "MMA & Combat",
    description:
      "Train like a fighter with our MMA program combining boxing, Muay Thai, BJJ, and wrestling in a high-energy environment.",
    icon: "Swords",
    category: "MMA",
    duration: "60-90 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c9357b0?w=800&q=80",
    features: [
      "Striking & pad work",
      "Grappling & BJJ",
      "Sparring sessions",
      "Fight conditioning",
    ],
  },
  {
    id: "crossfit",
    title: "CrossFit",
    description:
      "Forged in fire. Our CrossFit program combines functional movements, Olympic lifting, and high-intensity metcons.",
    icon: "Zap",
    category: "CrossFit",
    duration: "60 min",
    difficulty: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80",
    features: [
      "Daily WODs",
      "Olympic lifting",
      "Gymnastics skills",
      "Performance tracking",
    ],
  },
  {
    id: "group",
    title: "Group Fitness",
    description:
      "Energy is contagious. Join our group classes for motivation, camaraderie, and results-driven workouts led by elite coaches.",
    icon: "Users",
    category: "Group",
    duration: "45-55 min",
    difficulty: "All Levels",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    features: [
      "Cycle & spin",
      "Zumba & dance",
      "Bootcamp circuits",
      "Pilates & barre",
    ],
  },
] as const;

export const trainers = [
  {
    id: "alex",
    name: 'Alex \"Mountain\" Reeves',
    specialty: "Strength & Powerlifting",
    bio: "Former national powerlifting champion with 15+ years of coaching experience. Alex has trained athletes to 20+ national titles and specializes in raw strength development.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    rating: 4.9,
    sessions: 1200,
  },
  {
    id: "sarah",
    name: "Sarah \"Blaze\" Chen",
    specialty: "HIIT & Conditioning",
    bio: "CrossFit Games regional competitor and certified sports nutritionist. Sarah's high-energy coaching style has transformed 500+ clients through metabolic conditioning.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    rating: 4.8,
    sessions: 980,
  },
  {
    id: "marcus",
    name: "Marcus \"Iron\" Williams",
    specialty: "MMA & Combat Sports",
    bio: "Former UFC fighter with a black belt in BJJ. Marcus brings real fight experience to every session, training everyone from beginners to pro fighters.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    rating: 4.9,
    sessions: 1500,
  },
  {
    id: "luna",
    name: "Luna \"Flow\" Park",
    specialty: "Yoga & Flexibility",
    bio: "500-hour RYT certified yoga instructor with a background in professional dance. Luna's classes blend strength, flexibility, and mindfulness for total body transformation.",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    rating: 4.7,
    sessions: 850,
  },
  {
    id: "jake",
    name: "Jake \"Thunder\" Ortiz",
    specialty: "CrossFit & Olympic Lifting",
    bio: "CrossFit Level 4 trainer and former Olympic weightlifting coach. Jake programs for elite performance and has coached 3 CrossFit Games qualifiers.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    rating: 4.8,
    sessions: 1100,
  },
  {
    id: "mia",
    name: "Mia \"Phoenix\" Torres",
    specialty: "Transformation & Nutrition",
    bio: "Certified personal trainer and nutrition specialist. Mia's holistic approach combines strength training, nutrition planning, and mindset coaching for life-changing results.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    social: { instagram: "#", youtube: "#", twitter: "#" },
    rating: 4.9,
    sessions: 1350,
  },
] as const;

export const pricingTiers = [
  {
    name: "Basic",
    price: 29,
    period: "/month",
    description: "Perfect for getting started on your fitness journey.",
    features: [
      "Gym access (6AM-9PM)",
      "Standard equipment",
      "1 free trainer session",
      "Locker room access",
      "Mobile app access",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: 59,
    period: "/month",
    description: "Our most popular plan for dedicated athletes.",
    features: [
      "24/7 gym access",
      "All equipment & zones",
      "8 trainer sessions/month",
      "All group classes",
      "Nutrition planning",
      "Sauna & recovery",
      "Priority booking",
    ],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Elite",
    price: 99,
    period: "/month",
    description: "The ultimate experience for peak performance.",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom meal plans",
      "Physio & recovery",
      "VIP locker room",
      "Guest passes (x4)",
      "Exclusive events",
      "Merchandise package",
    ],
    cta: "Join Elite",
    featured: false,
  },
] as const;

export const testimonials = [
  {
    name: "James Mitchell",
    role: "Member since 2023",
    quote:
      "IRON FORGE didn't just change my body — it changed my entire mindset. The trainers, the community, the energy... there's nothing else like it. I'm down 45lbs and stronger than I've ever been.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Member since 2024",
    quote:
      "After trying 5 different gyms, I finally found my home at IRON FORGE. The yoga program with Luna completely transformed my flexibility and the community is incredibly supportive.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Member since 2022",
    quote:
      "The MMA program here is legit. Coach Marcus has taken my striking and grappling to another level. This isn't just a gym — it's a brotherhood.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Member since 2023",
    quote:
      "I was intimidated at first, but every single person here wants you to win. The transformation I've made in 8 months is unreal. Thank you, IRON FORGE!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    alt: "Weight training area",
    category: "Gym",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    alt: "Group fitness class",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    alt: "Personal training session",
    category: "Trainers",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    alt: "Cardio zone",
    category: "Gym",
  },
  {
    src: "https://images.unsplash.com/photo-1555597673-b21d5c9357b0?w=600&q=80",
    alt: "MMA training",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
    alt: "Yoga session",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80",
    alt: "CrossFit workout",
    category: "Gym",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    alt: "Cardio training",
    category: "Trainers",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    alt: "Female athlete training",
    category: "Transformations",
  },
  {
    src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    alt: "Boxing training",
    category: "Gym",
  },
  {
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    alt: "Functional training",
    category: "Trainers",
  },
  {
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80",
    alt: "Yoga flexibility",
    category: "Transformations",
  },
] as const;

export const blogPosts = [
  {
    slug: "ultimate-strength-training-guide",
    title: "The Ultimate Strength Training Guide for Beginners",
    excerpt:
      "Everything you need to know about starting your strength journey — from compound lifts to progressive overload and recovery.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    category: "Workouts",
    author: "Alex Reeves",
    date: "2025-01-15",
    readTime: "8 min",
    content: `
## Why Strength Training Matters

Strength training is the foundation of any serious fitness journey. It builds muscle, increases bone density, boosts metabolism, and transforms your physique.

## The Big Three Compound Lifts

### 1. Squat
The king of all exercises. Squats engage your quads, hamstrings, glutes, and core simultaneously.

### 2. Deadlift
The ultimate measure of full-body strength. Deadlifts work your posterior chain — back, glutes, and hamstrings.

### 3. Bench Press
Build upper body strength and chest mass with proper form and progressive overload.

## Progressive Overload Explained

To grow stronger, you must consistently challenge your muscles. Add weight, increase reps, or reduce rest time each session.

## Recovery & Nutrition

Muscles grow outside the gym. Prioritize sleep (7-9 hours), protein intake (1.6-2.2g per kg of bodyweight), and active recovery.
    `,
  },
  {
    slug: "nutrition-for-muscle-growth",
    title: "Nutrition for Muscle Growth: What to Eat & When",
    excerpt:
      "Optimize your diet for maximum muscle gain with our comprehensive nutrition guide tailored for serious lifters.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    category: "Nutrition",
    author: "Mia Torres",
    date: "2025-01-10",
    readTime: "6 min",
    content: `
## Calories Matter

To build muscle, you need to be in a slight caloric surplus — about 300-500 calories above maintenance.

## Protein Timing

Aim for 30-40g of protein per meal, spaced 3-4 hours apart. This optimizes muscle protein synthesis throughout the day.

## Carbohydrates for Energy

Carbs are not the enemy. They fuel your workouts and aid recovery. Focus on complex carbs: oats, rice, sweet potatoes, quinoa.

## Fats for Hormones

Healthy fats support testosterone production and overall hormonal health. Include avocados, nuts, olive oil, and fatty fish.

## Meal Timing

Pre-workout: carbs + protein 1-2 hours before.
Post-workout: protein + fast-digesting carbs within 2 hours.
    `,
  },
  {
    slug: "mindset-of-champions",
    title: "The Mindset of Champions: Mental Toughness in Fitness",
    excerpt:
      "Your body achieves what your mind believes. Learn the mental strategies used by elite athletes to push past limits.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    category: "Lifestyle",
    author: "Marcus Williams",
    date: "2025-01-05",
    readTime: "7 min",
    content: `
## Discipline Over Motivation

Motivation is fleeting. Discipline is what gets you to the gym at 5 AM when it's raining and your bed is warm.

## Visualize Success

Elite athletes visualize their success before it happens. See yourself completing that last rep, crossing that finish line.

## Embrace Discomfort

Growth happens outside your comfort zone. The pain of discipline is nothing compared to the pain of regret.

## The 1% Rule

Get 1% better every day. Over a year, that's a 37x improvement. Small consistent actions compound into extraordinary results.
    `,
  },
  {
    slug: "hiit-vs-steady-state-cardio",
    title: "HIIT vs Steady State Cardio: Which is Better?",
    excerpt:
      "We break down the science behind both cardio methods to help you choose the right approach for your goals.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "Workouts",
    author: "Sarah Chen",
    date: "2024-12-28",
    readTime: "5 min",
    content: `
## HIIT (High-Intensity Interval Training)

Short bursts of maximum effort followed by rest. Burns more calories in less time and creates the "afterburn effect" (EPOC).

## Steady State Cardio

Sustained moderate-intensity activity like jogging or cycling. Great for building endurance and active recovery.

## Which Should You Choose?

For fat loss: HIIT is more efficient.
For endurance: Steady state builds aerobic base.
For best results: Combine both methods.
    `,
  },
] as const;

export const faqs = [
  {
    question: "What should I bring on my first day?",
    answer:
      "Bring comfortable workout clothes, training shoes, a water bottle, and a towel. We provide lockers for your belongings. If you have a membership, your key tag will be ready at the front desk.",
  },
  {
    question: "Do you offer free trial sessions?",
    answer:
      "Absolutely! We offer a free 7-day trial pass that gives you full access to our facilities and group classes. You can also book a complimentary session with one of our trainers.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We're open Monday to Friday from 5:00 AM to 11:00 PM, Saturday from 6:00 AM to 9:00 PM, and Sunday from 7:00 AM to 8:00 PM. Pro members enjoy 24/7 access.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, there are no long-term contracts. You can cancel or pause your membership at any time with 30 days' notice. No hidden fees, no hassle.",
  },
  {
    question: "Do you have nutrition guidance?",
    answer:
      "Yes! All Pro and Elite members receive personalized nutrition planning from our certified nutrition specialists. We also offer standalone nutrition consultations.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have a free parking lot with 200+ spaces. We also have bike racks and are located within walking distance of the Metro station.",
  },
] as const;