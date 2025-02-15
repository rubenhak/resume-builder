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

