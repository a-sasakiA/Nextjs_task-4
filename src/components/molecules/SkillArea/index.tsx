import { FC } from "react";
import styled from "styled-components";

export type CategoryList = {
  id: number;
  value: string;
};

export type SkillList = {
  id: number;
  categoryId: number;
  value: string;
};

export interface CurrentCategory {
  [index: string]: string | number;
}

type Props = {
  category: CategoryList[];
  skill: SkillList[];
  currentCategory: CurrentCategory;
  handleChangeCategory: (value: string) => void;
  handleSwitchSkillTag: (value: string) => void;
  handleClearSkillTag: (value: string) => void;
  skillTag: string[];
};

export const SkillArea: FC<Props> = ({
  category,
  skill,
  currentCategory,
  handleChangeCategory,
  handleSwitchSkillTag,
  handleClearSkillTag,
  skillTag,
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {skillTag.map((t) => (
            <StTag key={t}>
              {t}
              <StDelateButton onClick={() => handleClearSkillTag(t)}>
                {" "}
                X{" "}
              </StDelateButton>
            </StTag>
          ))}
        </StSelectedTagArea>
      </StSelectedTagAreaWrapper>
      <StSelectAreaWrapper>
        <StSelectCategoryArea>
          {/* カテゴリーエリア */}
          <select
            name=""
            id=""
            value={currentCategory.value}
            onChange={(e) => {
              console.log(e);
              handleChangeCategory(e.target.value);
            }}
          >
            {category.map((t) => (
              <option key={t.id} id={`${t.id}`}>
                {t.value}
              </option>
            ))}
          </select>
        </StSelectCategoryArea>
        <StSelectedSkillArea>
          {/* スキルエリア */}
          {skill.length
            ? skill.map((t) => (
                <StSelectedSkillText
                  key={t.id}
                  onClick={() => handleSwitchSkillTag(t.value)}
                >
                  {t.value}
                </StSelectedSkillText>
              ))
            : false}
        </StSelectedSkillArea>
      </StSelectAreaWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  margin-bottom: 10px;
`;
const StSelectedTagAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const StSelectedTagArea = styled.ul`
  display: flex;
`;
const StTag = styled.li`
  background-color: rgb(27, 161, 255);
  color: #fff;
  border-radius: 24px;
  margin-right: 8px;
  padding: 4px 12px;
  font-size: 12px;
`;
const StSelectAreaWrapper = styled.div`
  margin-top: 16px;
  padding: 0 8px;
`;
const StSelectCategoryArea = styled.div`
  display: flex;
`;

const StSelectedSkillArea = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StSelectedSkillText = styled.li`
  display: flex;
`;

const StDelateButton = styled.span`
  cursor: pointer;
`;
