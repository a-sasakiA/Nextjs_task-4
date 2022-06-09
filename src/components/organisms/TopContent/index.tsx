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
import { useCount } from "./hooks/hooks";
import useCategory from "./hooks/useCategory";
import { useSkill } from "./hooks/useSkill";

export const TopContent: FC = () => {
  const { count, handleIncrement, handleDecrement, resetCount } = useCount();
  const { category, currentCategory, handleChangeCategory, getCategory } =
    useCategory();
  const {
    skill,
    skillTag,
    handleSwitchSkillTag,
    handleClearSkillTag,
    setSkillTag,
    getSkill,
  } = useSkill(currentCategory);

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

  useEffect(() => {
    const getTag = async () => {
      const res = await fetch("/api/tag");
      const data: TagList = await res.json();

      setTagList(data);
    };
    getTag();

    getCategory();
  }, []);

  useEffect(() => {
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
