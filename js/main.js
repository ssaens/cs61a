var tableOfContents = {
    "Python" : ["Basic Syntax", "Functions", "Evaluating Expressions", "Control", "Higher Order Functions"],
    "Environments" : ["Environment Diagrams", "Visualizing the Code"],
    "Abstraction" : ["Function Abstraction", "Abstract Data Types"],
    "Recursion" : ["Recursive Calls", "Tail Recursion"],
    "Containers" : ["Lists", "Dictionaries", "Sets"],
    "Recursive Data Structures" : ["Trees", "Linked Lists"],
    "Objects" : ["Classes", "Inheritance", "Representation"],
    "Scheme" : ["Basic Syntax", "Special Forms", "Lists"],
    "Sequences" : ["Iterators", "Generators", "Streams"],
    "Interpreters" : ["Evaluation", "Application"],
    "SQL" : ["Tables", "Joining Tables", "Recursive Select"],
    "Distributed Computation" : ["Spark"],
    "More Practice" : [],
}

function makeTag(type, attr, text) {
    attrs = [];
    for (var key in attr) {
        attrs.push(key + "='" + attr[key] + "'");
    }
    return '<' + type + ' ' + attrs.join(' ') + '>' + text + '</' + type + '>';
}

function generateNav(contents, page) {
    var homeLink = makeTag("a", {"href":"../index.html"}, "Home");
    var homeTag = makeTag("h3", {}, homeLink);
    if (page == 0) {
        homeLink = makeTag("a", {"href":"index.html"}, "Home");
        homeTag = makeTag("h3", {"class":"active"}, homeLink);
    }
    var navHtml = homeTag;
    var i = 1;
    for (section in contents) {
        navHtml += generateNavSection(i, section, contents[section], page==0, i==page);
        i += 1;
    }
    return makeTag("div", {"style":"padding:15px"}, navHtml);
}

function generateNavSection(sectionNum, sectionName, subSections, onHome, active) {
    var sectionTitle = sectionNum + ". " + sectionName;
    var sectionURI = sectionNum + "-" + sectionName.toLowerCase().replace("'", "").split(' ').join("-") + ".html";
    if (onHome) {sectionURI = "pages/" + sectionURI}
    var headerLink = makeTag("a", {"href":sectionURI}, sectionTitle);
    var sectionHeader = makeTag("h3", {}, headerLink);
    if (active) {
        sectionHeader = makeTag("h3", {"class":"active"}, headerLink);
    }
    var subSectionHtml = "";
    j = 0;
    for (var j = 0; j < subSections.length; j++) {
        subSectionHtml += generateNavSubsection(sectionNum, sectionURI, j+1, subSections[j]);
    }
    subSectionHtml = makeTag("div", {"class":"nav-subsection"}, subSectionHtml);
    return makeTag("div", {"class":"nav-section"}, sectionHeader + subSectionHtml);
}

function generateNavSubsection(sectionNum, sectionURI, subSectionInd, subSection) {
    var subSectionTag = '#' + subSection.toLowerCase().replace("'", "").split(' ').join('-');
    var subSectionURI = sectionURI + subSectionTag
    var subSectionTitle = sectionNum + "." + subSectionInd + " " + subSection;
    return makeTag("li", {}, makeTag("a", {"href":subSectionURI}, subSectionTitle));
}

function generateHeader(home) {
    var imgURI = "../img/logo_base.gif";
    if (home) imgURI = "img/logo_base.gif";
    var headerHtml = "<div class='color_strip cs3'></div> \
            <div class='container'> \
                <span id='navbtn'><a onclick='toggleNav()'> \
                    <i class='fa fa-bars' aria-hidden='true'></i> \
                </a></span> \
                <h1 style='display: inline-block'><a href='http://dillonyao.tk/cs61a'>CS<span style='border-bottom: 2px solid #0099ff'>61a</span> Study Guide</a></h1> \
            </div><a href='http://dillonyao.tk'><img id='logo' src=" + imgURI + "></a> \
            <div class='color_strip cs3'></div>";
    return headerHtml;
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 260px */
function toggleNav() {
    var nav = document.getElementById("main_nav");
    var content = document.getElementById("content");
    if (nav.classList.contains("open")) {
        nav.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        nav.style.width = "260px";
        content.style.marginLeft = "260px";
    }
    nav.classList.toggle("open");
    document.getElementById("navbtn").classList.toggle("open");
}

function initializePage() {
    pageID = parseInt($("pageid").attr("id"))
    $("#main_nav").html(generateNav(tableOfContents, pageID));
    $("header").html(generateHeader(pageID==0));
}
