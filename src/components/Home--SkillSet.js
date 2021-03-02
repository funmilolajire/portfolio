import { SkillSetIcons } from "./SkillSetIcons";

export const SkillSet = () => (
    <div className="pt-12 mt-32 border-t border-b pb-14 Home--SkillSet border-1 border-gdb border-opacity-10">
        <h2 className="pb-4 text-4xl font-bold">My Toolbox Of Skills</h2>
        <p className="text-base">A collection of web building tools and technologies I'm comfortable working with: </p>
        <SkillSetIcons />
    </div>
)