var lessons = [];

function getlessons() {
    db.ref("lessons").once('value')
        .then((snapshot)=>{ // snapshot of the data - request the return value for the data at the time of query...
            const data=snapshot.val();
            for (const l in data) {
                lessons.push(data[l]);
            }
            populateBrowseTable();
        });
}


function browseClicked() {
    document.getElementById("lessonView").style.display = "none";
    document.getElementById("browseView").style.display = "block"; 
    document.getElementById("browseTableIndex").style.display = "flex";
}

var slideIndex = 0;

function loadLesson(lesson) {
    var slides = new Array();
    db.ref('slides').orderByKey().equalTo(lesson.id).once('value')
        .then((snapshot)=>{
            const data = snapshot.val();
            for (const l in data) {
                slides = data[l].slides;
            }
            slideIndex = 0;
            document.getElementById("lessonTitle").innerHTML = lesson.name;
            var slideView = document.getElementById("lessonSlides");
            removeAllChildNodes(slideView);
            removeAllChildNodes(document.getElementById("lessonsSlideIndex"));
            var img = document.createElement('img');
            img.style.display = "block";
            img.style.maxHeight = "100%";
            img.style.height = "auto";
            img.style.maxWidth = "100%";
            img.style.width = "auto";
            img.src = 'data:image/jpg;base64,'+slides[slideIndex];
            slideView.appendChild(img);
            var tableIndexView = document.getElementById("lessonsSlideIndex");
            var previous = document.createElement("button");
            previous.appendChild(document.createTextNode("Previous"));
            if (slideIndex == 0) {
                previous.disabled = true;
            }
            previous.onclick = function() {
                slideIndex--;
                next.disabled = false;
                if (slideIndex == 0) {
                    previous.disabled = true;
                }
                img.src = 'data:image/jpg;base64,'+slides[slideIndex];
                pageNum = document.getElementById("slide-page-num");
                removeAllChildNodes(pageNum);
                pageNum.appendChild(document.createTextNode(slideIndex+1 + " of " + slides.length));
            }
            tableIndexView.appendChild(previous);
            var pageNum = document.createElement('label');
            pageNum.appendChild(document.createTextNode(slideIndex+1 + " of " + slides.length ));
            pageNum.id = "slide-page-num";
            tableIndexView.appendChild(pageNum);
            var next = document.createElement("button");
            next.appendChild(document.createTextNode("Next"));
            if (slideIndex == slides.length-1) {
                next.disabled = true;
            }
            next.onclick = function() {
                slideIndex++;
                previous.disabled = false;
                if (slideIndex == slides.length-1) {
                    next.disabled = true;
                }
                img.src = 'data:image/jpg;base64,'+slides[slideIndex];
                pageNum = document.getElementById("slide-page-num");
                removeAllChildNodes(pageNum);
                pageNum.appendChild(document.createTextNode(slideIndex+1 + " of " + slides.length));
            }
            tableIndexView.appendChild(next);
        
            document.getElementById("browseView").style.display = "none";
            document.getElementById("browseTableIndex").style.display = "none";
            document.getElementById("lessonView").style.display = "block";
        });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var catalogPageIndex = 0;

function populateBrowseTable() {
    removeAllChildNodes(document.getElementById("browseView"));
    removeAllChildNodes(document.getElementById("browseTableIndex"));
    var table = document.createElement('table');
    table.className = "browse-table-master";
    var start = catalogPageIndex * 5;
    var end = start + 5;
    if (lessons.length <= end) {
        end = lessons.length;
    }

    for (var i = start; i < end; i++ ) {
        var curLesson = lessons[i];
        tr = table.insertRow(-1);
        tr.className = "browse-table-master-row";
        tr.id = "lesson"+i;
        tr.onclick = function() {
            var index = this.id.replace("lesson", "");
            loadLesson(lessons[index]);
        }
        var td = document.createElement('td');
        td = tr.insertCell(-1);

        var subtable = document.createElement('table');
        subtable.className = "subtable";
        row = subtable.insertRow(-1);
        var def = document.createElement('td');
        def = row.insertCell(-1);
        def.className = "browse-name";
        def.innerHTML = lessons[i].name;
        var def = document.createElement('td');
        def = row.insertCell(-1);
        def.className = "browse-slides";
        def.innerHTML = lessons[i].slide_count + " slides";
        row = subtable.insertRow(-1);
        var def = document.createElement('td');
        def = row.insertCell(-1);
        def.className = "browse-desc";
        def.innerHTML = lessons[i].description;
        var def = document.createElement('td');
        def = row.insertCell(-1);
        def.className = "browse-creator";
        def.innerHTML = "Created by: "+ lessons[i].creator;

        td.appendChild(subtable);
    }
    document.getElementById("browseView").appendChild(table);

    var tableIndexView = document.getElementById("browseTableIndex");
    var previous = document.createElement("button");
    previous.appendChild(document.createTextNode("Previous"));
    if (catalogPageIndex == 0) {
        previous.disabled = true;
    }
    previous.onclick = function() {
        catalogPageIndex--;
        populateBrowseTable();
    }
    tableIndexView.appendChild(previous);
    tableIndexView.appendChild(document.createTextNode(catalogPageIndex+1 + " of " + Math.ceil(lessons.length / 5) ))
    var next = document.createElement("button");
    next.appendChild(document.createTextNode("Next"));
    if (catalogPageIndex == Math.ceil(lessons.length / 5)) {
        next.disabled = true;
    }
    next.onclick = function() {
        catalogPageIndex++;
        populateBrowseTable();
    }
    tableIndexView.appendChild(next);
}