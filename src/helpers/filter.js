export function filter(type, lang, data, value){
    var solution;
    switch(type){
        case "public":
            console.log(type, lang, data, value)
            solution = data.filter(item => item.private === false)
             return filterLang(lang, solution, value)
        case "private":
            solution = data.filter(item => item.private === true)
             return filterLang(lang, solution, value)
        case "sources":
            solution = data.filter(item => item.type === "User")
            return filterLang(lang, solution, value)
        case "forks":
            solution = data.filter(item => item.fork === true)
            return filterLang(lang, solution, value)
        case "archived":
            solution = data.filter(item => item.archived === true)
            return filterLang(lang, solution, value)
        case "mirrors":
            solution = data.filter(item => item.mirror_url !== null)
            return filterLang(lang, solution, value)
        default: 
            console.log(type, lang, data, value)
            solution = data
            return filterLang(lang, solution, value)
    }
}


function filterLang(lang, data, value){
    switch(lang){
        case "JavaScript":
            return filterWords(data.filter(item => item.language === "JavaScript"), value)
        case "HTML":
            return filterWords(data.filter(item => item.language === "HTML"), value)
        case "CSS":
            return filterWords(data.filter(item => item.language === "CSS"), value)
        case "Other":
            return filterWords(data.filter(item => item.language === null), value)
        default:
            return filterWords(data, value)
    }
}

function filterWords(data, value){
    const updatedList = data.filter(item => {
        return (
          item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
      });
    return updatedList
}