import { includes } from "lodash";

export default function filterPatternsByName(list, name) {
    if (name) {
        return list.filter((pattern) => {
            let searchedPattern = pattern.PATTERN_TITLE;
            return searchedPattern.toLowerCase().includes(name);
        })
    }
}