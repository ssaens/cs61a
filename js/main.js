var tableOfContents = {
    "Python" : ["Basic Syntax", "Functions", "Evaluating Expressions", "Control", "Higher Order Functions"],
    "Environments" : ["Environment Diagrams", "Visualizing the Code"],
    "Recursion" : ["Recursive Calls", "Tail Recursion"],
    "Abstraction" : [],
    "Containers" : [],
    "Recursive Data Structures" : [],
    "Objects" : [],
    "Sequences" : [],
    "Iterators, Generators, and Streams" : [],
    "Scheme" : [],
    "Interpreters" : [],
    "SQL" : [],
    "Distributed Computation" : [],
    "More Practice" : [],
}

function makeTag(type, attr, text) {
    attrs = []
    for (key in attr) {
        attrs.add(key + "='" + attr[key] + "'");
    }
    return '<' + type + ' ' + attr.join(' ') + '>' + text + '</' + tag + '>';
}

function generateNav(contents, page) {
    var home = "<h3><a href='../index.html'>Home</a></h3>"
    if (page == 0) {home = "<h3 class='active'><a href='index.html'>Home</a></h3>"}
    var navHtml = "<div style='padding:15px'>" + home;
    var i = 1;
    for (section in contents) {
        navHtml += generateNavSection(i, section, contents[section], i==page);
        i += 1;
    }
    return navHtml + "</div>";
}

function generateNavSection(sectionNum, sectionName, subSections, active) {
    var sectionTitle = sectionNum + ". " + sectionName;
    var sectionURI = "pages/" + sectionNum + "-" + sectionName.toLowerCase().split(' ').join("-") + ".html";
    var headTag = "<h3>"
    if (active) { headTag = "<h3 class='active'>"}
    var sectionHeader = headTag + "<a href='" + sectionURI + "'>" + sectionTitle + "</a></h3>";
    var subSectionHtml = "<div class='nav-subsection'>";
    j = 0;
    for (var j = 0; j < subSections.length; j++) {
        subSectionHtml += generateNavSubsection(sectionNum, sectionURI, j+1, subSections[j]);
    }
    subSectionHtml += '</div>';
    return "<div class='nav-section'>" + sectionHeader + subSectionHtml + '</div>';
}

function generateNavSubsection(sectionNum, sectionURI, subSectionInd, subSection) {
    var subSectionTag = '#' + subSection.toLowerCase().split(' ').join('-');
    var subSectionURI = sectionURI + subSectionTag
    var subSectionTitle = sectionNum + "." + subSectionInd + " " + subSection;
    return "<li><a href='" + subSectionURI + "'>" + subSectionTitle + "</a></li>";
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
            </div><a href='http://dillonyao.tk'><img id='logo' src=" + imgURI + "></a><div class='color_strip cs3'></div>";
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