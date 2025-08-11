import { Commander } from './commander/Commander';
import ResumeGenerator from "../../libs/typescript_cv_template/src/ResumeConvertor.js";

const resumeGenerator = new ResumeGenerator();

void new Commander(resumeGenerator).generate();