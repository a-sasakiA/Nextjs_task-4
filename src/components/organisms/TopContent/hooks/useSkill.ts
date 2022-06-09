//   skill: SkillList[];
//   handleSwitchSkillTag: (value: string) => void;
// handleClearSkillTag: (value: string) => void;
// skillTag: string[];

import { useState } from "react";
import { CurrentCategory, SkillList } from "src/components/molecules/SkillArea";

export const useSkill = (currentCategory: CurrentCategory) => {
  const [skill, setSkill] = useState<SkillList[]>([]);
  const [skillTag, setSkillTag] = useState<string[]>([]);
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

  return {
    skill,
    skillTag,
    handleSwitchSkillTag,
    handleClearSkillTag,
    setSkillTag,
    getSkill,
  };
};
