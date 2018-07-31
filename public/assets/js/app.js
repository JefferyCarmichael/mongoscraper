//Handle Scrape button
$("#scrape").on("click", function() {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function(data) {
        console.log(data)
        // window.location = "/"
        $(location).attr("href","/");
    })
});

//Set clicked nav option to active
$(".navbar-nav li").click(function() {o
   $(".navbar-nav li").removeClass("active");
   $(this).addClass("active");
});

//Save Article button
$(".save").on("click", function() {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/save/" + thisId
    }).done(function(data) {
        window.location = "/"
    })
});

//Delete Article button
$(".delete").on("click", function() {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + thisId
    }).done(function(data) {
        window.location = "/saved"
    })
});

//Save Note button
$(".saveNote").on("click", function(event) {
    event.preventDefault();
    var note = {};
    id = $(this).attr("data-id");
    note.body =$("#noteText").val().trim();
    console.log("note:"+ note);
    if (!$("#noteText").val()) {
        alert("please enter a note to save")
    }else {
        console.log("note id: "+id)
      $.post("/notes/save/" + id,  { body: note.body}).then(function(data) {
              // Log the response
              console.log(data);
            //   clear note box
              $("#noteText").val("");
              $(".modalNote").modal("hide");
            //   window.location = "/saved"
              $(location).attr("href","/saved");
          });
        }    
});

//Handle Delete Note button
$(".deleteNote").on("click", function() {
    var noteId = $(this).attr("data-note-id");
    var articleId = $(this).attr("data-article-id");
    $.ajax({
        method: "DELETE",
        url: "/notes/delete/" + noteId + "/" + articleId
    }).done(function(data) {
        console.log(data)
        $(".modalNote").modal("hide");
        // window.location = "/saved"
        $(location).attr("href","/notes/:id");
    })
});