const container = document.getElementById("container");

function createDivs(num) 
{

    for (let i = 0; i < num; i++)
    {
        const parent = document.createElement("div");
        parent.classList.add("parent");

        container.appendChild(parent);  

    }
}

createDivs(4);