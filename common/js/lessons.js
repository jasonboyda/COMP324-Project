function browseClicked() {
    document.getElementById("lessonView").style.display = "none";
    document.getElementById("browseView").style.display = "block"; 
}

var slideIndex = 0;

function loadLesson(lesson) {
    var lessons = [
        {
            id: "abc123",
            name: "Lesson 1",
            description: "Lesson 1 description",
            creator: "Jane Doe",
            slides: [
                "common/img/lessons/lesson1-slide1.jpeg",
                "common/img/lessons/lesson1-slide2.jpeg",
                "common/img/lessons/lesson1-slide3.jpeg"
            ]
        },
        {
            id: "xyz789",
            name: "Lesson 2",
            description: "Lesson 2 description",
            creator: "John Smith",
            slides: [
                "common/img/lessons/lesson2-slide1.jpeg",
                "common/img/lessons/lesson2-slide2.jpeg",
                "common/img/lessons/lesson2-slide3.jpeg",
                "common/img/lessons/lesson2-slide4.jpeg"
            ]
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

    slideIndex = 0;
    document.getElementById("lessonTitle").innerHTML = lessons[index].name;
    var slideView = document.getElementById("lessonSlides");
    removeAllChildNodes(slideView);
    var img = document.createElement('img');
    img.style.display = "block";
    img.style.maxHeight = "100%";
    img.style.height = "auto";
    img.style.maxWidth = "100%";
    img.style.width = "auto";
    img.src = lessons[index].slides[slideIndex];
    slideView.appendChild(img);
    document.getElementById("browseView").style.display = "none";
    document.getElementById("lessonView").style.display = "block";
}

function changeSlide(num) {
    var lessons = [
        {
            id: "abc123",
            name: "Lesson 1",
            description: "Lesson 1 description",
            creator: "Jane Doe",
            slides: [
                "common/img/lessons/lesson1-slide1.jpeg",
                "common/img/lessons/lesson1-slide2.jpeg",
                "common/img/lessons/lesson1-slide3.jpeg"
            ]
        },
        {
            id: "xyz789",
            name: "Lesson 2",
            description: "Lesson 2 description",
            creator: "John Smith",
            slides: [
                "common/img/lessons/lesson2-slide1.jpeg",
                "common/img/lessons/lesson2-slide2.jpeg",
                "common/img/lessons/lesson2-slide3.jpeg",
                "common/img/lessons/lesson2-slide4.jpeg"
            ]
        },
    ]
    var index = 0;
    lesson = document.getElementById("lessonTitle");
    for (var i = 0; i < lessons.length; i++) {
        var l = lessons[i];
        if (l.name === lesson.innerHTML) {
            index = i;
            break;
        }
    }

    slideIndex += num;
    var slideView = document.getElementById("lessonSlides");
    removeAllChildNodes(slideView);
    var img = document.createElement('img');
    img.style.display = "block";
    img.style.maxHeight = "100%";
    img.style.height = "auto";
    img.style.maxWidth = "100%";
    img.style.width = "auto";
    img.src = lessons[index].slides[slideIndex];
    slideView.appendChild(img);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function populateBrowseTable() {
    var lessons = [
        {
            id: "abc123",
            name: "Lesson 1",
            description: "Lesson 1 description",
            creator: "Jane Doe",
            slides: [
                "common/img/lessons/lesson1-slide1.jpeg",
                "common/img/lessons/lesson1-slide2.jpeg",
                "common/img/lessons/lesson1-slide3.jpeg"
            ]
        },
        {
            id: "xyz789",
            name: "Lesson 2",
            description: "Lesson 2 description",
            creator: "John Smith",
            slides: [
                "common/img/lessons/lesson2-slide1.jpeg",
                "common/img/lessons/lesson2-slide2.jpeg",
                "common/img/lessons/lesson2-slide3.jpeg",
                "common/img/lessons/lesson2-slide4.jpeg"
            ]
        },
    ]
    
    var table = document.createElement('table');
    table.className = "browse-table-master";
    for (var i = 0; i < lessons.length; i++ ) {
        tr = table.insertRow(-1);
        tr.className = "browse-table-master-row";
        var clickHandler = function(row) {
            return function() {
                var lesson = row.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
                loadLesson(String(lesson));
            };
        };
        tr.onclick = clickHandler(tr);
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
        def.innerHTML = lessons[i].slides.length + " slides";
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
        /*
        var td = document.createElement('td');
        td = tr.insertCell(-1);
        var div = document.createElement('div');
        div.style.display = "flex";
        var pTitle = document.createElement('p');
        pTitle.className = "browse-name";
        pTitle.innerHTML = lessons[i].name;
        var pSlides = document.createElement('p');
        pSlides.className = "browse-slides";
        pSlides.innerHTML = lessons[i].slide_count;
        div.appendChild(pTitle);
        div.appendChild(pSlides);
        td.appendChild(div);
        var div = document.createElement('div');
        div.style.display = "flex";
        var pDesc = document.createElement('p');
        pDesc.className = "browse-desc";
        pDesc.innerHTML = lessons[i].description;
        var pCreator = document.createElement('p');
        pCreator.className = "browse-creator";
        pCreator.innerHTML = lessons[i].creator;
        div.appendChild(pDesc);
        div.appendChild(pCreator);
        td.appendChild(div);
        */
    }

    document.getElementById("browseView").appendChild(table);
}