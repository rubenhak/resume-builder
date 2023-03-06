import { readFileYAML } from "./file-system";
import { ResumeBasicsImpl } from "./models/basics";
import { ResumeEducationImpl } from "./models/education";
import { ResumeWorkImpl } from "./models/work";
import { ResumeEducation, ResumeSpec, ResumeWork } from "./types";

export async function loadResumeSpec(path: string) 
{
  const obj = await readFileYAML(path);
  if (!obj) {
    throw new Error("Wrong Resume Spec");
  }
  const spec = obj as ResumeSpec;

  massageResumeSpec(spec);

  return spec;
}

function massageResumeSpec(spec: ResumeSpec)
{
  if (!spec.settings) {
    spec.settings = { };
  }
  if (!spec.settings.showEducationDates) {
    spec.settings.showEducationDates = false;
  }
  if (!spec.settings.showSkillsBelow) {
    spec.settings.showSkillsBelow = false;
  }

  if (!spec.basics) {
    spec.basics = { };
  }
  if (!spec.basics.name) {
    spec.basics.name = 'Chuck Norris'
  }

  spec.basics = new ResumeBasicsImpl(spec.basics);

  if (!spec.specialties) {
    spec.specialties = [];
  }
  if (!spec.skills) {
    spec.skills = [];
  }
  if (!spec.work) {
    spec.work = [];
  }
  if (!spec.education) {
    spec.education = [];
  }

  spec.work = spec.work.map(x => massageResumeWork(x));
  spec.education = spec.education.map(x => new ResumeEducationImpl(x));
}

function massageResumeWork(work: ResumeWork) : ResumeWork
{
  if (work.startDate) {
    work.startDate = new Date(work.startDate);
  }
  if (work.endDate) {
    work.endDate = new Date(work.endDate);
  }
  if (!work.projects) {
    work.projects = [];
  }
  if (!work.highlights) {
    work.highlights = [];
  }
  if (!work.used) {
    work.used = [];
  }

  for(const project of work.projects)
  {
    if (!project.used) {
      project.used = [];
    }
  }

  return new ResumeWorkImpl(work);
}

function massageResumeEducation(edu: ResumeEducation)
{
  if (edu.startDate) {
    edu.startDate = new Date(edu.startDate);
  }
  if (edu.endDate) {
    edu.endDate = new Date(edu.endDate);
  }
}