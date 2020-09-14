const description_to_html = (text) => {

    var matches = text.match(/{link;(\w|\/|\s)+;(\w|\s)*}/g);

    if(matches == null) return text;
  
    matches.forEach((match, index) => {
      var split = match.split(";");
      text = text.replace(match,
        `<a href="` + split[1] + `">` + split[2].substring(0,split[2].length-1) + `</a>`
      )
    }
    )
    return text;
  };


export default description_to_html;