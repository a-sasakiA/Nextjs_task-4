import { FC } from "react";
import styled from "styled-components";

export type TagList = { id: string; value: string }[];

type Props = {
  tag: string[];
  tagList: TagList;
  handleClearTag: () => void;
  handlePushTag: (t: string) => void;
};

export const TagArea: FC<Props> = ({
  tag,
  tagList,
  handleClearTag,
  handlePushTag,
}) => {
  return (
    <StWrapper>
      <StSelectedTagAreaWrapper>
        <StSelectedTagArea>
          {tag.map((t) => (
            <StTag key={t}>{t}</StTag>
          ))}
        </StSelectedTagArea>
        <StDelateButton onClick={() => handleClearTag()}>x</StDelateButton>
      </StSelectedTagAreaWrapper>
      <StSelectAreaWrapper>
        <StSelectArea>
          {tagList.map((t) => (
            <StSelectText key={t.value} onClick={() => handlePushTag(t.value)}>
              {t.value}
            </StSelectText>
          ))}
        </StSelectArea>
      </StSelectAreaWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div``;
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
  border: 1px solid;
  padding: 0 8px;
`;
const StSelectArea = styled.ul`
  display: flex;
`;
const StSelectText = styled.li`
  margin-right: 8px;
`;

const StDelateButton = styled.div`
  margin-right: 20px;
  border: 1px solid;
  padding: 10px 20px;
`;
