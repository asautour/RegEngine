import Texts from './texts';

export default {

  Mutation: {
    createText(obj, { name, regulationId }, { userId }) {
      if (userId) {
        const textId = Texts.insert({
          name,
          regulationId,
          completed: false,
        });
        return Texts.findOne(textId);
      }
      throw new Error('Unauthorized');
    },
    toggleText(obj, { _id }) {
      const text = Texts.findOne(_id);
      text.completed;
      Texts.update(_id, {
        $set: {
          completed: !text.completed,
        },
      });
      return Texts.findOne(_id);
    },
  },
};
