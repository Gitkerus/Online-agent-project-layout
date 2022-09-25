const zoomBtnMobile = document.getElementById("zoomBtnMobile");
const kanbanWrapper = document.getElementById("kanbanWrapper");

zoomIn = () => {
  zoomBtnMobile.classList.remove("zoomBtnMobile-zoomOut");
  zoomBtnMobile.classList.add("zoomBtnMobile-zoomIn");
  kanbanWrapper.classList.add("kanbanWrapper-zoomIn");
};

zoomOut = () => {
  zoomBtnMobile.classList.remove("zoomBtnMobile-zoomIn");
  zoomBtnMobile.classList.add("zoomBtnMobile-zoomOut");
  kanbanWrapper.classList.remove("kanbanWrapper-zoomIn");
};

change = () => {
  const haveClass = zoomBtnMobile.classList.contains("zoomBtnMobile-zoomOut");
  haveClass ? zoomIn() : zoomOut();
};
zoomBtnMobile.addEventListener("click", change);
