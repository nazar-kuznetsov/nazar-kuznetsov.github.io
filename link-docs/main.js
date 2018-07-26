var link = document.querySelectorAll('.constructor-page .article-flexible-content a');
var docFile = /docx$/;
var pdfFile = /pdf$/;
var xlsFile = /xls$/;

function createIcon(classNames) {
  var span = document.createElement('span');
  span.className = classNames;
  return span;
}

for (var i = 0; i < link.length; i++) {
  var href = link[i].getAttribute('href');

  if (docFile.test(href)) {
    link[i].appendChild(createIcon('fas fa-file-alt'));
  }
  else if (pdfFile.test(href)) {
    link[i].appendChild(createIcon('far fa-file-pdf'));
  }
 else if (xlsFile.test(href)) {
    link[i].appendChild(createIcon('fa fa-file'));
  } else {
    link[i].appendChild(createIcon('fa fa-link'));

  }
}

