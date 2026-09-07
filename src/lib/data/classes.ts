export interface ClassData {
  id: string
  title: string
  intensity: string
  time: string
  maximize: string
  dates: string
  photo: string
  poster: string
  lead: string
  benefits: string
}

export const classesData: Record<string, ClassData> = {
  strength: {
    id: 'strength',
    title: 'Strength Training',
    intensity: 'Medium & High',
    time: '45–60 mins',
    maximize: 'Muscle & Power',
    dates: 'Mon, Wed, Fri',
    photo: '/images/Characters/7.png',
    poster: '/images/Characters/7.png',
    lead: 'Build muscle, power and confidence with progressive lifting.',
    benefits: 'Strength at IRONPRIT is built around proper technique, progressive overload and a plan that matches your goal. You will learn how to lift with purpose — not guesswork — so every session moves you forward.',
  },
  cardio: {
    id: 'cardio',
    title: 'Cardio',
    intensity: 'Medium',
    time: '40–50 mins',
    maximize: 'Endurance',
    dates: 'Tue, Thu, Sat',
    photo: '/images/Characters/8.png',
    poster: '/images/Characters/8.png',
    lead: 'Conditioning that burns fat and builds real endurance.',
    benefits: 'Cardio here is structured, not random. Sessions focus on stamina, fat loss and recovery so you can train harder on strength days and stay consistent through the week.',
  },
  hiit: {
    id: 'hiit',
    title: 'HIIT',
    intensity: 'High',
    time: '30–45 mins',
    maximize: 'Fat Burn',
    dates: 'Mon, Thu, Sat',
    photo: '/images/Characters/9.png',
    poster: '/images/Characters/9.png',
    lead: 'High-intensity sessions for people who want faster results.',
    benefits: 'Short, focused intervals that push your limits safely. HIIT at IRONPRIT is coached for form first, then intensity — so you get results without wrecking recovery.',
  },
  yoga: {
    id: 'yoga',
    title: 'Yoga',
    intensity: 'Low & Medium',
    time: '45 mins',
    maximize: 'Mobility',
    dates: '2–3 classes / week',
    photo: '/images/Characters/10.png',
    poster: '/images/Characters/10.png',
    lead: 'Mobility, breath and recovery — 2 or 3 classes every week.',
    benefits: 'Yoga at IRONPRIT is recovery with intent. Improve mobility, control your breath and stay injury-resistant so your lifting and conditioning keep progressing.',
  },
  zumba: {
    id: 'zumba',
    title: 'Zumba',
    intensity: 'Medium',
    time: '45 mins',
    maximize: 'Fun Conditioning',
    dates: 'Weekly group class',
    photo: '/images/Characters/11.png',
    poster: '/images/Characters/11.png',
    lead: 'High-energy group dance fitness that keeps you coming back.',
    benefits: 'A high-energy group session that still serves your fitness. Move, sweat and stay consistent — because the right environment makes it easier to show up.',
  },
  pt: {
    id: 'pt',
    title: 'Personal Training',
    intensity: 'Custom',
    time: '45–60 mins',
    maximize: 'Your Goal',
    dates: 'By appointment',
    photo: '/images/Characters/12.png',
    poster: '/images/Characters/12.png',
    lead: 'One-to-one coaching, form correction and goal-focused plans.',
    benefits: 'Standard, Exclusive and Special Population PT plus diet consultancy. Training should have direction — we build the plan around your goal, not a one-size-fits-all routine.',
  },
}

export const classesList = Object.values(classesData)
