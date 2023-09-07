async function fetchBooks() {
    const res = await fetch("./books.json");
    const json = await res.json();

    const selectField = document.getElementById("select-field")
    // console.log(json["books"]);
    const uniqueCategories = [];
    json.books.forEach(element => {

        if (!uniqueCategories.includes(element.category)) {
            uniqueCategories.push(element.category);
            // console.log(element.category);
            // const option = `<option value="${element.category}">${element.category}</option>`;
            const option = document.createElement("option");
            option.value = element.category;
            option.text = element.category;
            selectField.appendChild(option);


        }
    });
}

fetchBooks();