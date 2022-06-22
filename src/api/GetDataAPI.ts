import skillData from '../assets/data/SkillData.json';
import { SkillInfo } from './Models/SkillInfo';
import articleData from '../assets/data/ArticleData.json';
import { ArticleData } from './Models/ArticleData';

const getSkillInfo = () : SkillInfo[] => {
  const obj = JSON.stringify(skillData);
  const result : SkillInfo[] = JSON.parse(obj);
  return result;
};

const getArticleData = () : ArticleData[] => {
  const obj = JSON.stringify(articleData);
  const result : ArticleData[] = JSON.parse(obj);
  return result;
};

export default {
  getSkillInfo,
  getArticleData,
};
