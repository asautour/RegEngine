import Regulations from './regulations';
import Goals from '../goals/goals';

export default {
  Query: {
    regulations(obj, args, { userId }) {
      return Regulations.find({
        userId,
      }).fetch();
    },
  },

  Regulation: {
    goals: regulation => Goals.find({
      regulationId: regulation._id,
    }).fetch(),

    completed: (regulation) => {
      const goals = Goals.find({
        regulationId: regulation._id,
      }).fetch();
      if (goals.length === 0) return false;
      const completedGoals = goals.filter(goal => goal.completed);
      return completedGoals.length === goals.length;
    },
  },

  Mutation: {
    createRegulation(obj, { name }, { userId }) {
      if (userId) {
        const regulationId = Regulations.insert({
          name,
          userId,
        });
        return Regulations.findOne(regulationId);
      }
      throw new Error('Unauthorized');
    },
  },
};
