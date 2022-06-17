import * as skillInfoData from '../assets/data/skillInfo.json';
import * as articleData from '../assets/data/article.json';

const getSkillInfo = () => skillInfoData;
const getArticleData = () => articleData;

export default {
  getSkillInfo,
  getArticleData,
};
