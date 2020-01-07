import { loremIpsum } from 'lorem-ipsum';
import random from 'seedable-random';

export default (seed = 0) => {
  random.seed(seed);
  const options = {
    count: 1,
    format: 'plain',
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    random,
    units: 'paragraphs'
  };
  return loremIpsum(options);
};
