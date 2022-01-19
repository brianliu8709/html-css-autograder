//updates the preview window with the html and css in the boxes
export const showPreview = () => {
  let htmlCode = document.getElementById("htmlCode").value
  let cssCode = "<style>" + document.getElementById("cssCode").value + "</style>"
  let frame = document.getElementById("preview-window").contentWindow.document
  frame.open()
  frame.write(htmlCode + cssCode)
  frame.close()
}

document.getElementById("htmlCode").addEventListener("input", showPreview)
document.getElementById("cssCode").addEventListener("input", showPreview)