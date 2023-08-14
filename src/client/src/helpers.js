export default function filterPatternsByName(list, name) {
    if (name) return list.filter((pattern) => {
        return typeof string === 'string' ? pattern.name.toLowerCase().includes(name) : "";
    }); else return '';
}

 