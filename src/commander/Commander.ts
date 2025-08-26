import { Command } from 'commander';

import { Controler, IResumeConvertor } from "../../packages/json_cv_schema/src/Index.js";
import * as fs from 'node:fs/promises';
import { homedir } from 'os';
import * as path from 'path';

export class Commander {
    constructor(private resumeConvertor: IResumeConvertor) { }

    public async generate(): Promise<void> {
        const program = new Command();
        program.command('generate')
            .description('generate html resume from json')
            .requiredOption('--output <string>', 'path to html resume output')
            .requiredOption('--lang <string>', 'language of the resume')
            .argument('<string>', 'path to json resume input')
            .action(async (jsonPath, options) => {
                const resume = JSON.parse((await fs.readFile(path.join(homedir(), jsonPath))).toString());
                Controler.isValidResume(resume);
                const resumeHtml = await this.resumeConvertor.generateResume(options.lang, resume);
                fs.writeFile(path.join(homedir(), options.output), resumeHtml);
            });
        program.parse();
    }
};