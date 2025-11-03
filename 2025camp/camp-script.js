function openTab(evt, tabName) {
    var i, tabpane, tablinks;

    // 모든 tab-pane 숨기기 (active 클래스 제거)
    tabpane = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabpane.length; i++) {
        tabpane[i].classList.remove("active");
    }

    // 모든 tab-link에서 active 클래스 제거
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 클릭된 탭 보이기 (active 클래스 추가)
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}