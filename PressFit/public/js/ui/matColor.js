
export function matSelectColor(id, button){
    const select = document.getElementById(id);

    // Start white
    select.classList.add("normal");

    // On submit click
    button.addEventListener("click", () => {
        if (select.value === "none") {
            select.classList.add("error");
            select.classList.remove("normal");
        } else {
            select.classList.remove("error");
            select.classList.add("normal");
        }
    });

    // On change
    select.addEventListener("change", () => {
        if (select.value !== "none") {
            select.classList.remove("error");
            select.classList.add("normal");
        }
    });
}