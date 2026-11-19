import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: String,
  focus: { type: String, required: true, enum: ['endurance', 'strength', 'mobility'] },
  minutes: { type: Number, required: true, min: 1, max: 1440 },
  difficulty: { type: String, required: true, enum: ['easy', 'moderate'] },
});

export const Workout = model('Workout', workoutSchema);
