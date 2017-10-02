//EXERCISE 1
document.writeln("<h1>EXERCISE 1</h1>");
document.writeln("<p>Sample Output :</p>");

for (var i=0; i <= 15; i++ ) {
    document.write('<p>"');
    if (i % 2 == 0) {
        document.write( i + " is even");
    }
    else {
        document.write( i + " is odd");
    }
    document.writeln('"</p>');
}

//EXERCISE 2
document.writeln("<br>");
document.writeln("<h1>EXERCISE 2</h1>");
var star = "*";
for (var i=0; i < 5; i++ ) {
    document.writeln("<p>" + star + "</p>");
    star += "*";
}

//EXERCISE 3
document.writeln("<br>");
document.writeln("<h1>EXERCISE 3</h1>");
for (var i=1; i <= 100; i++ ) {
    document.write("<p>");
    if ((i % 3 == 0) && (i % 5 == 0)) {
        document.write("CodeMonkey");
    }
    else if (i % 3 == 0) {
        document.write("Code");
    }
    else if (i % 5 == 0) {
        document.write("Monkey");
    }
    else {
        document.write(i);
    }
    document.writeln("</p>");
}

