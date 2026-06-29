function test() {
  for (j = 1; j < 10; j++) {
    for (i = 1; i <= j; i++) {
      document.write("<img src='image/images.jpg' style='height: 100px;'>");
    }
    document.writeln("<p></p>");
  }
}

test();
