// $(document).ready(function() {
    var clock = 15;
    var finish = 7;
    var number = clock;
    var losses = 0;
    var medals = 0;
    var DQ = 0;
    var trackQuestion = [{
        question: "Who holds the World Record in the 100 metres?",
        answers: { a: "Christian Coleman", b: "Michael Rodgers", c: "Usain Bolt", d: "Justin Gatlin"},
        correctOne: "c",
        image: "assets/images/bolt.jpg",
        info: "Answer is Usain - The world Record is 9.58"
    },
    {
        question: "Which Female holds the World Record in the 100 metres?",
        answers: { a: "Florence Griffith-Joyner", b: "Carmelita Jeter", c: "Shelly-Ann Fraser-Pryce", d: "Marion Jones"},
        correctOne: "a",
        image: "assets/images/FLO.jpg",
        info: "Answer is Flo Jo - Her record still stands at 10.49 even after 30 years!!",
    },{
        question: "What Female athlete hold the World Record in the 200 metres?",
        answers: { a: "Marion Jones", b: "Florence Griffith-Jones", c: "Allyson Felix", d: "Dafne Schippers"},
        correctOne: "b",
        image: "assets/images/Jo.jpg",
        info: "Answer is Flo Jo - Again holding still for 30 years is 21.34!!",
    },{
        question: " What Female holds the World Record in the 400 metres?",
        answers: { a: "Marita Koch", b: "Sanya Richard-Ross", c: "Shaunae Miller-Uibo", d: "Cathy Freeman"},
        correctOne: "a",
        image: "assets/images/Marita.jpg",
        info: "Answer is Marita - Her record stands at 47.60 for 33 years strong!!",
    },{
        question: "Who has the World Record in the 200 metres?",  
        answers: { a: "Yohan Blake", b: "Michael Jonson", c: "Walter Dix", d:"Usain Bolt"},
        correctOne: "d",
        image: "assets/images/Usain.jpeg",
        info: "Answer is  Usain - A blazing 19.19 seconds!!!",
    },{
        question: "Who has the World Record in the 400 metres?",  
        answers: { a: "Jeremy Wariner", b: "Michael Johnson", c: "Wayde van Niekerk", d: "LaShawn Merritt"},
        correctOne: "c",
        image: "assets/images/Wayde.jpg",
        info: "Answer is Wayde - Breaking the old record by 0.15 that was set by Micheal Johnson(USA) which stood for 17 years!! The new time 43.03!!",
    },{
        question: " What team holds the Word Record in the 4x100m Relay?",    
        answers: { a: "Jamaica", b: "USA", c: "Germany", d: "Great Britain & N.I."},
        correctOne: "a",
        image: "assets/images/TeamJamaica.jpg",
        info: "Answer is Jamaica - They hold the record at 36.84!!",
    },
    {
        question: "Which team holds the World Record in the 4x400m Relay?",    
        answers: { a: "Great Britain & N.I.", b: "Bahamas", c: "USA", d: "Jamaica"},
        correctOne: "c",
        image: "assets/images/usaMen.jpg",
        info: "Answer is USA - Speeding around the track in 2:54.29 min/secs, set back in 1993!!!",
    },
    {
        question: "Which Track & Field Athlete recieved the highest paid contract?",
        answers: { a: "Allyson Felix", b: "Sydney McLaughlin", c: "Jenny Simpson", d: "Christian Coleman"},
        correctOne: "b",
        image: "assets/images/Sydney.jpg",
        info: "Answer is Sydney - It is estimated at $1.7 million, making her not only highest contract for track but also youngest!",
    },
    {
        question: "Which Female team has the World Record in the 4x100m Relay?",
        answers: { a: "USA", b: "Jamaica", c: "Russia", d: "Germany"},
        correctOne: "a",
        image: "assets/images/usagirls.jpg",
        info: "Answer is USA - Setting the record as 40.82",
    },
    ]

    //Clears time
    function end() {
        number = clock;
        clearInterval(intervalId);
        console.log("end");
    }

    //These are in between the times answered and show image when answered
    //This also adds losses and wins to end
    function wait() {
        end()
        $("#col-4").hide();
        $("#image").html('<img src="' + trackQuestion[i].image  + '"width="200">');
        waiting(finish = 6);
        console.log("Count wait" + medals)
    }
    function waiting() {
        console.log("Count waiting" + medals)
        console.log("Waiting" + i);
        intervalId = setInterval(decrementwait, 1000);
        console.log("Count waiting" + medals)
    }
    //Wait makes it go down
    function decrementwait() {
        console.log("Count decrementwait" + medals)
        console.log("decrementwait" + i)

        console.log("finish" + finish)
        finish = finish -1;
        console.log("finish" + finish)

        console.log("i="+i+" length="+trackQuestion.length)
        if (i == trackQuestion.length-1) {
            $("#time").html("<h3>" + "Final: " + finish + "</h3>");
        } else {
            $("#time").html("<h3>" + "On your marks: " + finish + "</h3>");
        }
        if (finish == 0) {
            console.log("finish is 0" + finish)
            end();
            start(i == i++);
        }
    }

    // var select_answers

    function reply_click() {
        console.log();
        select_answers = "";
        console.log(select_answers);
    }
    
    $("#col-4").hide();
    $("#time").hide();
    

    $("#begin").on("click", function() {
        console.log("begin")
        var losses = 0;
        var medals = 0;
        var DQ = 0;
        console.log(losses);
        console.log(medals);
        console.log(DQ);
        $("#begin").hide();
        start(i = 0);
    })

    function start() {
        console.log("LENGTH" + trackQuestion.length)
        console.log("i value: + i")
        if (i == trackQuestion.length) {
            finishline()
        } else {

            console.log("start" + i)
            run();

            console.log(trackQuestion[i])

            $("#image").html("");
            $("#info").html("");
            $("#Quiz").html("Question " + (i + 1) + ": " + trackQuestion[i].question);
            $("#list-a").html(trackQuestion[i].answers.a);
            $("#list-b").html(trackQuestion[i].answers.b);
            $("#list-c").html(trackQuestion[i].answers.c);
            $("#list-d").html(trackQuestion[i].answers.d);
            $("#time").show();
            $("#col-4").show();
            // select_answers === trackQuestion[i].correctOne
            $(".btn").click(function() {
                console.log("anything");
                if (trackQuestion[i].correctOne == $(this).attr("value")) {
                    medals === medals++;
                    console.log("Count Value Right" + medals);

                    $("#info").html("Good Job! " + trackQuestion[i].info);
                    console.log("here");
                    wait();

                } else {
                        losses === losses++;
                    $("#info").html("False start, wrong! " + trackQuestion[i].info);
                    
                    wait();
                }
                console.log(select_answers);
            })
        }
    }
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;

        $("#time").html("<h3>" + "Time:" + number + "</h3>");

        if (number === 0) {
            end();
            $("#info").html("Sorry to slow. " + trackQuestion[i].info);

            DQ == DQ++;
            wait();
        }
    }
    function finishline() {
        end()
        $("image").html("");
        $("#info").html("");
        $("#Quiz").html("Correct: " + medals + "Incorrect: " + losses + "No response: " + DQ);
        $("#time").hide();
        $("#col-4").hide();
        $("#begin").show();
    }












// });