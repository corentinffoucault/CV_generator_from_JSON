import { Command } from 'commander';

import { IResumeConvertor } from "../../../libs/json_cv_schema/src/type/IResumeConvertor.js";
import { promises as fs } from 'fs';
import { homedir } from 'os';
import * as path from 'path';

export class Commander {
    constructor(private resumeConvertor: IResumeConvertor) { }

    public async generate(): Promise<void> {
        const program = new Command();
        program.command('generate')
            .description('generate html resume from json')
            .option('--output <string>', 'path to html resume output')
            .option('--lang <string>', 'language of the resume')
            .argument('<string>', 'path to json resume input')
            .action(async (jsonPath, options) => {
                const resume = await fs.readFile(path.join(homedir(), jsonPath));
                const resumeHtml = await this.resumeConvertor.generateResume(JSON.parse(resume.toString()));
                fs.writeFile(path.join(homedir(), options.output), resumeHtml);
            });
        program.parse();
    }
};