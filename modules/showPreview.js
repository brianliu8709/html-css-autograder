// //updates the preview window with the html and css in the boxes
// export const showPreview = () => {
//   let htmlCode = htmlEditor.getValue()
//   let cssCode = "<style>" + cssCode.getValue() + "</style>"
//   let frame = document.getElementById("preview-window").contentWindow.document
//   frame.open()
//   frame.write(htmlCode + cssCode)
//   frame.close()
// }

// const htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
//     mode: "htmlmixed"
// })
// const cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
//     mode: "css"
// })

// document.getElementById("htmlCode").addEventListener("input", showPreview)
// document.getElementById("cssCode").addEventListener("input", showPreview)