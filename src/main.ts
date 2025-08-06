import { Command } from 'commander';

import ResumeGenerator from "../../libs/typescript_cv_template/src/ResumeConvertor.js";
import { promises as fs } from 'fs';
import { homedir } from 'os';
import * as path from 'path';

async function generate() {
    const program = new Command();

    program.command('generate')
        .description('generate html resume from json')
        .option('--output <string>', 'path to html resume output')
        .option('--lang <string>', 'language of the resume')
        .argument('<string>', 'path to json resume input')
        .action(async (jsonPath, options) => {
            const resume = await fs.readFile(path.join(homedir(), jsonPath));
            const resumeHtml = await (new ResumeGenerator()).generateResume(JSON.parse(resume.toString()));
            fs.writeFile(path.join(homedir(), options.output), resumeHtml);
        });
    program.parse();
}

void generate();