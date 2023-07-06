export interface Projects {
  title: string;
  github: string;
  skills: {
    skill1: string;
    skill2: string;
    skill3: string;
    skill4?: string;
    skill5?: string;
  };
  personnel: string;
  term: {
    term1: string;
    term2: string;
  };
  text: {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5?: string;
    text6?: string;
  };
}