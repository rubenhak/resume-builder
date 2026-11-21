# YAML Resume Builder

**YAML Resume Builder** is an open-source project that allows you to create beautifully formatted resumes from simple YAML files. It supports both **HTML** and **PDF** output, enabling easy customization and sharing. With this tool, you can focus on content while the generator handles the design and formatting.

This is how your resume could look like: https://rubenhak.github.io/resume-builder/

## Features:
- Simple YAML input format
- Generates professional-looking resumes in both HTML and PDF
- Customizable templates
- Lightweight and easy to use

Get started by creating your resume in YAML and let the generator handle the rest!

## Installation
```sh
$ npm install -g yaml-resume-builder
```

## Sample Resume YAML Definition
YAML Definition: https://github.com/rubenhak/resume-builder/blob/main/example/resume.yaml

## Markdown in Text Fields
Text fields (tagline, objective, specialties, skills, work summaries, highlights, project summaries, and education info) support simple inline markdown:

| Syntax | Result |
|---|---|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `***bold italic***` | ***bold italic*** |
| `~~strike~~` | ~~strike~~ |
| `` `code` `` | `code` |
| `[text](https://example.com)` | link (http, https, mailto only) |
| `\*` | literal asterisk |

Raw HTML is escaped. In YAML, a plain value that **starts** with `*` is parsed as an alias, so quote it or use a block scalar:
```yaml
highlights:
  - "**Led** migration to Kubernetes"
  - Cut infra costs by *40%*
```


## Running Live Server
```sh
# Clone the repo which contains Chuck Norris's resume
$ git clone https://github.com/rubenhak/resume-builder

# Run the live server 
$ yaml-resume-builder server example/resume.yaml

# Access from browser:
http://localhost:8787/
```

## Generate HTML Output
```sh
# Run the live server 
$ yaml-resume-builder generate example/resume.yaml

# Output stored to 
example/index.html
```

Output here: https://github.com/rubenhak/resume-builder/blob/main/example/index.html
See here: https://rubenhak.github.io/resume-builder/

## Generate PDF Output
```sh
# Run the live server 
$ yaml-resume-builder pdf example/resume.yaml

# Output stored to 
example/index.html
```

Output here: https://github.com/rubenhak/resume-builder/blob/main/example/resume.pdf


## Releasing
Every push to `main` publishes a new release to npm and Docker Hub (`rubenhak/yaml-resume-builder`) via the `release` job of the [CI workflow](.github/workflows/ci.yml). Add `[skip ci]` to the commit message to skip it. GitHub matches it anywhere in the message, including the body, so do not mention it in commit messages otherwise.

Versioning is automatic:
- If `package.json` holds a version higher than any on npm, that version is released. Bump it manually for minor/major releases.
- Otherwise the patch number of the latest npm version is incremented.

The workflow then commits the new version in `package.json` and `action.yml` back to `main` (with `[skip ci]`) and tags it `v<version>`.

One-time setup:
- **npm:** on npmjs.com, add a trusted publisher to the `yaml-resume-builder` package: GitHub Actions, repo `rubenhak/resume-builder`, workflow `ci.yml`.
- **Docker Hub:** add repo secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` (a Docker Hub access token with write access).
