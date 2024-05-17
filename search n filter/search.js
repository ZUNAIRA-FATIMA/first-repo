function myFunction() {

    let input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('myInput');

    filter = input.value.toUpperCase();

    ul = document.getElementById('myUl');

    li = ul.getElementsByTagName('li');

    // here we start  loop to find our search result from list items and hide those result who do not match the search query

    for (i = 0; 1 < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textcontent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

        }
        else {
            li[i].style.display = "none";
        }
        



    }
}
