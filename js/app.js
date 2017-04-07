window.onload = function () {
    var generateBtn = document.getElementById('generateBtn').onclick = generation;
    var sortBtn = document.getElementById('sortBtn').onclick = toSort;

    function generation() {
        var oldElements = document.getElementsByClassName('number');
        if (oldElements.length) {
            document.getElementById('content').innerHTML = "";
        }
        for (var i = 0; i < 10; i++) {
            var value = Math.floor(Math.random() * 10);
            var newDiv = document.createElement('div');
            newDiv.innerHTML = value;
            newDiv.classList.add((i + 1) + 'elem', 'number');
            var contentElem = document.getElementById('content');
            contentElem.appendChild(newDiv);
        }
    }

    function toSort() {
        var oldElements = document.getElementsByClassName('number');
        if (!oldElements.length) {
            alert("Befor sort you must generate a selection!");
            return;
        } else {
            for (var i = 1; i <= oldElements.length; i++) {
                var flag = 0;
                for (j = 1; j <= oldElements.length - i; j++) {
                    var first = document.getElementsByClassName((j) + 'elem')[0];
                    var second = document.getElementsByClassName((j + 1) + 'elem')[0];
                    var firstValue = first.textContent;
                    var secondValue = second.textContent;
                    if (firstValue > secondValue) {
                        first.textContent = secondValue;
                        second.textContent = firstValue;
                        flag = 1;
                    }

                }
                if (flag === 0) {
                    break;
                }

            }
        }
    }
}
