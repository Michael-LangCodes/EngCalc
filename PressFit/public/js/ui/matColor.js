
export function matSelectColor(id, button){
    const select = document.getElementById(id);

    // Start white
    select.classList.add("matNormal");

    // On submit click
    button.addEventListener("click", () => {
        if (select.value === "none") {
            select.classList.add("matError");
            select.classList.remove("matNormal");
        } else {
            select.classList.remove("matError");
            select.classList.add("matNormal");
        }
    });

    // On change
    select.addEventListener("change", () => {
        if (select.value !== "none") {
            select.classList.remove("matError");
            select.classList.add("matNormal");
        }
    });
}