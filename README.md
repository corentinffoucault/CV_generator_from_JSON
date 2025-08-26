# CV JSON → HTML

This project converts a **JSON CV** into an **HTML CV** using an external conversion library.

This project is inspired by the [resumed from npm](https://www.npmjs.com/package/resumed/v/4.0.0)

Type safety is ensured by the submodule [json_cv_schema](https://github.com/corentinffoucault/json_cv_schema)

This repository provides two TypeScript-based resume templates to help you generate a professional CV with ease.  
Depending on your needs, you can choose between a detailed or a minimal format:

- [typescript_cv_template](https://github.com/corentinffoucault/typescript_cv_template) – Full resume template for comprehensive CVs  
- [typescript_cv_template_minimal](https://github.com/corentinffoucault/typescript_cv_template_minimal) – Minimal resume template for a shorter, cleaner CV


## Project structure

```
.
├── CV-GENERATOR-FROM-JSON
|   ├──src/
│   │   └── main.ts               # Application entry point
│   ├── tsconfig.json
│   ├── package.json
│   ├── README.md
│   └── packages
│       └── json_cv_schema
└── libs/
    └── typescript_cv_template/
        └── src/ResumeConvertor.ts  # External template library

```

---

## Installation

Requirements:
- **Node.js** v22 or higher
- **npm** v11 or higher

Then install the project and dependencies:

### Example with existing template

```bash
# install template
mkdir libs
(cd libs
git clone --recurse-submodules https://github.com/corentinffoucault/typescript_cv_template.git
cd full-cv-template
npm install-recursive
npm run build)

# install generator
git clone --recurse-submodules https://github.com/corentinffoucault/CV_generator_from_JSON.git
cd CV_generator_from_JSON
npm install-recursive
``` 

Update the import in `CV_generator_from_JSON/src/main`.ts:
```ts
import ResumeGenerator from ...;
``` 
with 
```ts
import ResumeGenerator from "../../libs/typescript_cv_template/src/ResumeConvertor.js";
```

Then build the generator:
```bash
npm run build
``` 

## Custom templates

You can replace
https://github.com/corentinffoucault/typescript_cv_template.git
with your own template repository.

To create a new template, follow the interface defined in `IResumeConvertor.ts` from [json_cv_schema](https://github.com/corentinffoucault/json_cv_schema)

Don’t forget to update the template reference in tsconfig.json with the path to your own template, by replacing:

```
"path": "../libs/typescript_cv_template"
```

---

## Usage

The main command to generate a CV is:

```bash
npm run start generate "json-file-path" -- --output "html-output-path" --lang "fr"
```

### Arguments
- **`json-file-path`**: relative path to the JSON CV file from your home directory 
- **`--output`**: relative path to the generated HTML file from your home directory 
- **`--lang`**: output language (`fr`, `en`, …) for the date geneartor

---

## Example

```bash
npm run start generate "resume/resume.json" -- --output "resumed/resume.html" --lang "fr"
```

This will generate an **~/resume/resume.html** file from the **~/resume/resume.json** file.

---

## External dependency

The project uses an external library for conversion:

```ts
import ResumeGenerator from "../../libs/typescript_cv_template/src/ResumeConvertor.js";
```

### TypeScript configuration

To make this dependency work, `tsconfig.json` includes the library as well:

```json
{
  "references": 
    "references": [
        ...
        {
            "path": "../libs/typescript_cv_template",
        }
    ]
}
```

This allows TypeScript to recognize `.ts` files located outside of the `src` directory.

### Example external project

A complete example project for CV conversion is available here:  
- [typescript_cv_template](https://github.com/corentinffoucault/typescript_cv_template)

---

## License

MIT
