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
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/african-bodybuilder-exercising-with-dumbbells-PYYBBGT.jpg',
    poster: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/african-bodybuilder-exercising-with-dumbbells-PYYBBGT-660x770.jpg',
    lead: 'Build muscle, power and confidence with progressive lifting.',
    benefits: 'Strength at IRRONPRIT is built around proper technique, progressive overload and a plan that matches your goal. You will learn how to lift with purpose — not guesswork — so every session moves you forward.',
  },
  cardio: {
    id: 'cardio',
    title: 'Cardio',
    intensity: 'Medium',
    time: '40–50 mins',
    maximize: 'Endurance',
    dates: 'Tue, Thu, Sat',
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/woman-athlete-exercising-with-medicine-ball-PYB74ZY.jpg',
    poster: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/woman-athlete-exercising-with-medicine-ball-PYB74ZY-660x770.jpg',
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
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/woman-training-with-dumbbells-in-the-gym-2021-07-15-16-56-12-utc.jpg',
    poster: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/woman-training-with-dumbbells-in-the-gym-2021-07-15-16-56-12-utc-660x770.jpg',
    lead: 'High-intensity sessions for people who want faster results.',
    benefits: 'Short, focused intervals that push your limits safely. HIIT at IRRONPRIT is coached for form first, then intensity — so you get results without wrecking recovery.',
  },
  yoga: {
    id: 'yoga',
    title: 'Yoga',
    intensity: 'Low & Medium',
    time: '45 mins',
    maximize: 'Mobility',
    dates: '2–3 classes / week',
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/sportsman-and-smiling-sportswoman-doing-plank-and-2021-06-08-01-37-28-utc.jpg',
    poster: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/sportsman-and-smiling-sportswoman-doing-plank-and-2021-06-08-01-37-28-utc-660x770.jpg',
    lead: 'Mobility, breath and recovery — 2 or 3 classes every week.',
    benefits: 'Yoga at IRRONPRIT is recovery with intent. Improve mobility, control your breath and stay injury-resistant so your lifting and conditioning keep progressing.',
  },
  zumba: {
    id: 'zumba',
    title: 'Zumba',
    intensity: 'Medium',
    time: '45 mins',
    maximize: 'Fun Conditioning',
    dates: 'Weekly group class',
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/young-cyclist-man-setting-timer-on-bicycle-in-spor-JZCPRHT.jpg',
    poster: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/young-cyclist-man-setting-timer-on-bicycle-in-spor-JZCPRHT-660x770.jpg',
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
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/woman-training-with-dumbbells-in-the-gym-2021-07-15-16-56-14-utc.jpg',
    poster: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/woman-training-with-dumbbells-in-the-gym-2021-07-15-16-56-14-utc-660x770.jpg',
    lead: 'One-to-one coaching, form correction and goal-focused plans.',
    benefits: 'Standard, Exclusive and Special Population PT plus diet consultancy. Training should have direction — we build the plan around your goal, not a one-size-fits-all routine.',
  },
}

export const classesList = Object.values(classesData)
