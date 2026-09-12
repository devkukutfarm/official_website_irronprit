export interface TrainerData {
  id: string
  name: string
  role: string
  lead: string
  bio: string
  photo: string
}

export const trainersData: Record<string, TrainerData> = {
  pritam: {
    id: 'pritam',
    name: 'Pritam M Sen',
    role: 'Founder & Fitness Coach',
    lead: 'Fitness should be more than a workout; it should become a way of life.',
    bio: 'IRRONPRIT was born from a simple belief — real transformation is built through proper training, consistency, discipline and knowledge, not shortcuts.',
    photo: 'https://themes-themegoods.b-cdn.net/vive/wp-content/uploads/2021/09/trainer2-610x610.jpg',
  },
}

export const trainersList = Object.values(trainersData)
