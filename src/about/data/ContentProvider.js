import React from 'react'
import Section from '../template/Section'
import {skills} from './Skills'
import {experience} from './Experience'
import {education} from './Education'
import {section_title, entries} from './keys'

const mapSourceToSection = (data_source) => {

    console.log("Mapping source to section");
    console.log("data source is: ");
    console.log(data_source);
    const props = {
      [section_title]: data_source[section_title],
      [entries]: data_source[entries]
    }
    return <Section {...props}/>
}

const a = mapSourceToSection(skills);
const ex = mapSourceToSection(experience);
const ed = mapSourceToSection(education);

export {
  a as skills,
  ex as experience,
  ed as education
}
