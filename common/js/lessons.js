function browseClicked() {
    document.getElementById("lessonView").style.display = "none";
    document.getElementById("browseView").style.display = "block"; 
}

function loadLesson(lesson) {
    var lessons = [
        {
            id: "abc123",
            name: "Lesson 1",
            description: "Lesson 1 description",
            slide_count: 21
        },
        {
            id: "xyz789",
            name: "Lesson 2",
            description: "Lesson 2 description",
            slide_count: 15
        },
    ]

    var index = 0;
    for (var i = 0; i < lessons.length; i++) {
        var l = lessons[i];
        if (l.name === lesson) {
            index = i;
            break;
        }
    }

    document.getElementById("lessonTitle").innerHTML = lessons[index].name;
    document.getElementById("browseView").style.display = "none";
    document.getElementById("lessonView").style.display = "block";
}

function populateBrowseTable() {
    var lessons = [
        {
            id: "abc123",
            name: "Lesson 1",
            description: "Lesson 1 description",
            slide_count: 21
        },
        {
            id: "xyz789",
            name: "Lesson 2",
            description: "Lesson 2 description",
            slide_count: 15
        },
    ]
    
    var table = document.createElement('table');

    for (var i = 0; i < lessons.length; i++ ) {
        tr = table.insertRow(-1);
        var clickHandler = function(row) {
            return function() {
                var lesson = row.childNodes[0].childNodes[0].innerHTML;
                loadLesson(String(lesson));
            };
        };
        tr.onclick = clickHandler(tr);
        var td = document.createElement('td');
        td = tr.insertCell(-1);
        var div = document.createElement('div');
        div.className = "browse-name";
        div.innerHTML = lessons[i].name;
        td.appendChild(div);
        var div = document.createElement('div');
        div.className = "browse-desc";
        div.innerHTML = lessons[i].description;
        td.appendChild(div);
    }

    document.getElementById("browseView").appendChild(table);
}