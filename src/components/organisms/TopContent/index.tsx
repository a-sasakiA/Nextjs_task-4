import { log } from "console";
import { FC, useEffect, useState } from "react";
import { Counter } from "src/components/molecules/Counter";
import {
  CategoryList,
  CurrentCategory,
  SkillArea,
  SkillList,
} from "src/components/molecules/SkillArea";
import { TagArea, TagList } from "src/components/molecules/TagArea";
import styled from "styled-components";
import { useCount } from "./hooks";

export const TopContent: FC = () => {
  const { count, handleIncrement, handleDecrement, resetCount } = useCount();

  // カテゴリリスト
  const [category, setCategory] = useState<CategoryList[]>([]);
  // 選択カテゴリ
  const [currentCategory, setCurrentCategory] = useState<CurrentCategory>({});
  // 選択カテゴリ要素ID
  let optionId: string;

  // スキルリスト
  const [skill, setSkill] = useState<SkillList[]>([]);
  // スキルリスト:タグ
  const [skillTag, setSkillTag] = useState<string[]>([]);

  // タグ
  const [tag, setTag] = useState<string[]>([]);
  // タグリスト
  const [tagList, setTagList] = useState<TagList>([]);

  const handleClearTag = () => {
    setTag([]);
  };
  const handlePushTag = (value: string) => {
    setTag([...tag, value]);
  };

  const handleChangeCategory = (value: string) => {
    const options = document.querySelectorAll("option");
    options.forEach((value, index) => {
      console.log(options[index].selected);
      if (options[index].selected === true) {
        optionId = options[index].id;
      }
    });
    setCurrentCategory({ value, optionId });
  };
  const handleClearSkillTag = (value: string) => {
    setSkillTag(skillTag.filter((tag) => tag !== value));
  };
  const handleSwitchSkillTag = (value: string) => {
    if (skillTag.indexOf(value) >= 0) {
      handleClearSkillTag(value);
      return;
    }
    setSkillTag([...skillTag, value]);
  };

  useEffect(() => {
    const getTag = async () => {
      const res = await fetch("/api/tag");
      const data: TagList = await res.json();

      setTagList(data);
    };
    getTag();

    const getCategory = async () => {
      // category Api
      try {
        const res_category = await fetch("/api/skills/category");
        const data_category = await res_category.json();

        setCategory([...data_category]);
      } catch (error) {
        console.log(`Error Message: ${error}`);
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getSkill = async () => {
      let query = "skill";

      // Skill Api
      try {
        if (currentCategory.optionId >= 0) {
          query += `?id=${currentCategory.optionId}`;
        }

        const res_skills = await fetch(`/api/skills/${query}`);
        const data_skills = await res_skills.json();

        setSkill([...data_skills]);
      } catch (error) {
        console.log(`Error Message: ${error}`);
      }
    };
    getSkill();
  }, [currentCategory]);

  return (
    <StRoot>
      <StTitle>
        <h1>react初心者向け講座</h1>
      </StTitle>
      <StContent>
        <StArticle>
          <StArticleTitle>カウント</StArticleTitle>
          <Counter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            resetCount={resetCount}
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>タグ</StArticleTitle>
          <TagArea
            tag={tag}
            tagList={tagList}
            handleClearTag={handleClearTag}
            handlePushTag={handlePushTag}
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>興味のある言語/フレームワーク</StArticleTitle>
          <SkillArea
            category={category}
            skill={skill}
            currentCategory={currentCategory}
            handleChangeCategory={handleChangeCategory}
            handleSwitchSkillTag={handleSwitchSkillTag}
            handleClearSkillTag={handleClearSkillTag}
            skillTag={skillTag}
          />
        </StArticle>
      </StContent>
    </StRoot>
  );
};

const StRoot = styled.div``;

const StTitle = styled.div``;

const StContent = styled.div``;

const StArticle = styled.article``;

const StArticleTitle = styled.h2``;
