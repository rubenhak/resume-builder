export interface ResumeSpec
{
  basics: ResumeBasics,
  objective?: string,
  specialties: ResumeSpecialties,
  skills: ResumeSkills,
  work: ResumeWork[],
  education: ResumeEducation[],
}

export interface ResumeBasics
{
  name?: string,
  label?: string,
  email?: string,
  phone?: string,
  social?: string[],
}

export type ResumeSpecialties = string[];
export type ResumeSkills = string[];


export interface ResumeWork
{
  company: string,
  logo?: string,
  role?: string,
  startDate: Date,
  endDate?: Date,
  summary: string,
  projects?: ResumeSubProject[],
  highlights?: string[],
  used?: ResumeJobSkills,
}

export interface ResumeSubProject
{
  summary: string,
  url?: string,
  used?: ResumeJobSkills,
}

export type ResumeJobSkills = string[];

export interface ResumeEducation
{
  institution: string,
  logo?: string,
  url?: string,
  area: string,
  studyType: string,
  startDate?: Date,
  endDate?: Date,  
}