export interface ResumeSpec
{
  web: ResumeWebSettings,
  settings: ResumeSettings,
  basics: ResumeBasics,
  objective?: string,
  specialties: ResumeSpecialties,
  skills: ResumeSkills,
  work: ResumeWork[],
  education: ResumeEducation[],
}


export interface ResumeWebSettings
{
  url?: string,
  previewImage?: string
}

export interface ResumeSettings
{
  showEducationDates?: boolean,
  showSkillsBelow?: boolean
}

export interface ResumeBasics
{
  name?: string,
  tagline?: string,
  location?: string,
  email?: string,
  phone?: string,
  social?: string[],
  photo?: string,
}

export type ResumeSpecialties = string[];
export type ResumeSkills = string[];


export interface ResumeWork
{
  company: string,
  logo?: string,
  role?: string,
  url?: string,
  newsUrl?: string,
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
  highlights: string[],
  startDate?: Date,
  endDate?: Date,  
}