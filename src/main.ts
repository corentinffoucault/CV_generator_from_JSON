import Resume from "../packages/cv-template/src/resume.js";

async function generate() {
    console.log(new Resume().print());
}

void generate();