function swapPageTab(requestedId, originBtnId) {
    var requestedDiv = document.getElementById(requestedId);
    var originBtn = document.getElementById(originBtnId)
    var divTable = document.querySelectorAll('.tabBody');
    var btnTable = document.querySelectorAll('.tabButton');

    divTable.forEach(element => {
        element.style.display = 'none';
    });

    btnTable.forEach(element => {
        element.classList.remove('activeTab');
    });

    originBtn.classList.add('activeTab')
    requestedDiv.style.display = 'block';
};

// Made by Shaheem Javied