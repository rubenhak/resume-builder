

export interface RenderSentenceInfo
{
  id: string;
  dir: string;
  prompt: string;
  previewImages: string[];
  images: RenderImageInfo[];
}

export interface RenderImageInfo
{
  path: string;
  storagePath: string;
  metaFilePath: string;
  metaFilePathAbs: string;
  meta: RenderImageMeta;
}

export interface RenderImageMeta
{
  pin_x : "center" | "left" | "right",
  pin_y : "center" | "top" | "bottom",
}

export interface RenderStyleInfo
{
  name: string;
  dir: string;
  sentences: RenderSentenceInfo[];
}

export interface SentenceInfo
{
  id: string;
  dir: string;
  configDir: string;
  text: string;
}

export interface VoiceOverInfo
{
  id: string;
  relPath: string;
  absPath: string;
}


export interface StoryInfo
{
  name: string;
  configDir: string;
  storageRelDir: string;
  prompt: string;
  story: string;
  storyShort: string;
}

export interface StoryDetails extends StoryInfo
{
  packages: StoryPackage[];
  fullPackage: StoryPackage;
  shortPackage: StoryPackage;
}

export interface StoryPackage
{
  name: string;
  storyText: string;
  storageRelDir: string;
  sentencesDirName: string;
  sentences: SentenceInfo[];
  renderStyles: RenderStyleInfo[];
  voiceOvers: VoiceOverInfo[];
  storyInfo : StoryInfo;
}


export interface StoryDirectory
{
  dir: string;
  absDir: string;
  stories: StoryInfo[];
}