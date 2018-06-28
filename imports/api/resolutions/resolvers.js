import Regulations from './regulations';
import Texts from '../texts/texts';

export default {
  Query: {
    regulations(obj, args, { userId }) {
      return Regulations.find({
        userId,
      }).fetch();
    },
  },

  Regulation: {
    texts: regulation => Texts.find({
      regulationId: regulation._id,
    }).fetch(),

    completed: (regulation) => {
      const texts = Texts.find({
        regulationId: regulation._id,
      }).fetch();
      if (texts.length === 0) return false;
      const completedTexts = texts.filter(text => text.completed);
      return completedTexts.length === texts.length;
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
