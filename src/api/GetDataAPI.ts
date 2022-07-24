import skillData from '../assets/data/SkillData.json';
import { SkillInfo } from './Models/SkillInfo';
import articleData from '../assets/data/ArticleData.json';
import { ArticleData } from './Models/ArticleData';
import { StandrardResponseDto } from './Models/StandrardResponseDto';
import axios from './AxiosHandler';

const getSkillInfo = () : SkillInfo[] => {
  const obj = JSON.stringify(skillData);
  const result : SkillInfo[] = JSON.parse(obj);
  return result;
};

const getArticleData = () => {
  const obj = JSON.stringify(articleData);
  const result : ArticleData[] = JSON.parse(obj);
  return result;
  // const url = '/Article';
  // return axios.get<StandrardResponseDto<ArticleData[]>>(url);
};

export default {
  getSkillInfo,
  getArticleData,
};
